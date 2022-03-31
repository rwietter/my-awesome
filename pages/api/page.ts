import { ExtendedApiRequest, ExtendedApiResponse } from 'types'
import { delRedis, getRedis, setRedis } from '@/services/redis/redis-config'
import { Prisma } from '@/api/db'
import { withAuth } from '@/api/middlewares/'
import {
  badRequest, internalServerError
} from '@/api/utils/http/'
import { TitleData } from './types'

const handler = async (
  req: ExtendedApiRequest,
  res: ExtendedApiResponse
): Promise<void> => {
  switch (req.method) {
    case 'GET':
      return getAwesome()
    case 'DELETE':
      return deleteAwesome()
    default:
  }

  async function deleteAwesome(): Promise<void> {
    const { title_id: titleId, title } = req.query as { title_id: string, title: string }
    const user_id = req.user.id

    const title_id = titleId.toString()

    if (!title_id || !title || !user_id) {
      throw badRequest({
        message: 'Title is required'
      })
    }

    try {
      const deletedTitle = await Prisma.title.delete({
        where: {
          id: title_id
        },
        include: {
          content: true
        }
      })

      if (!deletedTitle) {
        throw internalServerError({
          message: 'You are not allowed to delete this awesome'
        })
      }

      await delRedis(`awesome-${user_id}-${title}`)
      await delRedis(`awesome-titles-${user_id}`)

      return res.status(200).json({
        error: false,
        status: 200
      })
    } catch (error) {
      return res.status(404).json(error)
    }
  }

  async function getAwesome(): Promise<void> {
    try {
      const user_id = req.user.id
      const { page } = req.query
      const ref = page.toString()

      if (!user_id || !ref) {
        throw badRequest({
          message: 'User id or page is required'
        })
      }

      const dataCache: string = await getRedis(`awesome-${user_id}-${ref}`) as string
      const data: TitleData = JSON.parse(dataCache)

      if (data?.title === ref) {
        return res.status(200).json({
          message: `Success to get awesome ${data.title ?? ''}`,
          status: 200,
          error: false,
          title: data.title,
          content: data.content?.content_item,
          contentId: data.content?.id,
          titleId: data.id
        })
      }

      let titleContent
      if (!ref) {
        titleContent = await Prisma.title.findFirst({
          where: {
            AND: {
              user_id
            }
          },
          include: {
            content: true
          }
        })
      } else {
        titleContent = await Prisma.title.findFirst({
          where: {
            AND: {
              title: ref,
              user_id
            }
          },
          include: {
            content: true
          }
        })
      }

      if (!titleContent) {
        throw internalServerError({
          message: 'Awesome not found. Please, create an awesome do visualize here!'
        })
      }

      await setRedis(`awesome-${user_id}-${titleContent?.title}`, JSON.stringify(titleContent))

      return res.status(200).json({
        message: `Success to get awesome ${titleContent.title ?? ''}`,
        status: 200,
        error: false,
        title: titleContent.title,
        content: titleContent.content?.content_item,
        contentId: titleContent.content?.id,
        titleId: titleContent.id
      })
    } catch (error: any) {
      return res.status(error.status ?? 500).json(error)
    }
  }
}

export default withAuth(handler)

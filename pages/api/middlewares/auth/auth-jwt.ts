import { getToken } from 'next-auth/jwt'
import { ExtendedApiRequest, ExtendedApiResponse } from 'types'

import { ERR_INVALID_TOKEN, errorMsg, unauthorized } from '@/api/utils/http'
import { Prisma } from '@/api/db'

const withAuth = (handler: any) => async (req: ExtendedApiRequest, res: ExtendedApiResponse) => {
  try {
    const authorization = await getToken({ req, secret: process.env.SECRET_JWT_KEY })

    if (!authorization) {
      throw unauthorized({
        name: ERR_INVALID_TOKEN,
        message: errorMsg.ERR_INVALID_TOKEN
      })
    }

    const currentUser = await Prisma.user.findUnique({
      where: { id: authorization.sub }
    })

    if (!currentUser) {
      throw unauthorized({
        name: ERR_INVALID_TOKEN,
        message: errorMsg.ERR_INVALID_TOKEN
      })
    }

    req.user = currentUser
    return handler(req, res)
  } catch (error: any) {
    return res.status(error.status ?? 500).json(error)
  }
}

export { withAuth }

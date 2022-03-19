/* eslint-disable react/destructuring-assignment */
import { withProtect } from 'hoc/auth';
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { ExtendedApiRequest, ExtendedApiResponse } from 'types';
import { getToken } from 'next-auth/jwt';
import { Session } from 'inspector';
import { performance } from 'perf_hooks';
import { AwesomeList } from '@/features/awesome-list';
import { adapter } from '@/services/api';
import { withProtectRoute } from '@/hoc/auth-hoc';
import { getRedis, setRedis } from '@/services/redis/redis-config';
import { Prisma } from '@/api/db';
import { withAuth } from '@/api/middlewares/';
import { badRequest, internalServerError } from '@/api/utils/http/';
import { TitleData } from '@/api/types';

export interface HomePageProps {
	data: {
		content: string;
		contentId: string;
		message: string;
		status: number;
		title: string;
    titleId: string;
    error?: Error | boolean;
	};
}

const HomePage = () => <AwesomeList />;

export default withProtectRoute(HomePage);

// export async function getServerSideProps(context: any) {
//   try {
//     const token = (await getSession(context)) as any;
//     const user_id = token?.accessToken?.sub;
//     const { awesomeName } = context.req.cookies;

//     if (!user_id) {
//       throw badRequest({
//         message: 'User id or page is required',
//       });
//     }
//     const start = performance.now();
//     const dataCache: string = (await getRedis(
//       `awesome-${user_id}-${awesomeName}`,
//     )) as string;
//     const data: TitleData = JSON.parse(dataCache);

//     if (data?.title === awesomeName) {
//       return {
//         props: {
//           data: {
//             message: `Success to get awesome ${data.title ?? ''}`,
//             status: 200,
//             error: false,
//             title: data.title,
//             content: data.content?.content_item,
//             contentId: data.content?.id,
//             titleId: data.id,
//           },
//         },
//       };
//     }

//     let titleContent;
//     if (!awesomeName) {
//       titleContent = await Prisma.title.findFirst({
//         where: {
//           AND: {
//             user_id,
//           },
//         },
//         include: {
//           content: true,
//         },
//       });
//     } else {
//       titleContent = await Prisma.title.findFirst({
//         where: {
//           AND: {
//             title: awesomeName,
//             user_id,
//           },
//         },
//         include: {
//           content: true,
//         },
//       });
//     }

//     if (!titleContent) {
//       throw internalServerError({
//         message:
// 				'Awesome not found. Please, create an awesome do visualize here!',
//       });
//     }

//     setRedis(
//       `awesome-${user_id}-${titleContent?.title}`,
//       JSON.stringify(titleContent),
//     );

//     return {
//       props: {
//         data: {
//           message: `Success to get awesome ${titleContent.title ?? ''}`,
//           status: 200,
//           error: false,
//           title: titleContent.title,
//           content: titleContent.content?.content_item,
//           contentId: titleContent.content?.id,
//           titleId: titleContent.id,
//         },
//       },
//     };
//   } catch (error: any) {
//     return {
//       props: {
//         data: {
//           ...error,
//         },
//       },
//     };
//   }
// }

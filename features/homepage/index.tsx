import Link from 'next/link';
import Image from 'next/image';
import 'vanilla-tilt';
import * as CSS from './styled';
import MyAwesomeImg from '../../public/myAwesome.png';
import { PublicHeader } from '@/components/public-header';

const Homepage = () => (
		<CSS.Container>
      <PublicHeader />
			<CSS.Main>
				<CSS.MainHeader>
					<CSS.Title>
						MyAwesome is the easy way to create lists with your favorite links
						and content
					</CSS.Title>
					<CSS.Description>
						Create, edit and remove your content lists simply and effectively
						with MyAwesome
					</CSS.Description>
					<CSS.GetStarted>
						<Link href="/auth/signup">Get Started</Link>
					</CSS.GetStarted>
				</CSS.MainHeader>
				<CSS.ImageAwesome
					data-tilt-glare
					data-tilt-max-glare="1.5"
					data-tilt
					data-tilt-max="10"
					data-tilt-speed="1000"
					data-tilt-perspective="3000"
				>
					<Image
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
						priority
						layout="responsive"
						src={MyAwesomeImg}
					/>
				</CSS.ImageAwesome>
			</CSS.Main>
		</CSS.Container>
);

export { Homepage };

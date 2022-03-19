import { AwesomeList } from '@/features/awesome-list';
import { withProtectRoute } from '@/hoc/auth-hoc';

const HomePage = () => <AwesomeList />;

export default withProtectRoute(HomePage);

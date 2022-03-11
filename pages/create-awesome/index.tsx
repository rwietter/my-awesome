import { withProtect } from 'hoc/auth';
import { CreateAwesome } from '@/features/create-awesome';

const MyAwesome = () => <CreateAwesome />;

export default withProtect(MyAwesome);

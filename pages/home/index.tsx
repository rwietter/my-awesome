import { withProtect } from 'hoc/auth';
import { AwesomeList } from '@/features/awesome-list';
import { adapter } from '@/services/api';

const HomePage = () => <AwesomeList />;

export default withProtect(HomePage);

export async function getServerSideProps(props: any) {
  return {
    props: {
      type: [''],
    },
  };
}

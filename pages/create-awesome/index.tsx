import { withProtect } from 'hoc/auth'
import { CreateAwesome } from '@/features/create-awesome'
import { withProtectRoute } from '@/hoc/auth-hoc'

const MyAwesome = () => <CreateAwesome />

export default MyAwesome

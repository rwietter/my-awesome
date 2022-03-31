import { ReactElement, ReactNode } from 'react'
import { withProtectRoute } from '@/hoc/auth-hoc'
import Header from '../header'
import { styled } from '@/features/ui/theme'

interface Props {
  children: ReactNode
}

const Main = styled('main', {
  transition: 'background 2s, color 2s ease'
})

function Layout({ children }: Props): ReactElement<any, any> {
  return (
    <>
      <Header />
			<Main>
				{children}
			</Main>
    </>
  )
}

export default Layout

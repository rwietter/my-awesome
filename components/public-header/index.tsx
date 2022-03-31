import React, { useEffect, useState } from 'react'
import { IoLanguage } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LogoImg from '../../public/logoipsum.svg'
import * as CSS from './styled'

const PublicHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isAuthPath, setIsAuthPath] = useState({ isSignIn: false, isSignUp: false })
  const router = useRouter()

  useEffect(() => {
    if (router.pathname.startsWith('/auth/')) {
      setIsVisible(false)
    }
    if (router.pathname === '/auth/signin') {
      setIsAuthPath({ isSignIn: false, isSignUp: true })
    } else if (router.pathname === '/auth/signup') {
      setIsAuthPath({ isSignIn: true, isSignUp: false })
    }
  }, [])

  return (
		<CSS.Header>
			{isVisible && (
				<CSS.HeaderLogo
					src={LogoImg}
					loading="lazy"
					alt="logo of the website"
					layout="fixed"
					width={130}
				/>
			)}
			<CSS.NavLinks>
				{isVisible && <Link href="/about">About</Link>}
				{(isAuthPath.isSignUp || isAuthPath.isSignIn) && <Link href="/">Home</Link>}
				{(isAuthPath.isSignIn || isVisible) && <Link href="/auth/signin">Sign in</Link>}
				{(isAuthPath.isSignUp || isVisible) && <Link href="/auth/signup">Sign up</Link>}
			</CSS.NavLinks>
			<div>
				<IoLanguage size={25} color="#FFF" />
			</div>
		</CSS.Header>
  )
}

export { PublicHeader }

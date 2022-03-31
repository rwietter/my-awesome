import React, { FC, ReactNode } from 'react'
import {
  Action, Cancel, Portal, Root, Trigger
} from '@radix-ui/react-alert-dialog'
import {
  Button,
  Flex,
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledTitle
} from './styled'
import { useThemeStore } from '../theme'

interface ContentProps {
	children: ReactNode;
}

interface AlertProps {
	handle: () => void;
}

function Content({ children, ...props }: ContentProps) {
  const { theme } = useThemeStore()
  return (
		<Portal>
			<StyledOverlay />
			<StyledContent {...props} theme={theme}>{children}</StyledContent>
		</Portal>
  )
}

const AlertDialogWapper = Root
const AlertDialogContent = Content

const AlertDialog: FC<AlertProps> = ({ handle, children }) => {
  const { theme } = useThemeStore()
  return (
    <AlertDialogWapper>
		<Trigger asChild>{children}</Trigger>
		<AlertDialogContent>
			<StyledTitle theme={theme}>Are you absolutely sure?</StyledTitle>
			<StyledDescription theme={theme}>
				This action cannot be undone. This will permanently delete your Awesome
				and remove your data from our servers.
			</StyledDescription>
			<Flex css={{ justifyContent: 'flex-end' }}>
				<Cancel asChild>
					<Button
						variant="mauve"
						css={{ marginRight: 25 }}
					>
						Cancel
					</Button>
				</Cancel>
				<Action asChild>
					<Button
						variant="red"
						onClick={handle}
					>
						Yes, delete
					</Button>
				</Action>
			</Flex>
		</AlertDialogContent>
    </AlertDialogWapper>
  )
}

export { AlertDialog }

import { useEffect, useState } from 'react'

import { adapter } from '@/services/api'
import { Toastfy } from '@/features/ui/toastfy'
import * as CSS from './styled'
import { awesomeListActions } from '@/features/awesome-list'
import { AwesomeLink } from './types'

export function SidebarLinks() {
  const [pageLinks, setPageLinks] = useState([]) // Estado global para remap on exclude
  const { setAwesomeRef } = awesomeListActions()

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await adapter.get('/sidebarpages')

        if (response.data.error || response.data.status !== 200) {
          throw response
        }

        const data = response?.data?.content
        const [title] = data.title

        setPageLinks(data?.title)
        setAwesomeRef({ awesomeName: title.title })
      } catch (error) {
        // handleError(error);
      }
    }
    fetchTitle()
  }, [])

  const handleClick = (label: string, id: string) => {
    setAwesomeRef({ awesomeName: label, awesomeTitleId: id })
  }

  return (
		<CSS.SidebarLinksContainer>
			{pageLinks[0] ? (
			  pageLinks?.map((link: AwesomeLink) => (
					<CSS.Page href="/home" key={link.id.toString()}>
						<CSS.TextLink onClick={() => handleClick(link.title, link.id)}>
							{link.title}
						</CSS.TextLink>
					</CSS.Page>
			  ))
			) : (
				<div />
			)}
			<Toastfy />
		</CSS.SidebarLinksContainer>
  )
}

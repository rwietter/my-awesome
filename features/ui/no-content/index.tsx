import Link from 'next/link'
import React from 'react'
import { ContainerCSS, TitleCSS, DescriptionCSS } from './styled'

const NoContent = () => (
	<ContainerCSS>
		<TitleCSS>No content available</TitleCSS>
		<DescriptionCSS>
			Create an <Link href="/create-awesome">awesome</Link> to show here
		</DescriptionCSS>
	</ContainerCSS>
)

export { NoContent }

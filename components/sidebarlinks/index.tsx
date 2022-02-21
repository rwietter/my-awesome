import axios from 'axios';
import { useEffect, useState } from 'react';

import useAuthStore from '../../pages/api/context/auth';
import { titleActions } from '../../pages/api/context/page/actions';
import { Links } from './@types';
import * as S from './styled';

const SidebarLinks = () => {
	const [pageLinks, setPageLinks] = useState([]);
	const { addContentItem } = titleActions();
	const { user_id } = useAuthStore();

	useEffect(() => {
		const fetchLinks = async () => {
			const response = await axios.get('/api/sidebarpages/', {
				headers: {
					'X-user-id': user_id,
				},
			});

			if (response.status !== 200) {
				throw new Error(`Error: ${response.status}`);
			}

			setPageLinks(response.data);
		};
		fetchLinks();
	}, [user_id]);

	const handleClick = (label: string) => addContentItem({ href: label });

	return (
		<S.Container>
			{pageLinks ? (
				pageLinks.map((link: Links, idx: number) => (
					<S.Page href="/home" key={idx}>
						<S.TextLink onClick={() => handleClick(link.title)}>
							{link.title}
						</S.TextLink>
					</S.Page>
				))
			) : (
				<div />
			)}
		</S.Container>
	);
};

export default SidebarLinks;

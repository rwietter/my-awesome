import { useEffect, useState } from 'react';

import { adapter } from '@/services/api';
import { Toastfy } from '@/features/ui/toastfy';
import { Links } from './@types';
import * as S from './styled';
import { awesomeListActions } from '@/features/awesome-list';

export default function SidebarLinks() {
  const [pageLinks, setPageLinks] = useState([]); // Estado global para remap on exclude
  const { setAwesomeRef } = awesomeListActions();

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await adapter.get('/sidebarpages');

        if (response.status !== 200) {
          throw response;
        }

        const data = response?.data?.body;
        const [title] = data.title;

        setPageLinks(data?.title);
        setAwesomeRef({ href: title.title });
      } catch (error) {
        // handleError(error);
      }
    };
    fetchTitle();
  }, []);

  const handleClick = (label: string) => setAwesomeRef({ href: label });

  return (
		<S.Container>
			{pageLinks[0] ? (
			  pageLinks?.map((link: Links) => (
					<S.Page href="/home" key={link.id.toString()}>
						<S.TextLink onClick={() => handleClick(link.title)}>
							{link.title}
						</S.TextLink>
					</S.Page>
			  ))
			) : (
				<div />
			)}
			<Toastfy />
		</S.Container>
  );
}

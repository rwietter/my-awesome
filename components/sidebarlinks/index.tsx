import { useEffect, useState } from 'react';
import { handleError } from '@/helpers/http-error';

import { adapter } from '@/services/api';
import { Toastfy } from '@/features/ui/toastfy';
import { Links } from './@types';
import * as S from './styled';
import { refAwsActions } from '@/features/awesome-list';

function SidebarLinks() {
  const [pageLinks, setPageLinks] = useState([]);
  const { setAwesomeRef } = refAwsActions();

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
        handleError(error);
      }
    };
    fetchTitle();
  }, []);

  const handleClick = (label: string) => setAwesomeRef({ href: label });

  return (
		<S.Container>
			{pageLinks[0] ? (
			  pageLinks?.map((link: Links, idx: number) => (
					<S.Page href="/v1/home" key={idx.toString()}>
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

export default SidebarLinks;

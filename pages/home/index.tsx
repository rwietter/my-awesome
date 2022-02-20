import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import Background from '../../components/background';
import { ContentItem } from '../../components/contentItem/contentItem';
import * as S from '../../components/homepage/styled';
import { IndexTitle } from '../../components/indexTitle';
import { Loading } from '../../components/loading';
import { IContent } from '../../db/config';
import { api } from '../../services/api';
import useAuthStore from '../api/context/auth';
import { useTitleStore } from '../api/context/page';

const Home = () => {
  const [title, setTitle] = useState("");
  const [pageIndex, setPageIndex] = useState([]);
  const [pageContent, setPageContent] = useState<IContent | null>(null);
  const { href } = useTitleStore();
  const { user_id } = useAuthStore();

  const { isLoading, refetch } = useQuery("home-query", async () => {
    const response = await api.post("/page/", { page: href }, {
      headers: {
        'x-user-id': user_id
      }
    });

    if (response.status != 200) {
      throw new Error(`Error: ${response.status}`);
    }

    const { content, title } = response.data;

    const index = content.match(/([A-Z])\w+/g);

    setPageIndex(index);
    setTitle(title);
    setPageContent(JSON.parse(content));
  },
    { staleTime: 300000 }
  );

  useEffect(() => {
    refetch();
  }, [href, refetch]);

  if (isLoading) {
    return (
      <Background>
        <Loading />
      </Background>
    );
  }

  return (
    <S.Container>
      <S.Section>
        <S.PageDescription>
          Sua lista {title && `de ${title}`}
        </S.PageDescription>
      </S.Section>

      <S.PageContent>
        <S.Section>
          <S.PageIndice>Índice</S.PageIndice>
          <IndexTitle pageIndex={pageIndex} />
        </S.Section>

        <S.Separator />

        <S.Section>
          <ContentItem pageIndex={pageIndex} pageContent={pageContent} />
        </S.Section>
      </S.PageContent>
    </S.Container>
  );
};

export default Home;

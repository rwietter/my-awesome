import { Links } from "./@types";
import * as S from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTitleStore } from "../../pages/api/context/page";
import { useRouter } from "next/router";
import { titleActions } from "../../pages/api/context/page/actions";

const SidebarLinks = () => {
  const [pageLinks, setPageLinks] = useState([]);
  const { addContentItem } = titleActions();
  

  useEffect(() => {
    const fetchLinks = async () => {
      const response = await axios.get("/api/sidebarpages/");

      if (response.status != 200) {
        throw new Error(`Error: ${response.status}`);
      }

      setPageLinks(response.data);
    };
    fetchLinks();
  }, []);

  const handleClick = (label: string) => {
    return addContentItem({ href: label });
  };

  return (
    <S.Container>
      {pageLinks ? (
        pageLinks.map((link: Links) => {
          return (
            <S.Page href={`/home`} key={link.title}>
              <S.TextLink
                onClick={() => handleClick(link.title)}
              >
                {link.title}
              </S.TextLink>
            </S.Page>
          );
        })
      ) : (
        <div />
      )}
    </S.Container>
  );
};

export default SidebarLinks;

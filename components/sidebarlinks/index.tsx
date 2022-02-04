import Link from "next/link";
import { Links } from "./@types";
import * as S from './styled';
import { links } from "./content";

const SidebarLinks = () => (
  <S.Container>
    {links.map((link: Links) => (
      <S.Page href={link.url} key={link.label}>
        <S.TextLink>{link.label}</S.TextLink>
      </S.Page>
    ))}
  </S.Container>
);

export { SidebarLinks };

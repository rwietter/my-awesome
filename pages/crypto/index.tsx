import * as S from "./styled";
import { db_index, items, keys, Keys, KeysExtract } from "./db/config";
import { DbProps, LinkProps } from "./db/@types";

const Languages = () => {
  return (
    <S.Container>
      <S.Section>
        <S.PageTitle>Cryptocurrencies</S.PageTitle>
        <S.PageDescription>
          Reunimos aqui várias sites e plataformas disponíveis para você
          consultar.
        </S.PageDescription>

        <S.PageAttention>
          NOTA: Esta lista é apenas para referências de serviços, não hospedamos
          nem oferecemos nenhum serviço de consulta de criptomoedas.
        </S.PageAttention>
      </S.Section>

      <S.Section>
        <S.PageIndice>Índice</S.PageIndice>
        <ul>
          {db_index.map((item: DbProps) => {
            return (
              <S.PageIndiceRef>
                <a href={`#${item.name}`}>{item.name}</a>
              </S.PageIndiceRef>
            );
          })}
        </ul>
      </S.Section>
      <S.Section>
        {keys.map((value: KeysExtract, idx: number, arr: string[]) => {
          return (
            <S.PageSectionItem key={value}>
              <h3 id={value}>{value}</h3>
              <ul>
                {items[value].map(({ name, url }: LinkProps) => (
                  <li>
                    <S.PageLink key={url} href={url} target="_blank">
                      {name}
                    </S.PageLink>
                  </li>
                ))}
              </ul>
            </S.PageSectionItem>
          );
        })}
      </S.Section>
    </S.Container>
  );
};

export default Languages;
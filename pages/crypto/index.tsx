import * as S from './styled'
import { blockchain, bitcoin, defi, tools, db_index } from './db/config'
import { DbProps, LinkProps } from './db/@types';

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
        <h3>Índice</h3>
        <ul>
          {db_index.map((item: DbProps) => {
            return (
              <li>
                <a href={`#${item.name}`}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </S.Section>
      <S.Section>
        <section>
          <h3 id="Blockchain">Blockchain</h3>
          <ul>
            {blockchain.map(({ name, url }: LinkProps) => (
              <li>
                <a key={url} href={url} target="_blank">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 id="Bitcoin">Bitcoin</h3>
          <ul>
            {bitcoin.map(({ name, url }: LinkProps) => (
              <li>
                <a key={url} href={url} target="_blank">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 id="Defi">DeFi</h3>
          <ul>
            {defi.map(({ name, url }: LinkProps) => (
              <li>
                <a key={url} href={url} target="_blank">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 id="Ferramentas">Ferramentas</h3>
          <ul>
            {defi.map(({ name, url }: LinkProps) => (
              <li>
                <a key={url} href={url} target="_blank">
                  {name}
                </a>
              z</li>
            ))}
          </ul>
        </section>
      </S.Section>
    </S.Container>
  );
}

export default Languages;

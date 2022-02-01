import { Layout } from "../components/Layout";
import { LeftPanel } from "../components/LeftPanel";
import { Section } from "../components/Section";
import * as S from "./landingStyles";
import { AiFillLock, AiFillCheckCircle, AiFillBell } from "react-icons/ai";
import { Carousel } from "../components/Carousel";

export const Landing = () => {
  return (
    <Layout>
      <Section>
        <LeftPanel color="#8ad4c7" height={360}>
          <S.Text color="#fff" maxWidth={260} fontsize={0.9}>
            Nós somos o futuro
          </S.Text>
          <S.TextContainer>
            <S.Text color="#000" maxWidth={260} fontsize={2} bold>
              Segurança do Trabalho
            </S.Text>
          </S.TextContainer>
          <S.Text color="#fff" maxWidth={260} fontsize={0.9}>
            O projeto destinado a revolucionar a área de segurança do trabalho
          </S.Text>
        </LeftPanel>
        <S.Container width={50} height={360}>
          <h1>SECTION</h1>
        </S.Container>
      </Section>
      <Section>
        <S.Container width={100} height={360}>
          <S.TextContainer>
            <S.Text color="#000" maxWidth={260} fontsize={2} bold>
              Praticidade
            </S.Text>
            <S.Text color="#8ad4c7" maxWidth={480} fontsize={2} bold>
              Tudo o que você precisa na palma da sua mão.
            </S.Text>
          </S.TextContainer>
          <S.TextContainer>
            <S.Text color="#000" maxWidth={480} fontsize={0.9} bold>
              Nosso aplicativo tem por objetivo proporcionar novas experiências
              de controle dos equipamentos de proteção
            </S.Text>
          </S.TextContainer>
          <S.IconContainer>
            <AiFillLock />
            <S.Text color="#000" maxWidth={480} fontsize={0.9} bold>
              Acesso Seguro
            </S.Text>
          </S.IconContainer>
          <S.IconContainer>
            <AiFillCheckCircle />
            <S.Text color="#000" maxWidth={480} fontsize={0.9} bold>
              Gestão de dados eficaz
            </S.Text>
          </S.IconContainer>
          <S.IconContainer>
            <AiFillBell />
            <S.Text color="#000" maxWidth={480} fontsize={0.9} bold>
              Acompanhamento de pedidos em tempo real
            </S.Text>
          </S.IconContainer>
        </S.Container>
      </Section>
      <Section>
        <S.Container width={100} height={120}>
          <S.Text color="#000" maxWidth={480} fontsize={2} bold>
            Várias funções em um único lugar.
          </S.Text>
        </S.Container>
      </Section>
      <Section></Section>
    </Layout>
  );
};

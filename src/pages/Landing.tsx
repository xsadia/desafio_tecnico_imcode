import { Layout } from "../components/Layout";
import { LeftPanel } from "../components/LeftPanel";
import { Section } from "../components/Section";
import * as S from "./landingStyles";

export const Landing = () => {
  return (
    <Layout>
      <Section>
        <LeftPanel color="#8ad4c7" height={360}>
          Left panel
        </LeftPanel>
        <S.TestContainer>
          <h1>SECTION</h1>
        </S.TestContainer>
      </Section>
    </Layout>
  );
};

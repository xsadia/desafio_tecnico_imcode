import styled from "styled-components";
import { Layout } from "./components/Layout";
import { LeftPanel } from "./components/LeftPanel";
import { Section } from "./components/Section";

const TestContainer = styled.div`
  height: 360px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Layout>
      <Section>
        <LeftPanel />
        <TestContainer>
          <h1>SECTION</h1>
        </TestContainer>
      </Section>
    </Layout>
  );
}

export default App;

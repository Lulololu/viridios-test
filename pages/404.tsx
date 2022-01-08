import Head from "next/head";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledH1 from "../Components/StyledComponents/StyledH1";
import StyledSection from "../Components/StyledComponents/StyledSection";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title key="title">404 - Not Found</title>
      </Head>
      <StyledPageMain>
        <StyledSection>
          <StyledH1>Not Found</StyledH1>
        </StyledSection>
      </StyledPageMain>
    </>
  );
};

export default Custom404;

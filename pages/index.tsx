import { NextPage } from "next";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../components/StakeToken";

const Home: NextPage = () => {
  const address = useAddress();

  if (!address) {
    return (
      <Container maxW={"1200px"}>
        <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
          <Heading>Please Connect a Wallet</Heading>
        </Flex>
      </Container>
    );
  }

  return (
    <Container maxW={"1200px"}>
      <StakeToken />
    </Container>
  );
};

export default Home;

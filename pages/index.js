import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import IconTable from "../components/IconTable";
import { ICONS } from "../data";
import InputImg from "../public/input.JPG";

export default function Home() {
  const icons = ICONS;

  return (
    <>
      <Head>
        <title>The Sekrit Booty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Content>
          <h1>
            Apollo <StrikeThrough>Sekrit</StrikeThrough> Icons
          </h1>
          <h3>What?</h3>
          <p>
            <a href="https://apolloapp.io/" target="_blank"  rel="noreferrer">Apollo</a> for iOS. The best Reddit client out there created by a{" "}
            <a href="https://twitter.com/christianselig" target="_blank" rel="noreferrer">good dude.</a>
          </p>
          <h3>How?</h3>
          <HelpText>{"Settings > About > Shake your device"}</HelpText>
          <Image src={InputImg} alt="Code input" />
          <h3>Codes</h3>
          <IconTable icons={icons} />
        </Content>
      </Container>
    </>
  );
}

const HelpText = styled.p`
  font-weight: 500;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 700px;
  width: 80%;
  text-align: center;
`;

const StrikeThrough = styled.span`
  text-decoration: line-through;
`;
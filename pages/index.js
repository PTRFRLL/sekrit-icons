import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Footer from "../components/Footer";
import Icons from "../components/Icons";
import Link from "../components/Link";
import { ICONS } from "../data";
import InputImg from "../public/input.JPG";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apollo Icons | The Sekrit Booty</title>
        <meta name="description" content="Apollo icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Content>
          <h1>
            Apollo <StrikeThrough>Sekrit</StrikeThrough> Icons
          </h1>
          <h2>What?</h2>
          <p>
            <Link href="https://apolloapp.io/">Apollo</Link> for iOS. The best
            Reddit client out there created by a{" "}
            <Link href="https://twitter.com/christianselig">good dude.</Link>
          </p>
          <h2>How?</h2>
          <HelpText>{"Settings > About > Shake your device"}</HelpText>
          <Image src={InputImg} alt="Code input" />
          <h2 id="codes">Codes</h2>
          <Icons icons={ICONS} />
        </Content>
      </Container>
      <Footer />
    </>
  );
}

const HelpText = styled.p`
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 550px;
  width: 90%;
  text-align: center;
`;

const StrikeThrough = styled.span`
  text-decoration: line-through;
`;

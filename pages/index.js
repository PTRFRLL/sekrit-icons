import Head from "next/head";
import Image from "next/image";
import styled, { css } from "styled-components";
import Footer from "../components/Footer";
import Icons from "../components/Icons";
import Link from "../components/Link";
import { ICONS } from "../data";
import InputImg from "../public/input.JPG";
import { COLORS } from "../styles/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apollo Icons | The Sekrit Booty</title>
        <meta name="description" content="Apollo icons" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="theme-color"
          content={COLORS.primary}
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content={COLORS.dark}
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Container>
        <Content>
          <H1>
            Apollo <StrikeThrough>Sekrit</StrikeThrough> Icons
          </H1>
          <h2>What?</h2>
          <p>
            <Link href="https://apolloapp.io/">Apollo</Link> for iOS. The best
            Reddit client out there created by a{" "}
            <Link href="https://twitter.com/christianselig">good dude</Link>.
            Apollo has a bunch of great app icons to choose from, some of which
            are &quot;secret&quot;. This is how to unlock those icons.
          </p>
          <p>
            <strong>Note:</strong> Changing the app icon is a feature of{" "}
            <Link href="https://apolloapp.io/pro-ultra/">Apollo Pro</Link>
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

const H1 = styled.h1`
  color: ${COLORS.primary};
`;

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

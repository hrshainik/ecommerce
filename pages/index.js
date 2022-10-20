import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Section from "../components/Section";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Demo ecommerce web app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section bgCol="#F6F5FF">
          <h1>Hello World!</h1>
        </Section>
      </Layout>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import RegularProductC from "../components/RegularProductC";
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
        <Section bgCol="#fff">
          <h1>Hello World!</h1>
          <div className="regular-product-cs">
            <RegularProductC />
            <RegularProductC />
            <RegularProductC />
            <RegularProductC />
            <RegularProductC />
          </div>
        </Section>
      </Layout>
    </>
  );
}

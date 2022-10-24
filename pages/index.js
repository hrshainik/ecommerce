import Head from "next/head";
import Image from "next/image";
import CategoryC from "../components/CategoryC";
import FeatureC from "../components/FeatureC";
import FeatureProductC from "../components/FeatureProductC";
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
        <meta name="keywords" content="ecommerce" />
        <meta name="author" content="Habibur Rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="ecommerce" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="" />
        <meta name="twitter:image:alt" content="Alt text for image" />
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

          <br />

          <div className="feature-product-cs">
            <FeatureProductC />
            <FeatureProductC />
            <FeatureProductC />
            <FeatureProductC />
            <FeatureProductC />
          </div>

          <br />

          <div className="feature-cs">
            <FeatureC />
            <FeatureC />
            <FeatureC />
            <FeatureC />
            <FeatureC />
          </div>

          <br />

          <div className="category-cs">
            <CategoryC />
            <CategoryC />
            <CategoryC />
            <CategoryC />
            <CategoryC />
          </div>
        </Section>
      </Layout>
    </>
  );
}

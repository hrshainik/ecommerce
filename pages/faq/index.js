import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const Faq = () => {
  return (
    <>
      <Head>
        <title>Faq</title>
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
      </Head>

      <Layout>
        <Section>
          <h1>Faq</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Faq;

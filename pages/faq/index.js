import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const Faq = () => {
  return (
    <>
      <Head>
        <title>Faq</title>
        <meta name="description" content="faq page" />
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

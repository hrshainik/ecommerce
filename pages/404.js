import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <Layout>
        <Section>
          <h1>Not Found</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Custom404;

import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";

const Custom500 = () => {
  return (
    <>
      <Head>
        <title>Server Error</title>
      </Head>

      <Layout>
        <Section>
          <h1>Server Error</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Custom500;

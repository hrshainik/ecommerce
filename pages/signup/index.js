import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Signup Page</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Section>
          <h1>Signup</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Signup;

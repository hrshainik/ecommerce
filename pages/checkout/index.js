import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout Page</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Section>
          <h1>Checkout</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Checkout;

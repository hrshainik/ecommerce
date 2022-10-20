import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const OrderCompleted = () => {
  return (
    <>
      <Head>
        <title>Order Completed</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Section>
          <h1>Order Completed</h1>
        </Section>
      </Layout>
    </>
  );
};

export default OrderCompleted;

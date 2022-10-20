import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const Product = () => {
  return (
    <>
      <Head>
        <title>Product Details</title>
        <meta name="description" content="product discription" />
      </Head>

      <Layout>
        <Section>
          <h1>Product Details Page</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Product;

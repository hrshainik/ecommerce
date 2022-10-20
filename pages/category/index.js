import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const Category = () => {
  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Section>
          <h1>Category</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Category;

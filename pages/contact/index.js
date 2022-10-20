import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta name="description" content="contact page" />
      </Head>

      <Layout>
        <Section>
          <h1>Contact Us</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Contact;

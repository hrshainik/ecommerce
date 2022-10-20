import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="about page" />
      </Head>

      <Layout>
        <Section>
          <h1>About Us</h1>
        </Section>
      </Layout>
    </>
  );
};

export default About;

import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Section>
          <h1>Login</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Login;

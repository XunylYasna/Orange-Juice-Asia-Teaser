import React from "react"
import Form from "../components/global/Form"
import Nav from "../components/global/Nav"
import Footer from "../components/global/Footer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Login = () => (
  <Layout>
    <SEO title="Login" />
    <Nav title="TOP SECRET FILES"> </Nav>
    <Form />
    <Footer></Footer>
  </Layout >
)


export default Login

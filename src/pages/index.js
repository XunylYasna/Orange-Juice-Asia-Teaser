import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Hero from "../components/HomePage/Hero/Hero"
import Nav from "../components/global/Nav"
import Footer from "../components/global/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Coming Soon" />
    <Nav title="COMING SOON">
      <h2><span>
        <AniLink paintDrip to="/login" duration={1} hex="#000">
          Staff login
        </AniLink>
      </span></h2>
    </Nav>
    <Hero />
    <Footer email />
  </Layout>
)

export default IndexPage

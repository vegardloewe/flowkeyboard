import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Concept from "../components/sections/concept"
import Concept2 from "../components/sections/concept-2"

const IndexPage = () => (
  <Layout>
    <SEO title="FlowKeyboard - Unlock all creative dimensions" image="https://ibb.co/d5NH0sw"/>
    <Navigation />
    <Header />
    <Features />
    <Concept />
    <Concept2 />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage

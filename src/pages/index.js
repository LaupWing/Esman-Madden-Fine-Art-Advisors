import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Image2 from "../components/image2"
import SEO from "../components/seo"
import Banner from "../components/banner/banner"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Banner/>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
            <Image2 alt="Gatsby in Space" filename="test_painting.jpg"/>
        </div>
    </Layout>
)

export default IndexPage

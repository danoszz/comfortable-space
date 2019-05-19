import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Lost but not found</h1>
    <p>
      You just hit a route that doesn&#39;t exist. But don't let it discomfort
      you.
    </p>
  </Layout>
)

export default NotFoundPage

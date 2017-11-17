import * as React from 'react'

import Layout from '../src/components/Layout'

const IndexPage = () => (
  <Layout>
    <div className="IndexPage__wrapper">
      <h1 className="u-centered">Guido!</h1>
    </div>
    <style jsx global>{`
      .IndexPage__wrapper {
        display: flex;
        height: 90vh;
      }
    `}</style>
  </Layout>
)

export default IndexPage

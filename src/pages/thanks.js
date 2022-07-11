import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

class Thanks extends React.Component {
  render() {

    return (
      <Layout>
        <Seo title="Thanks" />
        <section className="hero hero--simple">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="large mb-0">Contact</p>
                <h2>Thanks for dropping a line</h2>
                <p className="large">I'll be in touch in 5 minutes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hero spacer-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <p><Link className="btn" to="/">Back home</Link></p>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    )
  }
}

export default Thanks
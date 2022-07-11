import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

class Contact extends React.Component {
  render() {

    return (
      <Layout>
        <Seo title="Contact" />
        <section className="hero hero--simple">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <p className="large mb-0">Contact</p>
                <h2>Get in touch</h2>
                <p className="large">Do you have an exciting project you’d like brought to life or simply looking to say hello? Feel free to fill out the form below and I’ll be in touch as soon as possible.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="spacer-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9">
                <form name="contact" method="POST" data-netlify="true" action="/thanks/">
                  <input name="name" type="text" placeholder="Name"/>
                  <input name="email" type="email" placeholder="Email"/>
                  <textarea name="message" placeholder="Message..."></textarea>
                  <input className="hidden" type="hidden" name="form-name" value="contact" />
                  <button className="btn" type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Contact
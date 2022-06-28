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
              <div className="col-12 col-md-6">
                <p className="large mb-0">Contact</p>
                <h2>Get in touch</h2>
                <p className="large">Just fill out the form below and I’ll be in touch as soon as possbile.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="spacer-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9">
                <form name="contact" netlify netlify-honeypot="bot-field" method="post">
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
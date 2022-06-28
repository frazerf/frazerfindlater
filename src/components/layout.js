/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import './../styles/global.scss'
import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [date , setDate] = useState();
  const getYear = () =>  setDate(new Date().getFullYear())
  useEffect(() => {
      getYear();
  }, [])
  

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <nav className="nav--footer">
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/frazerf" target="_blank" rel="noopener noreferrer">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/frazerfindlater/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                                </li>
                                <li>
                                    <a href="https://github.com/frazerf" target="_blank" rel="noopener noreferrer">Github</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="copyright">
                            <p className="small">&copy; copyright {date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

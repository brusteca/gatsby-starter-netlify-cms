import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-black.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">

        <div className="content has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-right">
                <div className="content has-text-centered">
                  <img
                    src={logo}
                    alt="Kaldi"
                    style={{ width: '14em', height: '10em' }}
                  />
                </div>
              </div>
              <div className="column is-right">
                <section>
                  <h5>Resources</h5>
                  <ul>
                    <li>
                      <Link to="/pricing" className="navbar-item">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" to="help.monkeylearn.com">
                        Help
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" to="/api">
                        API Reference
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column">
                <section>
                  <h5>Guides</h5>
                  <ul>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Sentiment Analysis
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Text Classification
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Text Analysis
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Topic Analysis
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Keyword Extraction
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Natural Language Processing
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Word Cloud
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column">
                <section>
                  <h5>Company</h5>
                  <ul>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/jobs">
                        Jobs
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" to="https://github.com/monkeylearn">
                        Github
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column">
                <section>
                  <h5>Legal</h5>
                  <ul>
                    <li>
                      <Link className="navbar-item" to="/privacy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/terms">
                        Terms
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

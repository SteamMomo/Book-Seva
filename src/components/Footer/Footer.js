import React from 'react';
import './footer.css';
import facebook from '../images/facebook-brands.svg';
import twitter from '../images/twitter-square-brands.svg';
import youtube from '../images/youtube-brands.svg'
import instagram from '../images/instagram-brands.svg';
import playstore from '../images/playstore.png'
import appstore from '../images/appstore.png'

function Footer() {
  return (
    <div>
      <footer className="footer__parent" id="footer">
        <div className="footer__main container-fluid">
          <div className="section__parent row">
            <section className="footer__section col-lg-3 col-md-3 col-sm-6">
              Popular Books<ul>
                <li>
                  <span className="footer__list" >
                  Alchemist
                  </span>
                </li>
                <li>
                  <span className="footer__list" >
                  It starts with us
                  </span>
                </li>
                <li>
                  <span className="footer__list" >
                  Black Holes
                  </span>
                </li>
                <li>
                  <span
                    className="footer__list"

                  >
                    Mocking Bird
                  </span>
                </li>
              </ul>
            </section>
            <section className="footer__section col-lg-2 col-md-2 col-sm-6">
              Trending Searches<ul>
                <li>
                  <span
                    className="footer__list">
                    Black Holes
                  </span>
                </li>
                <li>
                  <span
                    className="footer__list"
                  >
                    Three Thousand Stitches
                  </span>
                </li>
                <li>
                  <span
                    className="footer__list"
                  >
                    It starts with us
                  </span>
                </li>
                <li>
                  <span
                    className="footer__list"
                  >
                    Alchemist
                  </span>
                </li>
              </ul>
            </section>
            <section className="footer__section col-lg-2 col-md-2 col-sm-6">
              About us<ul>
                <li>
                  <span className="footer__list">
                    About Book Seva Group
                  </span>
                </li>
                <li>
                  <span className="footer__list">
                    Book Seva Blog
                  </span>
                </li>
                <li>
                  <span className="footer__list">
                    Contact Us
                  </span>
                </li>
                <li>
                  <span className="footer__list">
                    Book Seva for Businesses
                  </span>
                </li>
              </ul>
            </section>
            <section className="footer__section col-lg-2 col-md-2 col-sm-6">
              Book Seva<ul>
                <li>
                  <span className="footer__list">
                    Help
                  </span>
                </li>
                <li>
                  <span className="footer__list">
                    Sitemap
                  </span>
                </li>
                <li>
                  <span className="footer__list">
                    Legal &amp; Privacy information
                  </span>
                </li>
              </ul>
            </section>
            <section className="footer__section _2oZEg ">
              <div className="_1NJc2">
                <span className="lastHeading">Follow Us</span>
                <div className="_2lcRE mt-2">

                  <span className="footer__list">
                    <span className="footer__icon">
                    <img src={facebook} alt="" width="20" />

                    </span>
                  </span>
                  <span className="footer__list">
                    <span className="footer__icon">
                    <img src={instagram} alt="" width="20"/>
                  </span>
                  </span>
                  <span className="footer__list">
                    <span className="footer__icon">
                      <img src={twitter} alt="" width="20"/>
                    </span>
                  </span>
                  <span className="footer__list">
                    <span className="footer__icon">
                        <img src={youtube} alt="" width="20"/>
                    </span>
                  </span>
                  <div className="mt-3">
                <img src={appstore} alt="" className="img-fluid mr-2" />
                <img src={playstore} alt="" className="img-fluid"/>
              </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="section__parent">
            <section className="footer__section">
              <span>Made with ?????? by <a target="_blank" rel=" noopener noreferrer"
               href="https://sites.google.com/view/hamzaeportfolio">Book Seva Team</a></span>
            </section>
            <section className="footer__section section2">
              <span>Other Countries</span>
              <span className="footer__list">
                India
              </span>
              
              <span className="footer__list">
                South Africa
              </span>
            
              <span className="footer__list">
                Indonesia
              </span>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

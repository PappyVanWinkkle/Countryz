/*
*  =======================================
     LANDING PAGE FOR THE APP
   =======================================
*/

import React, { Component } from "react";
import { Footer } from "./Components";
import { Continent } from "./Components";
import { Nav } from "./Components";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="tm-top-bar-bg" />
        <div className="tm-top-bar" id="tm-top-bar">
          <div className="container">
            <div className="row" />
            <Nav />
          </div>
        </div>
        <div className="tm-page-wrap mx-auto">
          <section className="tm-banner">
            <div className="tm-container-outer tm-banner-bg">
              <div className="container">
                <div className="row tm-banner-row tm-banner-row-header">
                  <div className="col-xs-12">
                    <div className="tm-banner-header">
                      <h1 className="text-uppercase tm-banner-title">
                        Discover the World
                      </h1>
                      <img src="/countryz/img/dots-3.png" alt="Dots" />
                      <p className="tm-banner-subtitle">
                        Learn more about different countries around the World
                      </p>
                      <a href="javascript:void(0)" class="tm-down-arrow-link">
                        <i className="fa fa-2x fa-angle-down tm-down-arrow" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row tm-banner-row" id="tm-section-search" />

                <div className="tm-banner-overlay" />
              </div>
            </div>
          </section>

          <section className="p-5 tm-container-outer tm-bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 mx-auto tm-about-text-wrap text-center">
                  <h2 className="text-uppercase mb-4">
                    <strong>Exotic</strong> countries at your finger-tips
                  </h2>
                  <p className="mb-4">
                    Countryz makes it possible for you to discover countries you
                    ve never heard of before. Simply click the button and all
                    the countries of the world will be displayed on your finger
                    tips.
                  </p>
                  <a href="#" className="text-uppercase btn-primary tm-btn">
                    Explore Earth
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="tm-container-outer" id="tm-section-2">
            <section className="tm-slideshow-section">
              <div className="tm-slideshow">
                <img src="/countryz/img/zebra2.png" alt="Image" />
                <img src="/countryz/img/city.png" alt="Image" />
                <img src="/countryz/img/elephant.png" alt="Image" />
              </div>
              <div className="tm-slideshow-description tm-bg-primary">
                <h2 className="">Africa a Continent with mystery</h2>
                <ul>
                  <li>
                    The longest river in the world, the Nile (4,132 miles), is
                    located in Africa.
                  </li>
                  <li>
                    Africa has the world's largest desert, the Sahara, which is
                    almost the size of the United States.
                  </li>
                  <li>
                    Victoria Falls is the largest waterfall in Africa; it is 355
                    feet high and one mile wide.
                  </li>
                  <li>
                    Madagascar is the largest island in Africa and the fourth
                    largest island in the world. It is in the Indian Ocean off
                    the East coast of Africa.
                  </li>
                  <li>
                    The gorilla, which can be found in the continents jungles,
                    is the worlds largest primate.
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary"
                >
                  Discover more
                </a>
              </div>
            </section>
            <section className="clearfix tm-slideshow-section tm-slideshow-section-reverse">
              <div className="tm-right tm-slideshow tm-slideshow-highlight">
                <img src="/countryz/img/eu.png" alt="Image" />
                <img src="/countryz/img/louvre.png" alt="Image" />
                <img src="/countryz/img/rome.png" alt="Image" />
              </div>
              <div className="tm-slideshow-description tm-slideshow-description-left tm-bg-highlight">
                <h2 className="">Europe a Continent with History</h2>
                <ul>
                  <li>
                    There are 50 countries in Europe with a total of more than
                    742 million people living on the continent
                  </li>
                  <li>
                    Vatican City is the smallest country in the world, both by
                    population and by size.
                  </li>
                  <li>
                    Greenland is the largest island in the world - considering
                    Australia is a continent!
                  </li>
                  <li>
                    The Rhine Falls in Switzerland are the largest plain
                    waterfalls in Europe.
                  </li>
                  <li>
                    The first humans appeared on the continent about 35,000 BC.{" "}
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-uppercase tm-btn tm-btn-white tm-btn-white-highlight"
                >
                  Discover more
                </a>
              </div>
            </section>
            <section className="tm-slideshow-section">
              <div className="tm-slideshow">
                <img src="/countryz/img/beach.png" alt="Image" />
                <img src="/countryz/img/chile.png" alt="Image" />
                <img src="/countryz/img/jungle.png" alt="Image" />
              </div>
              <div className="tm-slideshow-description tm-bg-primary">
                <h2 className="">South America a place with rich Culture</h2>
                <ul>
                  <li>
                    Brazil. The country is covering more than half the
                    continent's landmass.{" "}
                  </li>
                  <li>
                    Amazon River (6,437metres/4,000miles). The Amazon is not
                    only the second longest river in the world after the Nile,
                    but also the Amazon carries more water than the world's
                    other 10 biggest rivers combined!
                  </li>
                  <li>
                    While South America's rain forests also are some of the
                    wettest places on the earth, the Atacama desert in Chile is
                    considered the driest place on earth.
                  </li>
                  <li>
                    Evidence of human life in South America dates back to
                    9000BC.
                  </li>
                  <li>
                    The Incas were the largest group of indigenous people in
                    South America when the Europeans arrived.
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary"
                >
                  Discover More
                </a>
              </div>
            </section>
          </div>
          <Continent />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;

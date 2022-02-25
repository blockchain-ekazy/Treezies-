import React, { useEffect, useState } from "react";
import "./Home.css";

import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";

import Mbgr from "./Imgs/mrbg.png";
import teampng from "./Imgs/teampng.png";
import dividerfooter from "./Imgs/dividerfooter.png";
import divider from "./Imgs/divider.png";

export default function Home() {
  // let i = 0;
  // useEffect(() => {
  //     setInterval(function(){
  //         console.log(i);
  //         document.getElementsByClassName('Dis')[0].style.backgroundPositionX = i + 'px';
  //         i+=1;
  //     }, 30);
  // });

  return (
    <div className="font">
      <div className="container-fluid home ">
        <div className="Overlay">
          <Fade buttom>
            <div className="container-fluid navbgo">
              <nav className="navbar  container navbar-expand-lg navbar-dark navv">
                <div class="container-fluid">
                  <a class="navbar-brand d-block d-md-none" href="#">
                    <h2 class="">Treezies</h2>
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mob-navbar"
                    aria-label="Toggle"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="mob-navbar">
                    <ul class="navbar-nav mb-2 mb-lg-0 ">
                      {/* <li class="nav-item">
                                                <a class="nav-link" aria-current="page" href="/">Home</a>
                                            </li> */}
                      {/* <li class="nav-item">
                                                <a class="nav-link" href="#About">About Us</a>
                                            </li> */}
                      <li class="nav-item">
                        <a class="nav-link" href="#Rd">
                          Roadmap
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#Faq">
                          FAQs
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#Team">
                          Team
                        </a>
                      </li>
                    </ul>
                    <form class="d-flex btnns">
                      <div class="social-buttons text-center">
                        <button class="neo-button">
                          <i class="buttons fab fa-discord  text-white"></i>
                        </button>
                        <button class="neo-button">
                          <i class="fa fa-twitter "></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </Fade>

          <div className="  imgb">
            <div className="overlay d-flex flex-column justify-content-end">
              <div className="text-center mimg ">
                <Flip left>
                  <div>
                    <img src={Mbgr} className="w-100"></img>
                  </div>
                </Flip>
                <Flip right>
                  <div className="w-100 centered">
                    <h1 className="  text-white h1 display-4 ">
                      <span>Treezies</span>{" "}
                    </h1>
                  </div>
                </Flip>
              </div>
              <Fade top>
                <div className="text-center  mb-5 pb-5">
                  <br></br>
                  <button type="button" class="Wbtn btn mb-5 btn-lg px-2 ">
                    CONNECT YOUR WALLET
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className=" Dis" style={{ marginBottom: "-110px" }}>
        <div className="Overlay">
          <div className="container "></div>
          <a id="Rd"></a>

          <div class="container">
            <div class="container">
              <div class="row pt-5">
                <Zoom right cascade>
                  <h1 className="roadmaptitle brown h1 text-center pb-5">
                    RoadMap
                  </h1>
                </Zoom>
                <br />
                <Fade buttom duration={3000}>
                  {/* <Zoom> */}
                  <div class="col-md-12">
                    <div class="main-timeline">
                      <div class="timeline">
                        <a class="timeline-content">
                          <div class="timeline-icon">
                            <i class="fa fa-globe"></i>
                          </div>
                          <div class="timeline-year"> 1 </div>
                          <div class="inner-content">
                            <h3 class="title">Phase - 1 Planting the seed</h3>
                            <p class="description">
                              Create the Treezies team and search for the best
                              environmental organizations to partner with.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div class="timeline">
                        <a class="timeline-content">
                          <div class="timeline-icon">
                            <i class="fa fa-rocket"></i>
                          </div>
                          <div class="timeline-year"> 2 </div>
                          <div class="inner-content">
                            <h3 class="title">Phase - 2 Seedling</h3>
                            <p class="description">
                              Launch the Treezies Discord and Twitter to
                              cultivate the expansive Treezies community. Mint
                              all 7,777 Treezies and bring them to life.
                            </p>
                          </div>
                        </a>
                      </div>

                      <div class="timeline">
                        <a class="timeline-content">
                          <div class="timeline-icon">
                            <i class="fa fa-rocket"></i>
                          </div>
                          <div class="timeline-year"> 3 </div>
                          <div class="inner-content">
                            <h3 class="title">Phase - 3 Sprouting</h3>
                            <p class="description">
                              Work hand in hand with One Tree Planted to plant
                              10 trees for every Treezies minted. Continue to
                              plant 1 tree for every Treezies transaction
                              afterward. 1 square foot is adopted in the names
                              of the top 10 Treezies holders.
                            </p>
                          </div>
                        </a>
                      </div>

                      <div class="timeline">
                        <a class="timeline-content">
                          <div class="timeline-icon">
                            <i class="fa fa-rocket"></i>
                          </div>
                          <div class="timeline-year"> 4 </div>
                          <div class="inner-content">
                            <h3 class="title">Phase - 4 Sapling</h3>
                            <p class="description">
                              Seeds airdropped to all holders shortly after
                              mint. Collaborate with other projects to bring
                              holders whitelist spots for other projects.
                              Treezies Tuesdays start where the community comes
                              together once a week for a good time and some
                              giveaways. Exclusive merch line launched.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div class="timeline">
                        <a class="timeline-content">
                          <div class="timeline-icon">
                            <i class="fa fa-rocket"></i>
                          </div>
                          <div class="timeline-year"> 5 </div>
                          <div class="inner-content">
                            <h3 class="title">Phase - 5 Into the Metaverse</h3>
                            <p class="description">
                              Treezies DAO is launched. This allows holders to
                              have voting rights on the future of the projects
                              and control over its funds. Potential ideas
                              include the creation of a crypto currency mining
                              solar farm or video game that would generate
                              passive income for all holders.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div class="timeline">
                        <a class="timeline-content">
                          <div class="timeline-icon">
                            <i class="fa fa-rocket"></i>
                          </div>
                          <div class="timeline-year"> 6 </div>
                          <div class="inner-content">
                            <h3 class="title">
                              Phase - 6 To the Metaverse and beyond
                            </h3>
                            <p class="description">TBA</p>
                          </div>
                        </a>
                      </div>
                      <div class="timeline lasttimeline">
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </Fade>
                {/* </Zoom> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0">
        <img src={divider} className="d-block" style={{ width: "100%" }} />
      </div>

      <div className="bbb pt-5">
        <div className="container">
          <div class="container">
            <a id="Faq"></a>

            <div class="row">
              <Fade top>
                <div class="col-md-12">
                  <div class="section-title text-center wow zoomIn mt-5">
                    <Zoom right cascade>
                      <h1 className="titletext h1 text-center pb-5 text-warning">
                        FAQs
                      </h1>
                    </Zoom>

                    <span></span>
                  </div>
                </div>
              </Fade>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div
                  class="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div class="panel panel-default">
                    <Fade buttom>
                      <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What are Treezies?
                          </a>
                        </h4>
                      </div>
                    </Fade>
                    <div
                      id="collapseOne"
                      class="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div class="panel-body">
                        <p className="text-white">
                          Treezies are a collection of 7,777 randomly generated
                          non-fungible tokens, AKA "NFTs." Treezies are
                          generated from a smart contract using over 100
                          different hand drawn and carefully selected traits.
                          This means that each Treezie is completely unique from
                          all the others. Treezies are minted, stored, and
                          traded on the Ethereum blockchain.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <Fade buttom>
                      <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What is the mint price?
                          </a>
                        </h4>
                      </div>
                    </Fade>
                    <div
                      id="collapseTwo"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div class="panel-body text-white">
                        <p>
                          Treezies will be available to mint at .0777 ETH + gas.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <Fade buttom>
                      <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            When is the mint date?
                          </a>
                        </h4>
                      </div>
                    </Fade>
                    <div
                      id="collapseThree"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div class="panel-body text-white">
                        <p>
                          Treezies will be available to mint on April 7th, 2022.
                          Please check the discord for any updates.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <Fade>
                      <div class="panel-heading" role="tab" id="headingFour">
                        <h4 class="panel-title text-white">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            How do I get whitelisted?
                          </a>
                        </h4>
                      </div>
                    </Fade>
                    <div
                      id="collapseFour"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour"
                    >
                      <div class="panel-body text-white">
                        <p>
                          Please check the Discord for the status of whitelist
                          and instructions on how to earn your spot. As a
                          general rule of thumb, we will be rewarding the most
                          active and passionate members of our community with
                          whitelist spots. We have done this to provide lower
                          gas prices to our most devoted members
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <Fade>
                      <div class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title text-white">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How can I tell the rarity of my Treezie?
                          </a>
                        </h4>
                      </div>
                    </Fade>
                    <div
                      id="collapseFive"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFive"
                    >
                      <div class="panel-body text-white">
                        <p>
                          We have partnered with raritytools.io to create the
                          rankings of all Treezies. Ranking will be released
                          shortly after mint day.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <Fade>
                      <div class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title text-white">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            What does my Treezie get me?
                          </a>
                        </h4>
                      </div>
                    </Fade>
                    <div
                      id="collapseSix"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFive"
                    >
                      <div class="panel-body text-white">
                        <p>
                          Treezies provides an unparalleled community and
                          network of like minded individuals. Additionally, it
                          provides the opportunity to get involved in the
                          groundbreaking NFT and crypto space. With the launch
                          of the Treezie DAO there will be plenty of opportunity
                          for holders to earn passive income and reap additional
                          benefits from owning a Treezie. Additionally, holders
                          will have a direct impact on the environment. Not only
                          do we plant 10 trees for every Treezie minted, we will
                          also plant a tree every time a Treezie is transacted.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <Fade>
                      <div class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title text-white">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How many will be held back?
                          </a>
                        </h4>
                      </div>
                    </Fade>
                    <div
                      id="collapseSeven"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFive"
                    >
                      <div class="panel-body text-white">
                        <p>
                          177 Treezies will be held for giveaways and promotion
                          to help further cultivate the Treezies community.
                        </p>
                      </div>
                    </div>
                    <Fade>
                      <div class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title text-white">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseeight"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How much will gas be?
                          </a>
                        </h4>
                      </div>
                    </Fade>
                    <div
                      id="collapseeight"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFive"
                    >
                      <div class="panel-body text-white">
                        <p>
                          We have worked closely with our development team to
                          optimize our smart contract and release process to
                          ensure no waste of ETH to high gas prices, as that is
                          a part of our core mission.
                        </p>
                      </div>
                    </div>
                    <Fade>
                      <div class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title text-white">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapsenine"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How much are royalties?
                          </a>
                        </h4>
                      </div>
                    </Fade>
                    <div
                      id="collapsenine"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFive"
                    >
                      <div class="panel-body text-white">
                        <p>
                          Royalties will start at 5% to help with ongoing costs,
                          however we hope to lower this over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a id="Team"></a>

        <div className="container  py-5">
          <div className="py-5">
            <Fade top>
              <div>
                <Zoom right cascade>
                  <h1 className="h1 text-white text-center pb-2 pt-5">
                    THE TEAM
                  </h1>
                </Zoom>
              </div>
            </Fade>
            <div className="row mx-2">
              <div className="col-12 col-md-4 thing py-3 ">
                <Fade bottom>
                  <div className="teamwrap pb-3 rounded px-1">
                    <div className=" w-100 heading ">
                      <img
                        className="d-block w-100 rounded "
                        src={teampng}
                        alt="First slide"
                      ></img>
                      <h3 className="text-white text-center pt-3 mb-0">Sam</h3>
                      <p className="text-white text-center mb-2">Founder</p>
                      <p className="text-white text-center px-2 ">
                        <small>
                          An extremely experienced and knowledgeable member of
                          the crypto community Sam has been involved with
                          numerous successful NFT projects. Tired of seeing
                          others losing their hard earned money to questionable
                          projects, Sam wanted to create a project and community
                          that he could stand by. Sam has worked on Treezies
                          from day one building the project from the ground up
                          and is committed to ensuring the success of Treezies.
                        </small>
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-12 col-md-4 thing py-3 ">
                <Fade bottom>
                  <div className="teamwrap pb-3 rounded px-1">
                    <div className=" w-100 heading ">
                      <img
                        className="d-block w-100 rounded "
                        src={teampng}
                        alt="First slide"
                      ></img>
                      <h3 className="text-white text-center pt-3 mb-0">Greg</h3>
                      <p className="text-white text-center mb-2">Developer</p>
                      <p className="text-white text-center px-2 ">
                        <small>
                          Involved in smart contract technology development for
                          nearly a decade, Greg knows all the ins and outs of
                          the industry. After investing in many successful
                          crypto projects for some time, he wanted something
                          more. To him, Treezies is not only about creating a
                          fiduciary asset that will increase in value, but it is
                          about creating a project that will improve the world
                          as a whole.
                        </small>
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-12 col-md-4 thing py-3 ">
                <Fade bottom>
                  <div className="teamwrap pb-3 rounded px-1">
                    <div className=" w-100 heading ">
                      <img
                        className="d-block w-100 rounded "
                        src={teampng}
                        alt="First slide"
                      ></img>
                      <h3 className="text-white text-center pt-3 mb-0">
                        Falcon
                      </h3>
                      <p className="text-white text-center mb-2">
                        Head of Marketing<br></br>and Promotion
                      </p>
                      <p className="text-white text-center px-2 ">
                        <small>
                          With a long history of marketing and sales, Falcon
                          leads the marketing efforts for Treezies. He has
                          immense experience, starting out at running sales
                          teams and eventually switching over to date-based
                          advertising and social media. Falcon has 5 years of
                          experience working on blockchain related projects. He
                          fell in love with Treezies after he saw how dedicated
                          and passionate the team is about making a difference
                          in the NFT space as well as real life
                        </small>
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-4 thing py-3 ">
                <Fade bottom>
                  <div className="teamwrap pb-3 rounded px-1">
                    <div className=" w-100 heading ">
                      <img
                        className="d-block w-100 rounded "
                        src={teampng}
                        alt="First slide"
                      ></img>
                      <h3 className="text-white text-center pt-3 mb-0">Ron</h3>
                      <p className="text-white text-center mb-2">
                        Community Outreach<br></br>and Manager
                      </p>
                      <p className="text-white text-center px-2 ">
                        <small>
                          Skilled Discord Moderator with lengthy experience
                          bringing people together. Ron has started a variety of
                          intramural and social clubs at his University and
                          beyond. Ron has been brought onto the team in order to
                          make Treezies known all around the Crypto world and
                          beyond. To Ron, Treezies is more than just a NFT
                          Project, it is about bringing people together and
                          creating something that has never been done before
                        </small>
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-12 col-md-4 thing py-3 ">
                <Fade bottom>
                  <div className="teamwrap pb-3 rounded px-1">
                    <div className=" w-100 heading ">
                      <a href="https://www.linkedin.com/in/sabirpro/">
                        <img
                          className="d-block w-100 rounded "
                          src={teampng}
                          alt="First slide"
                        ></img>
                        <h3 className="text-white text-center pt-3 mb-0">
                          Sabirpro
                        </h3>
                        <p className="text-white text-center mb-2">Developer</p>
                        <p className="text-white text-center px-2 ">
                          <small>
                            Having been a blockchain full stack developer for
                            over 5 years Sabir has seen many projects come and
                            go, yet he is continuously amazed by the dedication
                            of the Treezies team. Day in and day out the team
                            puts in long hours to perfect the project. Sabir
                            tackles many of the problems head on and looks
                            forward to making Treezies the innovative project
                            that it is.
                          </small>
                        </p>
                      </a>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        {/* <hr className='text-white' ></hr> */}
        <img src={dividerfooter} className="w-100" />
        <div className=" footer text-center py-2 text-white  ">
          <p>
            <i className="fab fa-discord Footer px-1"></i>{" "}
            <i className=" px-1 Footer fab fa-twitter"></i>{" "}
            <span className="px-1 Footer">© 2022, Treezies NFTs</span>{" "}
          </p>
          <p></p>
        </div>
      </div>
      <script>
        document.getElementsByClassName('font')[0].onscroll(console.log("fbgv"));
        {/* document.getElementsByTagName("body")[0].onscroll() */}
      </script>
    </div>
  );
}

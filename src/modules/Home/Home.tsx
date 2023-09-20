import React from "react";
//
import About from "./sections/About";
import GetInTouch from "./sections/GetInTouch";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Worked from "./sections/Worked";
import Footer from "@widgets/Footer";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Hasibul Islam, an experienced MERN Stack Developer and Lead Generation
          Expert!
        </title>
      </Head>
      <Hero />
      <About />
      <Worked />
      <Projects />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Home;

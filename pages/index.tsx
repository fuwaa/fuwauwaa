import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>fuwa</title>
      </Head>
      <div className="max-width-7xl">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

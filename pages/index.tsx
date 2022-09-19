import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>fuwa</title>
      </Head>
      <div className="max-width-7xl">
        <Hero />
        <Hero />
      </div>
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/Nav";
import ContactHeader from "../../components/ContactHeader";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <>
        <Navbar />
        <ContactHeader />
        <Footer padding="30rem 0 3rem 0" />
      </>
    </>
  );
}

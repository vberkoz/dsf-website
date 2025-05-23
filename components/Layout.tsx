import Head from "next/head";
import { ReactNode } from "react";
import Banner from "./Banner";
import Menu from "./Menu/Menu";
import Footer from "@/components/Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Distributed Sales Force</title>
        <meta name="description" content="Distributed Sales Force" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="logo.svg" type="image/svg+xml" />
      </Head>
  
      <div>
        <Menu />
        <Banner />
        {children}
        <Footer />
      </div>
    </>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`ibm-plex-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

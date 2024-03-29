import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-base-100">
      <Component {...pageProps} />
    </main>
  );
}

import { UICustomizer } from "@/components/theme";
import { ThemeColorProvider } from "@/components/theme-color-provider";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem defaultTheme="light">
        <ThemeColorProvider>
          <UICustomizer />
          <Component {...pageProps} />
        </ThemeColorProvider>
      </ThemeProvider>
    </>
  );
}

import "../styles/globals.css";
import {
  ColorModeProvider,
  theme,
  ThemeProvider,
  CSSReset,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function MyApp({
  Component,
  pageProps,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <ThemeProvider
      theme={theme}
    >
      <ColorModeProvider
        options={{
          useSystsemColorMode: true,
        }}
      >
        <CSSReset />
        {mounted && <Component {...pageProps} />}

      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;

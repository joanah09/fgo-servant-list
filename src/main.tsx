import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hydrate } from "@tanstack/react-query";

interface CustomWindow extends Window {
  __REACT_QUERY_STATE__?: any;
}

const customWindow = window as CustomWindow;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Hydrate state={customWindow.__REACT_QUERY_STATE__}>
          <App />
        </Hydrate>
        {/* <ReactQueryDevtools /> */}
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

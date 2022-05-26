import axios from "axios";
import React, { Suspense } from "react";

import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/home-page/HomePage";

function App() {
  return (
    <>
    <BrowserRouter>
    <ErrorBoundary fallback={<h1>Something went wrong...</h1> }>
      <Suspense fallback={<h1>Loading...</h1> }>
        <SWRConfig
          value={{
            fetcher: (args) => axios.get(args).then((res) => res.data),
            refreshInterval: 3000,
            revalidateOnFocus: false,
            errorRetryInterval: 5000,
            suspense: true
          }}
        >
          <HomePage />
        </SWRConfig>
      </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
    </>
  );
}

export default App;

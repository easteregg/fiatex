import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import { Grid } from "@/components/common/index";
import { ExchangePanel } from "@/components/organisms/exchange-panel";

// Setting up Query Client to provide API methods to child components
const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Grid>
          <ExchangePanel />
        </Grid>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;

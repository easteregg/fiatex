import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import { ExchangeRate, Grid } from "@/components/molecules/index";
import { Card} from "@/components/atoms/index";
import { Swap  } from '@/components/molecules/index';
import { ExchangePanel } from "@/components/organisms/exchange-panel";

// Setting up Query Client to provide API methods to child components
const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Grid>
          <Card >
            <ExchangeRate />
            <Swap />
          </Card>
          <ExchangePanel />
        </Grid>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;

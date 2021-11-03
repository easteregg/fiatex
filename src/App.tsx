import React from "react";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ExchangeRateAPIStatus } from './components/api-status'

// Setting up Query Client to provide API methods to child components
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRateAPIStatus />
      <div className="App" data-testid="app">
        <select data-testid="source-dropdown"></select>
        <select data-testid="target-dropdown"></select>
      </div>
    </QueryClientProvider>
  );
}

export default App;

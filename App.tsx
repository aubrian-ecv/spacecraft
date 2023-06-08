import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NetworkProvider } from "react-native-offline";

import StorybookUIRoot from "./.storybook";
import { Navigator } from "./src/navigation/Navigator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <NetworkProvider>
          <Navigator />
        </NetworkProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
};

// const SHOW_STORYBOOK = false;

// const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
// // eslint-disable-next-line import/no-default-export
// export default UI;

export default App;

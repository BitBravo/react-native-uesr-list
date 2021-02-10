/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { LoadingSpinner } from "./components/LoadingSpinner";
import MainNavigation from "./Navigation";
import createStore from "./redux/configureStore";

const store = createStore({});

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

export default App;

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import ErrorBoundary from "./components/boundary";
import Home from "./pages/home";
import { setupStore } from "./redux/store";

function App() {
  const store = setupStore().store;
  const persistor = setupStore().persistor;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ErrorBoundary>
          <div className="App">
            <Home />
          </div>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default App;

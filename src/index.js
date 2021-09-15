import React from "react";
import ReactDOM from "react-dom";
// Root Component
import App from "./App";
// Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";
// Apollo
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// Reports
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

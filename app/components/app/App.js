import React from "react";
import { Route } from "react-router-dom";
import Header from "../header/Header";
import Homepage from "../../pages/homepage";
import TestPage from "../../pages/TestPage";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Route path="/" exact component={Homepage} />

        <Route
          path="test/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <TestPage id={id} />;
          }}
        />
      </div>
    </>
  );
}

export default App;

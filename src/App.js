import React from "react";

import './App.scss';

import ToscaHeader from "./components/Header/ToscaHeader";
import ToscaCard from "./components/Card/ToscaCard";

function App() {
  return (
      <React.Fragment>
        <ToscaHeader />
        <main className="container">
            <ToscaCard />
        </main>
      </React.Fragment>
  );
}

export default App;

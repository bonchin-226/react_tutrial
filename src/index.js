import React from "react";
import ReactDOM from "react-dom";
import MsgList from "./components/MsgList";

const App = () => {
  return (
    <div>
      <h2>Reactハンズオン！</h2>
      <MsgList />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import ColorfulMsg from "./components/ColorfulMsg";

const App = () => {
  return (
    <div>
      <h2>Reactハンズオン！</h2>
      <ColorfulMsg color="blue">Reactは難しくないよー</ColorfulMsg>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

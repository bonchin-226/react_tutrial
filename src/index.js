import React from "react";
import ReactDOM from "react-dom";
import ColorfulMsg from "./components/ColorfulMsg";
import CountButton from "./components/CountButton";

const App = () => {
  return (
    <div>
      <h2>Reactハンズオン！</h2>
      <ColorfulMsg color="blue">Reactは難しくないよー</ColorfulMsg>
      <ColorfulMsg color="green">Vueも難しくないよー</ColorfulMsg>
      <ColorfulMsg color="red">Angularは、、、</ColorfulMsg>
      <CountButton />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

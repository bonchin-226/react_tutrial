import React from "react";
import axios from "axios";

class MsgList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    axios
      .get("http://192.168.100.31/rails/built_in_sample/messages")
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>メッセージ取得</button>
      </>
    );
  }
}

export default MsgList;

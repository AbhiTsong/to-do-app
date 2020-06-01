import React, { Component } from "react";
import ClassDocTitle from "./Components/Classes/ClassDocTitle";
import FuncDocTitle from "./Components/Func/FuncDocTitle";
import ClassMouseLog from "./Components/Classes/ClassMouseLog";
import FuncMouseLog from "./Components/Func/FuncMouseLog";
import UnmountFunc from "./Components/Func/UnmountFunc";
import ClassUnmount from "./Components/Classes/ClassUnmount";
import ClassCounter from "./Components/Classes/ClassCounter";
import FuncCounter from "./Components/Func/FuncCounter";
import FuncFetchPost from "./Components/Func/FuncFetchPost";

class App extends Component {
  render() {
    return (
      <div>
        <FuncFetchPost />
        {/* <ClassCounter /> */}
        {/* <FuncCounter /> */}
        {/* <ClassUnmount /> */}
        {/* <UnmountFunc /> */}
        {/* <ClassMouseLog /> */}
        {/* <FuncMouseLog /> */}
        {/* <MouseLog /> */}
        {/* <ClassDocTitle /> */}
        {/* <FuncDocTitle /> */}
      </div>
    );
  }
}

export default App;

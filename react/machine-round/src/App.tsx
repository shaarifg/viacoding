import React from "react";
import Todo from "./apps/todo/Todo";
import Slider from "./shared/components/slider/Slider";
import ProgressBar from "./shared/components/progress-bar/ProgressBar";

function App() {
  return (
    <React.Fragment>
      <ProgressBar />
      <Slider />
      <Todo />
    </React.Fragment>
  );
}

export default App;

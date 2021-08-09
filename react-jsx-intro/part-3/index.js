"use strict";

function App() {
  return (
    <div>
      <Person name="grant" age={21} hobbies={["coding", "basketball"]} />
      <Person name="zach" age={15} hobbies={["coding", "basketball"]} />
      <Person name="nate" age={33} hobbies={["coding", "basketball"]} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

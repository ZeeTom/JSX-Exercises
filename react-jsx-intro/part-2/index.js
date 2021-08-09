'use strict';

function App() {
  return (
    <div>
      <Tweet username="zach" name="grant" date={(new Date()).toString()} message="hello world" favoriteColor="green" otherColor="red" />
      <Tweet username="george" name="tim" date="10/17/2020" message="hello world" favoriteColor="blue" otherColor="purple" />
      <Tweet username="bob" name="sally" date="10/17/2020" message="hello world" favoriteColor="black" otherColor="teal"/>
    </div>
  );
}
console.log((new Date()).toString());

ReactDOM.render(<App/>, document.getElementById('root'));

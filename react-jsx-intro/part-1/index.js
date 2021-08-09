function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Grant" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

import "./App.css";

function App() {
  return (
    <>
      <div className="main-div">
        <header>
          <img src="/yourTubeLogo.svg" alt="logo" />
        </header>
        <div className="card">
          <input type="text" className="input-link" />
          <button onClick={() => console.log("file")}>Download</button>
        </div>
      </div>
    </>
  );
}

export default App;

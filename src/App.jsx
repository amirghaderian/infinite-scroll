import "./App.css";

function App() {

  const observer = new IntersectionObserver(entries =>{
    const boxElm = entries[0];
    const isIntersecting = boxElm.isIntersecting;
    boxElm.target.style.backgroundColor = isIntersecting ? "blue" :"red"
  })

  observer.observe(document.getElementById("box"))
  return (
    <>
      <div id="box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightgray",
          margin: "1600px 0",
        }}
      ></div>
    </>
  );
}

export default App;

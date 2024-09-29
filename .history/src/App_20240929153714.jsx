import "./App.css";

function random(n){
  return Math.floor(Math.random() * n)
}
function App() {

  function handleInnerClick(e){
    const element = e.target;
    const red = random(255);
    const green = random(255);
    const blue = random(255);

    element.style.backgroundColor = `rgb(${red}, ${green},${blue})`
  }

  function handleOuterClick(e){
    const element = e.currentTarget;
    const color = random(255);

    setTimeout(()=> {
      element.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    }, 500);
  }
  return (
    <>
    <div className="outer" onClick={handleOuterClick}>
      <div className="inner" onClick={handleInnerClick}></div>
    </div>

    <div className="container">
      <Tile name="tile 1"/>
      <Tile name="tile 2"/>
      <Tile name="tile 3"/>
      <Tile name="tile 4"/>
      <Tile name="tile 5"/>
      <Tile name="tile 6"/>
      {/* <div className="tile"><p>Tile 1</p></div>
      <div className ="tile"><p>Tile 2</p></div>
      <div className="tile"><p>Tile 3</p></div>
      <div className="tile"><p>Tile 4</p></div>
      <div className="tile"><p>Tile 5</p></div>
      <div className="tile"><p>Tile 6</p></div> */}
    </div>
    </>
    
  );
}

function Tile(props){
  return (
    <div className="tile">
      <p>{props.name}</p>
    </div>
  );
}
export default App;

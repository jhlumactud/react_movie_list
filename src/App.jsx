import './App.css'

function App() {
  return (
    <>
      <Text display="JohnSNow 1"/>
      <Text display="JohnSNow 2"/>
    </>
  );
}

function Text({display}){
  return(
    <div className="">
      <p>{display}</p>
    </div>
  );
}

export default App

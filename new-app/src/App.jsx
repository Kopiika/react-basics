import './App.css'

function Card(props) {
  return (
  <div className="card"> 
  <h2 className="name">{props.name}</h2>
  <div className='text'>Title: {props.title}</div>
  <div className='text'>Age: {props.age}</div> </div>
  );
  }
  
function App() {

  return (
    <>
    <div className="wrapper">
      <header className="header">
        <p className='logo'>Logo</p>
      </header>
      <div className="main">
        <div className="cards-container">
            <Card name ="Maria" title="CEO" age="29"/>
            <Card name ="Kati" title="Developer" age = "25"/>
            <Card name ="Katrin" title="Designer" age = "45"/>
        </div>
      </div>
     <footer className="footer">@ WP25K</footer>
    </div>
    </>
  )
}

export default App

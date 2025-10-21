import './App.css'

function Card(props) {
  return (
  <div className="card"> 
  <h2>{props.name}</h2>
  <div>Title: {props.title}</div>
  <div>Age: {props.age}</div> </div>
  );
  }
  

function App() {

  return (
    <>
    <div className="wrapper">
    <div className="header">
      <p>Logo</p>
    </div>
      <div className='main'>
        <Card name ="Maria" title="CEO" age="29"/>
        <Card name ="Kati" title="Developer" age = "25"/>
        <Card name ="Katrin" title="Designer" age = "45"/>
      </div>
    <div className="footer">Copyrights</div>
    </div>
    </>
  )
}

export default App

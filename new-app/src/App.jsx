import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <div className="wrapper">
    <Header/>
      <div className="main">
        <div className="cards-container">
            <Card name ="Maria" title="CEO" age="29"/>
            <Card name ="Kati" title="Developer" age = "25"/>
            <Card name ="Katrin" title="Designer" age = "45"/>
        </div>
      </div>
     <Footer/>
    </div>
    </>
  )
}

export default App

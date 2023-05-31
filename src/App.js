
import './App.css';
import Header from "./Components/Header";
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    < div className="App">
    <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Chokokutai&family=Julius+Sans+One&family=Monoton&family=Rubik+Puddles&display=swap" rel="stylesheet"/>
  </Helmet>
      <h1 className='header'>Welcome to Sylvia's Pawsome Retreat</h1>
      <Header/>

    </div>
   </Router>
  );
}

export default App;
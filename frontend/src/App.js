
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './components/header';
import home from './components/home';
import Addstudent from './components/AddStudent';
import RetStudent from './components/Ret_Student';
import Update from './components/updateStud';


function App() {
  return (
    <Router>
      <div>
        <Header/>
         <Route path="/home" react component={home}/>
         <Route path="/add" react component={Addstudent}/>
         <Route path="/ret" react component={RetStudent}/>
         <Route path="/up" react component={Update}/>

      </div>

    </Router>
  );
}

export default App;

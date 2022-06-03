import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import HandleInput from './components/HandleInput';
function App() {
  var arr = new Array(1, 2, 3, 4);
  var data1=false;
    var data2=arr;
    var data3='pqr';
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/first" element={<HandleInput input={data1}></HandleInput>}/>
        <Route path="/second" element={<HandleInput input={data2}></HandleInput>}/>
        <Route path="/third" element={<HandleInput input={data3}></HandleInput>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

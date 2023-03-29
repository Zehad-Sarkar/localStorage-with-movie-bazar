import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart';
import Header from './components/Header/Header';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [watchTime, setWatchTime] = useState('')
  
  const handleWatchTime = (time) => {
    // console.log(time);
    const previoesWatchTime = JSON.parse(localStorage.getItem('watchTime'))
    if (previoesWatchTime) {
      const sum = previoesWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum)
    }
    else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time)
    }
  }

 
  return (
    <div className="App m-5">
      <Header></Header>
      <div className="main row mt-5">
        <div className="home-container col-lg-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="side-container col-lg-4 card ">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App

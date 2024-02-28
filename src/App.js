import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Header  from './components/Header';
import Live from './components/Live'
import './App.css';

const App = () => {
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <div className='main-cont'> 
       <Header/>
       <Live/>

    </div>
   
    

    </>

  )
  }

export default App;

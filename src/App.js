import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className=''>
      {/* <h1 className='text-center font-bold text-3xl text-white'>Ragant</h1>
      <h2 className='text-center font-bold text-2xl text-white'>Employee Spotlight</h2> */}
      <Outlet/>
    </div>
  );
}

export default App;

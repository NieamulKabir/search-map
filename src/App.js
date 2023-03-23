
import { useState } from 'react';
import './App.css';
import Map from './components/map';
import Search from './components/Search';



function App() {

const[selectPosition,setSelectPosition]=useState('')
// console.log(selectPosition);

  return (
    <div className="">

      <div className='mx-auto flex flex-row h-screen w-screen '>
        <div className='w-[40%]'>
          <Search selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
        </div>
        <div className='w-[60%] h-full' >
          <Map selectPosition={selectPosition} />
        </div>

      </div>


    </div >
  );
}

export default App;


import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import Search from './components/Search';



function App() {

const[selectLocation,setSelectLocation]=useState('')

  return (
    <div className="">

      <div className='mx-auto flex flex-row w-screen '>
        <div className='w-[38%]'>
          <Search selectLocation={selectLocation} setSelectLocation={setSelectLocation} />
        </div>
        <div className='w-[62%] h-full' >
          <Map selectLocation={selectLocation} />
        </div>

      </div>


    </div >
  );
}

export default App;

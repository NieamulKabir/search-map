import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../utils/useDarkMode';
import { FaMoon, FaSun } from "react-icons/fa";
import LocationDetails from './LocationDetails';

const Search = ({ selectLocation, setSelectLocation }) => {
    // custom hook for darkmood 
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    const [mapData, setMapData] = useState([]);
    const [inputText, setInputText] = useState(mapData); //get input field value

    // fetch query data 
    useEffect(() => {
        const fetchData = async () => {
            let queryString = "";

            if (inputText !== "") {
                queryString += `${inputText}`;
            }
            const res = await fetch(`https://barikoi.xyz/v1/api/search/autocomplete/NDYxNzpWSEFIVE5TQ1BP/place?q=${queryString}`)
            const data = await res.json()

            setMapData(data.places)
        }
        fetchData()
            .catch(console.error);

    }, [inputText])

    // set individual location and clear Search result 
    const handleInput = (place) => {
        setSelectLocation(place)
        setInputText('')

    }
    return (
        <div className='pt-2 px-4  dark:text-white '>
            <div className='flex justify-between'>

                <h1 className='text-xl font-bold pb-6'><span>Bari</span><span className='text-green-500'>Koi</span> </h1>
                <h1>

                    {/* theme controller */}
                    <div className='items-center flex md:pr-10'>
                        <span className='px-2 text-slate-700 dark:text-slate-200'> <FaMoon /></span>
                        {
                            !isDarkMode ? <input type="checkbox" className="toggle bg-green-600" defaultChecked onChange={toggleDarkMode} /> : <input type="checkbox" className="toggle bg-green-600" onChange={toggleDarkMode} />

                        }
                        <span className='px-2 text-slate-700 dark:text-slate-200'><FaSun /></span>
                    </div>
                </h1>
            </div>

            {/* <form className='shadow-gray-400' onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Search Location"
                    className="input input-bordered border-2 border-green-300 w-full shadow-gray-400"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <div>
                    <div className='py-1'>
                        {
                            mapData?.map(place => {
                                return (
                                    <h1 key={place?.id}>
                                        <button
                                            onClick={() =>
                                                setSelectLocation(place)
                                            }
                                        >
                                            <li className='py-1 flex items-center'>
                                                <img className='h-6 w-6' src="./redmark.png" alt="" />
                                                <p>{place?.address}</p>
                                            </li>
                                        </button>

                                    </h1>
                                )
                            })
                        }

                    </div>
                </div>

            </form> */}
            <div>

                <input
                    type="search"
                    placeholder="Search Location"
                    className="input input-bordered border-4 dark:text-black border-green-300 w-full shadow-gray-400"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <div className=' dark:my-8 rounded-lg'>
                    <div className='py-1 '>
                        {
                            mapData?.map(place => {
                                return (
                                    <div className='dark:bg-gray-700 mx-4 my-6 rounded-lg' key={place?.id}>
                                        <button className='py-3'
                                            onClick={() => handleInput(place)}
                                        >
                                            <div className='flex items-center'>
                                                <div className='dark:text-white dark:bg-white dark:ml-2 dark:rounded-full dark:items-center'>
                                                    <img className='h-6 w-6 mx-1 my-1  ' src="./black.png" alt="" />
                                                </div>
                                                <div className='ml-2'>
                                                    <p className='text-start text-xl'>{place?.address?.split(",", 1)}</p>
                                                    <p className='text-start font-light'>{place?.address},{place?.area},{place?.city}</p>
                                                    <p className='text-start text-xs py-1 text-gray-400 '><span className='bg-gray-100 w-12 text-gray-400 text-center'>District:</span>  {place?.city}</p>
                                                    <p className='text-start text-xs py-1  text-gray-400 '><span className='bg-gray-100'>{place?.pType}</span> <span className='bg-gray-100'>{place?.uCode}</span></p>
                                                </div>
                                            </div>
                                        </button>
                                        <hr className='' />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <div>
                <LocationDetails selectLocation={selectLocation} />

            </div>

        </div >
    );
};

export default Search;
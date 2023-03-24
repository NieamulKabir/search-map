import React, { useEffect, useState } from 'react';

const Search = ({ selectLocation, setSelectLocation }) => {
    const [mapData, setMapData] = useState([])
    const [inputText, setInputText] = useState(mapData)

    const { city, address, area, postCode, uCode, pType } = selectLocation

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


    console.log(mapData);
    console.log(inputText);


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // setInputText('')

    // }

    const handleInput = (place) => {
        setSelectLocation(place)
        setInputText('')

    }
    return (
        <div className='pt-2 px-4 '>
            <h1 className='text-xl font-bold pb-6'><span>Bari</span><span className='text-green-500'>Koi</span> </h1>

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
                    className="input input-bordered border-2 border-green-300 w-full shadow-gray-400"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                {/* <h1 key={place?.id}>
                    <button
                        onClick={() => handleInput(place)}
                    >
                        <li className='py-1 flex items-center'>
                            <div>
                                <img className='h-6 w-6' src="./black.png" alt="" />
                            </div>
                            <div>
                                <p>{place?.address}</p>
                            </div>
                        </li>
                    </button>

                </h1> */}
                <div className=''>
                    <div className='py-1 '>
                        {
                            mapData?.map(place => {
                                return (
                                    <div className='' key={place?.id}>
                                        <button className='py-3'
                                            onClick={() => handleInput(place)}
                                        >
                                            <div className='flex items-center'>
                                                <div>
                                                    <img className='h-6 w-6 mr-4' src="./black.png" alt="" />
                                                </div>
                                                <div className='ml-2'>
                                                    <p className='text-start text-xl'>{place?.address?.split(",",1)}</p>
                                                    <p className='text-start font-light'>{place?.address},{place?.area},{place?.city}</p>
                                                    <p className='text-start text-xs py-1 text-gray-400 '><span className='bg-gray-100 w-12 text-gray-400 text-center'>District:</span>  {place?.city}</p>
                                                    <p  className='text-start text-xs py-1  text-gray-400 '><span className='bg-gray-100'>{place?.pType}</span> <span className='bg-gray-100'>{place?.uCode}</span></p>
                                                </div>
                                            </div> 

                                        </button>
                                        <hr />
                                    </div>
                                    
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <div>
                {
                    selectLocation && (
                        <div className="card  bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className=" text-2xl">
                                    {
                                        address?.split(",", 1)
                                    }
                                </h2>
                                <p>{address},{area},{city}</p>
                                <p>District: {city}</p>
                                <p>Postcode: {postCode}</p>
                                <p className='bg-gray-100 w-12 text-gray-400 text-center'>{pType}</p>
                                <p className='mt-2'>Place Code : <span className='bg-gray-100 w-14 text-gray-400 text-center'>{uCode}</span></p>

                            </div>
                        </div>)
                }

            </div>

        </div >
    );
};

export default Search;
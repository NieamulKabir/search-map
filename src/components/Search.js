import React, { useEffect, useState } from 'react';

const Search = ({ selectPosition, setSelectPosition }) => {
    const [mapData, setMapData] = useState([])
    const [inputText, setInputText] = useState(mapData)


    useEffect(() => {
        let queryString = "";

        if (inputText !== "") {
            queryString += `${inputText}`;
        }

        fetch(`https://barikoi.xyz/v1/api/search/autocomplete/NDYxNzpWSEFIVE5TQ1BP/place?q=${queryString}`)
            .then(response => response.json())
            .then(data => setMapData(data?.places))
    }, [inputText])

    console.log(mapData);
    console.log(inputText);

    const handleSubmit = (e) => {
        e.preventDefault();

    }



    return (
        <div className='pt-2 px-4'>
            <h1 className='text-xl font-bold pb-6'><span>Bari</span><span className='text-green-500'>Koi</span> </h1>

            <form className='shadow-gray-400' onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Search Location"
                    className="input input-bordered border-2 border-green-300 w-full shadow-gray-400"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />

            </form>

            <div>
                <div className='py-1'>
                    {
                        mapData?.map(item => {
                            return (
                                <h1 key={item?.id}>
                                    <button
                                        onClick={() =>
                                            setSelectPosition(item)

                                        }

                                    >
                                    <li className='py-1 flex items-center'>
                                        <img className='h-6 w-6' src="./redmark.png" alt="" />
                                        <p>{item?.address}</p>
                                    </li>
                                </button>

                                </h1>
                )
                        })
                    }

            </div>
        </div>
        </div >
    );
};

export default Search;
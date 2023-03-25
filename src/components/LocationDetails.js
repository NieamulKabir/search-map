import React from 'react';

const LocationDetails = ({ selectLocation }) => {
    const { city, address, area, postCode, uCode, pType } = selectLocation;
    return (
        <div className=''>
            {
                selectLocation && (
                    <div className="card  bg-base-100 dark:bg-gray-800 shadow-xl">
                        <div className="card-body">
                            <h2 className=" text-2xl">
                                {
                                    address?.split(",", 1)
                                }
                            </h2>
                            <p>{address},{area},{city}</p>
                            <p>District: {city}</p>
                            <p>Postcode: {postCode}</p>
                            <p className='  text-gray-400 text-start'><span className='bg-gray-100'>{pType}</span></p>
                            <p className='mt-2'>Place Code : <span className='bg-gray-100 w-14 text-gray-400 text-center'>{uCode}</span></p>

                        </div>
                    </div>)
            }
        </div>
    );
};

export default LocationDetails;
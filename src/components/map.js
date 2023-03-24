import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import markLocation from "leaflet"
import SearchViewLocation from './SearchViewLocation';

// const icon = markLocation.icon({
//     iconUrl: "./redmark.png",
//     iconSize: [30, 30]
// })
const icon1 = markLocation.icon({
    iconUrl: "./redmark.png",
    iconSize: [30, 30]
})
const icon2 = markLocation.icon({
    iconUrl: "./black.png",
    iconSize: [30, 30]
})


const Map = ({ selectLocation }) => {



    console.log(selectLocation);
    console.log(selectLocation.latitude, selectLocation.longitude);


    return (
        <div className='h-[100%] w-[100%]'>
            <MapContainer className='w-screen h-screen' center={[23.823730671721023, 90.36402004477637]} icon={selectLocation === "Admin" ? icon2 : icon1} zoom={10} scrollWheelZoom={false}>
                <TileLayer

                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    selectLocation && (
                        <Marker position={[selectLocation?.latitude, selectLocation?.longitude]} icon={selectLocation === "Admin" ? icon2 : icon1}>
                            <Popup>

                            </Popup>
                        </Marker>
                    )
                }
                <SearchViewLocation selectLocation={selectLocation} />
            </MapContainer>
        </div>
    );
};

export default Map;
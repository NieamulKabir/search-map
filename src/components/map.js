import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import markLocation from "leaflet"
import SearchViewLocation from './SearchViewLocation';

const icon = markLocation.icon({
    iconUrl: "./redmark.png",
    iconSize: [30, 30]
})
const icon1 = markLocation.icon({
    iconUrl: "./redmark.png",
    iconSize: [30, 30]
})
const icon2 = markLocation.icon({
    iconUrl: "./black.png",
    iconSize: [30, 30]
})


const Map = ({ selectLocation }) => {
 
    return (
        <div className='h-[100%] w-[100%]'>
            <MapContainer className='w-screen h-screen' center={[23.799770908787, 90.395584053547]} zoom={8} icon={icon} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    selectLocation && (
                        <Marker position={[selectLocation?.latitude, selectLocation?.longitude]} icon={selectLocation === "Admin" ? icon2 : icon1}>
                            <Popup>
                                {/* click to see the address  */}
                                {selectLocation.address}
                            </Popup>
                        </Marker>
                    )
                }
                {/* searched location  */}
                <SearchViewLocation selectLocation={selectLocation} />
            </MapContainer>
        </div>
    );
};

export default Map;
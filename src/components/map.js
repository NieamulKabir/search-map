import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import L from "leaflet"

const icon = L.icon({
    iconUrl: "./redmark.png",
    iconSize: [30, 30]
})

const Map = (props) => {
    const { selectPosition } = props
    console.log(selectPosition.latitude, selectPosition.longitude);

    return (
        <div className='h-[100%] w-[100%]'>
            <MapContainer style={{ width: "100%", height: "100%" }} center={[23.72331476, 90.40461625]} icon={icon} zoom={10} scrollWheelZoom={false}>
                <TileLayer

                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    selectPosition && (
                        <Marker position={[selectPosition?.latitude, selectPosition?.longitude]} icon={icon}>
                            <Popup>

                            </Popup>
                        </Marker>
                    )
                }
            </MapContainer>
        </div>
    );
};

export default Map;
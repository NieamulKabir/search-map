import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import markLocation from "leaflet"

markLocation.icon({
    iconUrl: "./redmark.png",
    iconSize: [30, 30]
})
const SearchViewLocation = ({ selectLocation }) => {
    const map = useMap();

    useEffect(() => {
        if (selectLocation) {
            map.setView(
                markLocation.latLng(selectLocation?.latitude, selectLocation?.longitude), map.getZoom(), {
                animate: selectLocation.current || false
            }
            )
        }
    }, [map, selectLocation]);

    return null;
};

export default SearchViewLocation;
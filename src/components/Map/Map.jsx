import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';


const Map = () => {

    const mapStyles = {
        height: '50vh',
        widht: '100%',
    }

    const defaultCenter = {
        lat: 19.4267261, lng: -99.1718796
    }

    return (
        <LoadScript googleMapsApiKey="AIzaSyB0OdbSNi2gYlOqS7ALP9VvN0EWsQ9BoJs">

            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}>
                    <Marker position={defaultCenter} />
            </GoogleMap>

        </LoadScript>
    );
};

export default Map;

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';


const Map = ({data}) => {

    const mapStyles = {
        height: '50vh',
        widht: '100%',
    }

    const defaultCenter = {
        lat: data.lat, lng: data.lng
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

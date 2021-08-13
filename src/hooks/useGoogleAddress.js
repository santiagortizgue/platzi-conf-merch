import axios from 'axios';
import {useState, useEffect} from 'react';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyB0OdbSNi2gYlOqS7ALP9VvN0EWsQ9BoJs`;

    useEffect(async () => {
        const response = await axios(API);
        console.log(response);
        setMap(response.data.results[0].geometry.location);
    }, []);

    return map;
};

export default useGoogleAddress;
import Places from './Places.jsx';
import {useEffect, useState} from "react";
import ErrorTag from "../ErrorTag.jsx";
import {sortPlacesByDistance} from "../loc.js";
import {fetchAvailablePlaces} from "../api.js";

export default function AvailablePlaces({onSelectPlace}) {
    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        setIsFetching(true)
        async function fetchRecord() {
            try {
                const places = await fetchAvailablePlaces();
                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
                    setAvailablePlaces(sortedPlaces);
                    setIsFetching(false)
                });

            } catch
                (error) {
                setError(error);
            }3
        }
        fetchRecord().then();
    }, []);
    if (error) {
        return <ErrorTag title="Something Went Wrong :(" message={error.message} onConfirm={() => setError(undefined)}/>
    }
    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            isLoading={isFetching}
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
}

import Places from './Places.jsx';
import {useEffect, useState} from "react";
import ErrorTag from "../ErrorTag.jsx";

export default function AvailablePlaces({onSelectPlace}) {
    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        setIsFetching(true)
        async function fetchRecord() {
            try {
                const response = await fetch('http://localhost:3000/places');
                if (!response.ok) {
                    throw new Error("Unable to Fetch Places")
                }
                const record = await response.json();
                setAvailablePlaces(record.places);
            } catch
                (error) {
                setError(error);
            } finally {
                setIsFetching(false)
            }
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
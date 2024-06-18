import Places from './Places.jsx';
import {useEffect, useState} from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  useEffect(() => {
      setIsFetching(true)
      async function fetchRecord() {
          const response = await fetch('http://localhost:3000/places');
          const record = await response.json();
          setAvailablePlaces(record.places);
          setIsFetching(false)
      }
      fetchRecord().then();
  }, []);
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

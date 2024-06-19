export async function fetchAvailablePlaces(){
    const response = await fetch('http://localhost:3000/places');
    if (!response.ok) {
        throw new Error("Unable to Fetch Places")
    }
    const record = await response.json();
    return record.places;
}
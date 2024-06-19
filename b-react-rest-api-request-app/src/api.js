export async function fetchAvailablePlaces(){
    const response = await fetch('http://localhost:3000/places');
    if (!response.ok) {
        throw new Error("Unable to Fetch Places")
    }
    const record = await response.json();
    return record.places;
}

export async function saveAvailablePlaces(places){
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places: places}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Unable to Save Places")
    }
    const resData = await response.json();
    return resData.message;
}
export async function fetchingBeef() {
    const response = await fetch('https://themealdb.com/api/json/v1/1/search.php?s=Beef');

    if (!response.ok) {
        throw new Error("Failed to fetch Data");
    }

    const resData = await response.json();

    return resData.meals
}
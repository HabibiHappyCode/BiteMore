export async function fetchingPasta() {
    const response = await fetch('https://themealdb.com/api/json/v1/1/search.php?s=Pasta');

    if (!response.ok) {
        throw new Error("Failed to fetch Data");
    }

    const resData = await response.json();

    return resData.meals
}
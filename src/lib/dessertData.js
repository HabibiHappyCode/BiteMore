export async function fetchingDessert() {
    const response = await fetch('https://themealdb.com/api/json/v1/1/search.php?s=Breakfast');

    if (!response.ok) {
        throw new Error("Failed to fetch Data");
    }

    const resData = await response.json();

    return resData.meals
}
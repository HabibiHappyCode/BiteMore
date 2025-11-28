export async function fetchingDetailsData(idMeal) {
    const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${ idMeal }`)

    if (!response.ok) {
        throw new Error("there is an error fetching your data");
    }

    const resData = await response.json();

    return resData.meals
}
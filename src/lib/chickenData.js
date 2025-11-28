export async function fetchingChicken() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken');

    if(!response.ok) {
        throw new Error("Failed to fetch Data");
    }

    const resData = await response.json();

    return resData.meals 
}
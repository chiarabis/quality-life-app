document.addEventListener("DOMContentLoaded", function () {

    const cityInfo = document.querySelector(".city-info");
    const h2 = cityInfo.querySelector("h2");
    const categoriesDiv = cityInfo.querySelector(".categories");
    const description = cityInfo.querySelector(".description");
    const cityScore = cityInfo.querySelector(".city-score");
    categoriesDiv.innerHTML = "";

    const apiUrl = `https://api.teleport.org/api/urban_areas/`;

    async function search(cityInput) {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error("Error in the API request to search the cities");
            }

            const data = await response.json();
            const cities = data._links["ua:item"];
            //const foundCity = cities.find((city) => city.name.toLowerCase() === cityInput);
            
            let foundCity = null;

            for (let i = 0; i < cities.length; i++) {
                if (cities[i].name.toLowerCase() === cityInput) {
                    foundCity = cities[i];
                    break;
                }
            }

            if (foundCity) {
                return foundCity;
            }
            return alert("City not found or written incorrectly!");

        } catch (error) {
            console.log(error);
        }
    }

    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", async function () {

        categoriesDiv.innerHTML = "";
        description.innerHTML = "";
        cityScore.textContent = "";
        
        const cityInput = document.getElementById("searchInput").value.toLowerCase();
        let city = "";

        try {
            const result = await search(cityInput);
            city = result;
        } catch (error) {
            console.error(error);
        }

        fetch(`${city.href}scores/`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error in the API request to search the scores");
            }
            return response.json();
        })
        .then((dataCity) => {
            dataCity.categories.forEach((category) => {
                const categoryDiv = document.createElement("div");
                categoryDiv.classList.add("category");
                categoryDiv.style.backgroundColor = category.color;
                categoryDiv.textContent = `${category.name}: ${category.score_out_of_10}`;
                categoriesDiv.appendChild(categoryDiv);
            });

            h2.textContent = city.name;
            description.innerHTML = dataCity.summary;
            cityScore.textContent = `City score: ${dataCity.teleport_city_score.toFixed(2)}`;
        });
    });
});

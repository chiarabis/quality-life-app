function formatText(input) {
  let result = "";
  
  for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
          result += "-";
      } else {
          result += input[i];
      }
  }
  return result;
}

document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.querySelector(".searchButton");

  searchButton.addEventListener("click", function() {
      const inputCityName = document.querySelector(".searchInput").value;
      const input = formatText(inputCityName.toLowerCase());
      const apiUrl = `https://api.teleport.org/api/urban_areas/slug:${input}/scores/`;

      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              const cityInfoDiv = document.querySelector(".cityInfo");
              const h2 = cityInfoDiv.querySelector("h2");
              const description = cityInfoDiv.querySelector(".description");
              const cityScore = cityInfoDiv.querySelector(".city-score");
              const categoriesDiv = cityInfoDiv.querySelector(".categories");

              categoriesDiv.innerHTML = "";

              data.categories.forEach(category => {
                  const categoryDiv = document.createElement("div");
                  categoryDiv.classList.add("category");
                  categoryDiv.style.backgroundColor = category.color;
                  categoryDiv.textContent = `${category.name}: ${category.score_out_of_10}`;
                  categoriesDiv.appendChild(categoryDiv);
              });

              h2.textContent = input.toUpperCase();
              description.innerHTML = data.summary;
              cityScore.textContent = `City score: ${data.teleport_city_score.toFixed(2)}`;
              
          })
          .catch(error => {
              console.error(error);
          });
      });
});
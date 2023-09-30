# Quality of life App
## Un'app che permette di ottenere informazioni riguardo la qualità della vita (Js advanced project)
Il progetto prevede di realizzare un'applicazione che dia informazioni su diversi aspetti della qualità della vita. É un progetto di Javascript Advanced del master in Front-End Development di Start2Impact.

![1](https://github.com/chiarabis/quality-life-app/assets/124071052/babc9c09-045e-4fc9-9adb-394e8bfae197)


***
### Cosa prevede il progetto
L’applicazione deve essere composta da un semplice textbox tipo quello di Google per permettere all’utente di inserire il nome di una specifica città.
Una volta che l’utente cliccherà su un apposito button, l’applicazione dovrà contattare le API del servizio esterno Teleport per ottenere la informazioni da visualizzare in pagina, dove los-angeles è la città inserita dall’utente.
Una volta ricevuti i dati dal servizio esterno l’applicazione dovrà visualizzare in pagina le informazioni riguardanti le categorie, la descrizione e il city score della città.

### Utilizzo
Come funziona l'applicazione?
L'app è caratterizzata appunto da una ```searchBox```, costituita da un input in cui l'utente scrive del testo e da un bottone (un'icona freccia). Quando si preme il bottone, il sistema fa una chiamata all'API Teleport riportando come risposta in un div sottostante le informazioni inerenti alla città scelta. L'interfaccia è stata resa semplice e intuitiva: i dati che riportano i numeri, ```categories```, come il costo di vita, prezzo degli alloggi, sicurezza, etc., sono divisi in blocchi colorati per una migliore fruibilità e organizzazione, mentre il testo riguandante la ```description``` è mostrato come paragrafo semplice e al di sotto viene indicato il ```city-score```, cioè un punteggio assegnato alla città in base a tutti i dati sulla qualità della vita.

![2](https://github.com/chiarabis/quality-life-app/assets/124071052/eca2e5ba-dd26-4a8f-b5b1-ecaf3a1d80ad)
![3](https://github.com/chiarabis/quality-life-app/assets/124071052/823f6c40-9c72-41e0-a26d-dd85aea848df)

## Struttura del progetto
Il progetto è organizzato nelle seguenti cartelle e file:
- File ```index.html```
- Cartella ```src``` per visualizzare lo script di sviluppo contenuto nel file index.js
- Cartella ```dist``` per visualizzare la versione dello script ottimizzato con Webpack nel file ```bundle.js``` 
- Cartella ```CSS``` contenente il file per lo stile
- File di configurazione di Webpack ```webpack.config.js```

### Script Javascript di origine 
Il file con il codice di sviluppo contenuto nella cartella ```src``` contiene uno script in cui viene preso l'input inserito dall'utente e viene generato un evento dato dal click. Per fare la richiesta API è stato utilizzato il metodo ```fetch```.

```javascript
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
```

> **Nota:**
> Le città italiane devono essere inserite in inglese!

## Link al progetto

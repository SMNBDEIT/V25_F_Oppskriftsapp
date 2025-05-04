function setActiveTab(tabName) {
    // Setter den aktive taben i app-modellen
    // Oppdaterer den aktive taben i app-modellen og oppdaterer visningen    
    model.app.activeTab = tabName;
    updateView();
    
}
function addRecipe(recipe) { // Oppretter en ny oppskrift og lagrer den i localStorage{
    model.recipes.push(recipe); // Lagre oppskriften i lista
    localStorage.setItem("recipes", JSON.stringify(model.recipes)); // Lagre til localStorage,
    updateRecipeList(); // Oppdater UI etter lagring
}


    document.getElementById("searchInput").addEventListener("input", (event) => {
        const searchQuery = event.target.value;
        const filteredRecipes = appController.searchRecipes(searchQuery);
        updateRecipeList(filteredRecipes); // Oppdater visningen
    });
    // Funksjon for å oppdatere oppskriftslisten i U
I
    function updateRecipeList(filteredRecipes) {
        const recipeList = document.getElementById("recipeList");
        recipeList.innerHTML = ""; // Tøm oppskriftslisten

        const recipesToDisplay = filteredRecipes || model.app.recipes;

        recipesToDisplay.forEach((recipe) => {
            const recipeItem = document.createElement("div");
            recipeItem.className = "recipe-item";
            recipeItem.innerHTML = `
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
                <button onclick="appController.deleteRecipe('${recipe.id}')">Slett</button>
            `;
            recipeList.appendChild(recipeItem);
        });
    }    
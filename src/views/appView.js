

function appView() {
    let view = '';
    if(model.app.activeTab === '') {
        model.app.activeTab = model.app.tabs.recipes;
    }

    switch(model.app.activeTab) {
        case model.app.tabs.recipes:
            view = recipeView();
            break;
        case model.app.tabs.addRecipe:
            view = addRecipeView();
            break;
    }

    document.getElementById('app').innerHTML = /*HTML*/ 
        <div>
            <header>
            <h1>Onkel Dags oppskrifter</h1>        
        </header>    
        <input type="text" id="searchInput" placeholder="Søk etter oppskrift..." />
        <button id="addRecipeButton" onclick="setActiveTab(model.app.tabs.addRecipe)">Legg til oppskrift</button>
        <button id="clearRecipesButton" onclick="appController.clearRecipes()">Slett alle oppskrifter</button>
        <button id="saveRecipesButton" onclick="appController.saveRecipes()">Lagre oppskrifter</button>
        <button id="loadRecipesButton" onclick="appController.loadRecipes()">Last opp oppskrifter</button>
        <button id="exportRecipesButton" onclick="appController.exportRecipes()">Eksporter oppskrifter</button>
        <button id="importRecipesButton" onclick="appController.importRecipes()">Importer oppskrifter</button>
        <button id="printRecipesButton" onclick="appController.printRecipes()">Skriv ut oppskrifter</button>
        <button id="shareRecipesButton" onclick="appController.shareRecipes()">Del oppskrifter</button>
        <div class="tabs">
        <div class="tabs">
            <div class="tab ${model.app.activeTab === model.app.tabs.recipes ? 'active' : ''}" onclick="setActiveTab(model.app.tabs.recipes)">Oppskrifter</div>
            <div class="tab ${model.app.activeTab === model.app.tabs.addRecipe ? 'active' : ''}" onclick="setActiveTab(model.app.tabs.addRecipe)">Legg til ny oppskrift</div>
        </div>
        
        <div class="content">
            ${view}
        </div>
        </div>
        </div>
    ;
}

function updateView() {
    appView();
}     
    document.getElementById("searchInput").addEventListener("input", (event) => {
        const searchQuery = event.target.value;
        const filteredRecipes = appController.searchRecipes(searchQuery);
        updateRecipeList(filteredRecipes); // Oppdater visningen
    });

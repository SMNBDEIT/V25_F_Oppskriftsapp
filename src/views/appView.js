function appView() {
    let contentHtml = ''; // Endret navn for klarhet
    if(model.app.activeTab === '') {
        model.app.activeTab = model.app.tabs.recipes;
    }

    switch(model.app.activeTab) {
        case model.app.tabs.recipes:
            contentHtml = recipeView(); // Får nå HTML fra recipeView
            break;
        case model.app.tabs.addRecipe:
            contentHtml = addRecipeView(); // Får HTML fra addRecipeView
            break;
    }

    // Generer HTML for fane-knappene
    let tabsHtml = '';
    for (const tabKey in model.app.tabs) {
        const tabName = model.app.tabs[tabKey];
        const isActive = model.app.activeTab === tabName ? 'active' : ''; // Klasse for aktiv fane
        const tabText = tabName === model.app.tabs.recipes ? 'Vis Oppskrifter' : 'Legg til Oppskrift'; // Tekst for knappen
        tabsHtml += `<button class="${isActive}" onclick="setActiveTab('${tabName}')">${tabText}</button>`;
    }

    document.getElementById('app').innerHTML = /*HTML*/`
        <header>
          <h1>Onkel Dags oppskrifter</h1>        
        </header>

        <div class="search">
            <input type="text" id="search" placeholder="Søk oppskrifter..." oninput="handleSearchInput(event)" value="${model.app.searchTerm || ''}">
        </div>

        <div class="tabs">
            ${tabsHtml} <!-- Sett inn fane-knappene her -->
        </div>

        <main class="content-area"> <!-- Container for hovedinnholdet -->
            ${contentHtml} <!-- Sett inn HTML for den aktive visningen her -->
        </main>
    `;
}

function updateView() {
    appView();
}
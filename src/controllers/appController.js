// appController.js
    function setActiveTab(tabName) {
        model.app.activeTab = tabName;
        updateView();
    }
    
    function handleSearchInput(event) {
        // Oppdater søketermen i modellen med verdien fra input-feltet
        model.app.searchTerm = event.target.value;
        // Oppdater viewet for å vise filtrerte resultater
        updateView();
    }
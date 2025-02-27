export function rule(main: any[]) {
    // Définir les familles et les valeurs
    let familles: string[] = ["pique", "trefle", "carreau", "coeur"];
    let valeurs: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    // Objet pour compter le nombre de cartes par famille
    let familleCount: { [key: string]: number } = {
        pique: 0,
        trefle: 0,
        carreau: 0,
        coeur: 0
    };

    // Objet pour compter le nombre de cartes par valeur
    let valeurCount: { [key: string]: number } = {
        A: 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0,
        J: 0, Q: 0, K: 0
    };

    // Objet pour stocker les résultats des combinaisons
    let maincard: { [key: string]: number } = {
        nbpaire: 0,
        nbbrelan: 0,
        fullhouse: 0,
        square: 0,
        color: 0,
        suite:0,
        quinte:0,
        quiteRoyale:0,
    };

    // Parcourir chaque carte dans le tableau `main` pour compter les familles et les valeurs
    for (let a = 0; a < main.length; a++) {
        let carte = main[a];

        // Incrémenter le compteur de famille
        if (familles.includes(carte.famille_aleatoire)) {
            familleCount[carte.famille_aleatoire]++;
        }

        // Incrémenter le compteur de valeur
        if (valeurs.includes(carte.valeur_aleatoire)) {
            valeurCount[carte.valeur_aleatoire]++;
        }
    }

    // Vérifier les combinaisons de poker dans les valeurs
    for (let valeur in valeurCount) {
        let count = valeurCount[valeur];

        // Nombre de paires
        if (count === 2) {
            maincard.nbpaire = 1;
        }
        // Nombre de brelans
        else if (count === 3) {
            maincard.nbbrelan = 1;
        }
        // Nombre de carrés
        else if (count === 4) {
            maincard.square = 1;
        }
    }

    // Vérifier le full house (1 paire + 1 brelan)
    if (maincard.nbpaire === 1 && maincard.nbbrelan === 1) {
        maincard.fullhouse = 1;
    }

    // Vérifier si la main est une couleur (toutes les cartes de la même famille)
    for (let famille in familleCount) {
        if (familleCount[famille] === 5) {
            maincard.color = 1;  // Couleur
            break;  // Si une couleur est trouvée, on arrête la recherche
        }
    }

    return maincard;
}
let total = 51;

export default function genere_card() {
    let familles = ["pique", "trèfle", "carreau", "cœur"];
    let valeurs  = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // Correction du doublon "5"

    let famille_aleatoire = familles[Math.floor(Math.random() * familles.length)];
    let valeur_aleatoire = valeurs[Math.floor(Math.random() * valeurs.length)];

    // Création correcte de l'objet
    let carte = { 
        famille: famille_aleatoire, 
        valeur: valeur_aleatoire 
    };

    return carte;
}

// Test de la fonction
console.log(genere_card());

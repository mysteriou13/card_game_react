export default function genere_card() {
    let familles: string[] = ["pique", "trèfle", "carreau", "coeur"];
    let valeurs: string[]  = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let famille_aleatoire: string = familles[Math.floor(Math.random() * familles.length)];
    let valeur_aleatoire: string = valeurs[Math.floor(Math.random() * valeurs.length)];

    return { 
        famille_aleatoire, 
        valeur_aleatoire 
    };
}

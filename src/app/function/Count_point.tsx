export function Count_point(main: any[]) {
    // Définir les familles et les valeurs
    let familles: string[] = ["pique", "trefle", "carreau", "coeur"];
    let valeurs: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
    let famille_suite: number[] = [];
    let nb_flush: number = 1;
    let max_flush: number = 1;
    let nb_flush_royal: number[] = [10, 11, 12, 13, 14];
    let paireCount: number = 0;
    let nbpoint: number = 0;

    // Objets pour compter les occurrences
    let familleCount: { [key: string]: number } = { pique: 0, trefle: 0, carreau: 0, coeur: 0 };
    let valeurCount: { [key: string]: number } = { A: 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, J: 0, Q: 0, K: 0 };

    // Résultats des combinaisons
    let maincard: { [key: string]: number } = {
        paire: 0,
        doublepaire: 0,
        nbbrelan: 0,
        fullhouse: 0,
        square: 0,
        color: 0,
        suite: 0,
        quinte_flush: 0,
        quinte_flush_Royale: 0,
    };

    

    // Compter les familles et valeurs
    for (let carte of main) {
        familleCount[carte.famille_aleatoire]++;
        valeurCount[carte.valeur_aleatoire]++;
    }

    // Vérifier les paires, brelans et carrés
    for (let valeur in valeurCount) {
        if (valeurCount[valeur] === 2) {
            paireCount++;  
        }
        if (valeurCount[valeur] === 3) {
            maincard.nbbrelan = 1;
            nbpoint = 2; 
        }
        if (valeurCount[valeur] === 4) {
            maincard.square = 1;
            nbpoint = 5;
        }
    }

    if (paireCount === 1) {
        maincard.paire = 1;
       
    } else if (paireCount === 2) {
        maincard.doublepaire = 1;
       
    }

    // Vérifier le full house (1 paire + 1 brelan)
    if (maincard.paire === 1 && maincard.nbbrelan === 1) {
        maincard.fullhouse = 1;
       
    }

    // Vérifier la couleur (flush)
    for (let famille in familleCount) {
        if (familleCount[famille] === 5) {
            maincard.color = 1;
            break;
        }
    }

    // Vérifier Quinte Flush (suite + couleur)
    famille_suite = main.map(carte => {
        if (carte.valeur_aleatoire === "J") return 11;
        if (carte.valeur_aleatoire === "Q") return 12;
        if (carte.valeur_aleatoire === "K") return 13;
        if (carte.valeur_aleatoire === "A") return 14; // L'As peut être 1 ou 14 selon les règles
        return Number(carte.valeur_aleatoire);
    });

    // Trier les valeurs par ordre croissant
    famille_suite.sort((a, b) => a - b);

    // Vérifier si c'est une suite (quinte)
    for (let i = 0; i < famille_suite.length - 1; i++) {
        if (famille_suite[i + 1] - famille_suite[i] === 1) {
            nb_flush++;
            max_flush = Math.max(max_flush, nb_flush); // Stocker le max de suite atteinte
        } else {
            nb_flush = 1;
        }
    }

    if (max_flush === 5) {
        maincard.suite = 1;
    }

    // Vérifier si c'est une quinte flush
    if (maincard.suite === 1 && maincard.color === 1) {
        maincard.quinte_flush = 1;
    }

    // Vérifier si c'est une quinte flush royale
    let isQuinteFlushRoyale = nb_flush_royal.every(val => famille_suite.includes(val));
    if (maincard.quinte_flush === 1 && isQuinteFlushRoyale) {
        maincard.quinte_flush_Royale = 1;
    }


    let tab_key:any[] = [];

    // Parcourir chaque clé et afficher sa position et sa valeur pour calculer les point
    let i = 0;
    for (let key in maincard) {
        let value = maincard[key]; // Récupérer la valeur associée à la cl
        i++; // Incrémenter l'indice manuellement

        if(value == 1){
             tab_key.push(i)
        }
    }

    nbpoint = tab_key[tab_key.length-1];
    
    return nbpoint;
}

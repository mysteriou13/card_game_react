    export interface CarteType {
    famille_aleatoire: string;
    valeur_aleatoire: string;
    nb_carte:number;
    icone:string;
    img: string;
  }
  
  export default function genere_card(): CarteType {
    let familles: string[] = ["pique", "trefle", "carreau", "coeur"];
    let valeurs: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    let carte: number = Math.floor(Math.random() * valeurs.length); // Nombre aléatoire entre 0 et 12
    let famille_aleatoire: string = familles[Math.floor(Math.random() * familles.length)];
    let valeur_aleatoire: string = valeurs[carte];
    let icone:string;      
    let imgcarte: string;
    let nb_carte:number;
    nb_carte = 6;
       
    if (carte <= 9 ) {
      
      imgcarte = famille_aleatoire; // Image basée sur la famille
    } 


    icone =  `/img/${famille_aleatoire}.png`;
  
    // Génération de l'image correcte
    let img: string = `/img/${imgcarte}.png`;
  
    return {
      famille_aleatoire,
      valeur_aleatoire,
      nb_carte,
      icone,
      img,
    };
  }
  
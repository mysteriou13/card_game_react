import { CarteType } from "../interface";
  
  export default function genere_datacard(): CarteType {
    let familles: string[] = ["pique", "trefle", "carreau", "coeur"];
    let valeurs: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    let carte: number = Math.floor(Math.random() * valeurs.length); // Nombre aléatoire entre 0 et 12
    let famille_aleatoire: string = familles[Math.floor(Math.random() * familles.length)];
    let valeur_aleatoire: string = valeurs[carte];
    let icone_carte:string;      
    let imgcarte: string;
    let  datacarte:any;
    
   
       
    if (carte <= 9 ) {
      
      imgcarte = famille_aleatoire; // Image basée sur la famille
    }
     if(carte >=  10){
      imgcarte = valeur_aleatoire;
     }
    
    datacarte = famille_aleatoire+valeur_aleatoire;
    
    icone_carte =  `/img/${famille_aleatoire}.png`;
  
    // Génération de l'image correcte
    let img: string = `/img/${imgcarte}.png`;
  
    return {
      famille_aleatoire,
      valeur_aleatoire,
      datacarte,
      icone_carte,
      img,
    };
  }
  
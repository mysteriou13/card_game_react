import { Count_point } from "../function/Count_point";

let main_doublepaire:any[] = [
    { famille_aleatoire: "coeur", valeur_aleatoire:"2", },
    { famille_aleatoire: "trefle", valeur_aleatoire:"2", },
    { famille_aleatoire: "carreau", valeur_aleatoire:"6", },
    { famille_aleatoire: "trefle", valeur_aleatoire:"5", },
    { famille_aleatoire: "coeur", valeur_aleatoire:"6",  },
];

let main_paire:any[] = [
    { famille_aleatoire: "coeur", valeur_aleatoire:"2", },
    { famille_aleatoire: "trefle", valeur_aleatoire:"2", },
    { famille_aleatoire: "carreau", valeur_aleatoire:"7", },
    { famille_aleatoire: "trefle", valeur_aleatoire:"5", },
    { famille_aleatoire: "coeur", valeur_aleatoire:"6",  },
];

 let main_suite:any[] = [
    { famille_aleatoire: "coeur", valeur_aleatoire: "2", },
    { famille_aleatoire: "pique", valeur_aleatoire: "3", },
    { famille_aleatoire: "coeur", valeur_aleatoire: "4" },
    { famille_aleatoire: "trefle", valeur_aleatoire: "5", },
    { famille_aleatoire: "coeur", valeur_aleatoire: "6",  },
];

 let main_color:any[] = [
    { famille_aleatoire: "coeur", valeur_aleatoire: "2", },
    { famille_aleatoire: "coeur", valeur_aleatoire: "3", },
    { famille_aleatoire: "coeur", valeur_aleatoire: "4" },
    { famille_aleatoire: "coeur", valeur_aleatoire: "5", },
    { famille_aleatoire: "coeur", valeur_aleatoire: "6",  },
    
];

let tab_suite:any[] = [main_color,main_paire,main_doublepaire,main_suite];



export function testMainCard(){
 for(let a:number=0; a< tab_suite.length-1;a++){
       console.log(Count_point(tab_suite[a]))
      }
    }
import PageLayout from "./components/Layouts/pageLayout";
import Carte from "./components/Carte";
 import "./page.css"
import genere_card, { CarteType } from "./function/genere_card"; // Import de la fonction et du type

// Le type CarteType pour décrire la structure de chaque carte
export default function Page() {
  let tab_card = []; // Déclaration d'un tableau d'objets CarteType

  // Initialisation correcte de la variable 'a'
  for (let a = 0; a <= 3; a++) {
    let carte = genere_card(); // Génération de la carte
    tab_card.push(carte); // Ajout de la carte dans le tableau
  }

  return (
    <PageLayout>
      <p>The Card Game</p>
      
      {/* Itération sur le tableau tab_card et affichage de chaque carte */}
      <div className="box_card">
      {tab_card.map((carte, index) => (
       
        <Carte key={index} data={carte} />
      
      ))}
      </div>
    </PageLayout>
  );
}

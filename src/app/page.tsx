import PageLayout from "./components/Layouts/pageLayout";
import Carte from "./components/Carte";
import genere_card from "./function/genere_card"; // Correction du nom de la fonction

export default function Page() {
  const carte = genere_card(); // Récupération de la carte générée

  return (
    <PageLayout>
      <p>The Card Game</p>
      
      <Carte data={carte}  /> {/* Utilisation correcte du composant */}
    </PageLayout>
  );
}
import PageLayout from "./components/Layouts/pageLayout";
import genere_card from "./function/genere_card"; // Correction du nom de la fonction

export default function Page() {
  const carte = genere_card(); // Appel de la fonction pour récupérer une carte

  return (
    <PageLayout>
      <p>The Card Game</p>
      <p>
        Carte tirée : {carte.valeur} de {carte.famille}
      </p>
    </PageLayout>
  );
}

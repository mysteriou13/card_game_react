// Carte.tsx
interface CarteProps {
  data: {
    famille_aleatoire: string;
    valeur_aleatoire: string;
  };
}

export default function Carte({ data }: CarteProps) {
  let carte = "/img/"+data.famille_aleatoire+".png";
  return (
    <div>
      <h2>Carte tirée :</h2>
      
      <p>{data.valeur_aleatoire} </p>
      
      <img src= {carte}/>

      <p> {data.valeur_aleatoire}</p>

    </div>
  );
}

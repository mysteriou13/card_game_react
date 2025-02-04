import "./style.css";

interface CarteProps {
  data: {
    famille_aleatoire: string;
    valeur_aleatoire: string;
    img: string;
  };
}

export default function Carte({ data }: CarteProps) {
  const nombreImages = parseInt(data.valeur_aleatoire); // Convertir en nombre, sinon mettre 0 // Nombre d'images à afficher (modifiable)
  const imagesArray = Array.from({ length: nombreImages }); // Création d'un tableau vide de longueur `nombreImages`

  return (
    <div className="Card">
      <div>
        <p>{data.valeur_aleatoire}</p>
      </div>

      {/* Génération dynamique des images avec map() */}
      <div className="box_card_img">
        {imagesArray.map((_, index) => (
          <div key={index} className="div_img_card">
            <img className="img_card" src={data.img} alt={`Carte ${index + 1}`} />
          </div>
        ))}
      </div>

      <div>
        <p>{data.valeur_aleatoire}</p>
      </div>
    </div>
  );
}

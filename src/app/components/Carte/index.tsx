import "./style.css";

interface CarteProps {
  data: {
    famille_aleatoire: string;
    valeur_aleatoire: string;
    icone_carte:string;
    img: string;
  };
}

/*
composant carte
*/
export default function Carte({ data }: CarteProps) {
  // Conversion de la valeur en nombre pour déterminer le nombre d'images
  let nombreImages = parseInt(data.valeur_aleatoire); // Convertir en nombre
  // Créer un tableau avec le nombre d'images
  let imagesArray = Array.from({ length: nombreImages }, () => data.img);

  // Vérifier si la valeur est une lettre (A-Z)
  let verif_type_carte = /^[a-zA-Z]$/.test(data.valeur_aleatoire);

  let img_card:string;

   let box_card:string

  if (verif_type_carte) {
    // Si la valeur est une lettre, ajouter l'image une fois
    imagesArray = [data.img];
    img_card = "One_image_card"
    box_card = null;
  }else{
    box_card = "box_card_img";
    img_card = "div_img_card";
  }

  return (
  <>
  <div className="Card">
      {/* Affichage de la valeur en haut à gauche */}
      <div className="top-left">
         <div>
        
         <div>
          
          {data.valeur_aleatoire} <img src = {data.icone_carte} className="img_icone_top"/>
          
          </div>
        
        </div>
        
      </div>

      {/* Génération dynamique des images avec grid */}
      

      {/* afficher des nombre*/}
  
       <div className={box_card}>
       {imagesArray.map((imgSrc, index) => (
         <div key={index} className={img_card}>
           <img className="img_card" src={imgSrc} alt={`Carte ${index + 1}`} />
         </div>
       ))}
     </div>
      




      {/* Affichage de la valeur en bas à droite */}
      <div className="bottom-right">{data.valeur_aleatoire}</div>
    </div>
  </>
  );
}

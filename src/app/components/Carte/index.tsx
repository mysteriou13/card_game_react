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
  let nombreImages = 2; // Convertir en nombre
  // Créer un tableau avec le nombre d'images
  let imagesArray = Array.from({ length: nombreImages }, () => data.img);

  // Vérifier si la valeur est une lettre (A-Z)
  let verif_type_carte = /^[a-zA-Z]$/.test(data.valeur_aleatoire);

  let div_img_card:string;

  let img_card:string;

  let box_card:string;

  img_card = "img_card";


  if (verif_type_carte) {
    // Si la valeur est une lettre, ajouter l'image une fois
    imagesArray = [data.img];
    div_img_card = "One_image_card"
    img_card = "img_card_figure"
    box_card = null;
  }else{
    box_card = "box_card_img";
    div_img_card = "div_img_card";

    if(nombreImages >= 2 && nombreImages <=4 || nombreImages == 10){

     box_card = "box_card_img_"+nombreImages;    

    }else{
      box_card = "box_card_img";
    }

   
  }

  return (
  <>
  <div className="Card">
      {/* Affichage de la valeur en haut à gauche */}
      <div className="top-left">
         <div>
        
         <div>
            <div>
            <p>
                {data.valeur_aleatoire}
            </p>
        </div>

          <div>
            <p>
              <img src = {data.icone_carte} className="img_icone_top"/>
           </p>
           </div>

          </div>
        
        </div>
        
      </div>

      {/* Génération dynamique des images avec grid */}
      

      {/* afficher des nombre*/}
  
       <div className={box_card}>
       {imagesArray.map((imgSrc, index) => (
         <div key={index} className={div_img_card}>
           <img className={img_card} src={imgSrc} alt={`Carte ${index + 1}`} />
         </div>
       ))}
     </div>
      




      {/* Affichage de la valeur en bas à droite */}
      <div className="bottom-right">
        <div>
        {data.valeur_aleatoire}
        </div>
        <div>
        <img src = {data.icone_carte} className="img_icone_bottom"/>
        </div>
        </div>

    </div>
  </>
  );
}

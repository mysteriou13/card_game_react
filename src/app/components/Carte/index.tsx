import "./style.css"
// Carte.tsx
interface CarteProps {
  data: {
    famille_aleatoire: string;
    valeur_aleatoire: string;
    img:string;
  };
}

export default function Carte({ data }: CarteProps) {
  let carte = "/img/"+data.famille_aleatoire+".png";
  return (
    <div className="Card">
      
      <div>
      <p>{data.valeur_aleatoire} </p>
      </div>

      <div>
       <img className = "img_card"src= {data.img}/>
        </div>

        <div>
      <p> {data.valeur_aleatoire}</p>
      </div>

    </div>
  );
}

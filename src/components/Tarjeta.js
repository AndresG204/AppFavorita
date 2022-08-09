import Item from "./Item";

const listadoPlataformas = ["Twitter", "Facebook", "Youtube"];

export default function Tarjeta(props) {
  return (
    <ul>
      {listadoPlataformas.map((plataforma)=>{
          return <Item nombreRedSocial={plataforma} key={plataforma} handleFavorita={props.handleFavorita}/>
      })}
    </ul>
  );
}
export default function Item(props) {
    return (
      <>
          <ul>
              <li onClick={()=>props.handleFavorita(props.nombreRedSocial)}>{props.nombreRedSocial}</li>
          </ul>
      </>
    );
  }
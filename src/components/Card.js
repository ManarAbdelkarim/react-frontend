
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Card = ({principal}) => {
   
    return (
        <div  key={principal.id}className="card col-xs-12 offset-md-1 col-md bg-light my-5 mb-1 mx-2 p-5 offset-1"> 
        <FontAwesomeIcon icon={faCoffee} />
        <h3>{principal.name}</h3>
        <p>{principal.principal}</p>
        </div>
    )
}

export default Card

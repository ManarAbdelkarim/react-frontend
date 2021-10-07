import principalsData from '../principals.json'
import Card from './Card'
const Cards = () => {



    let principals = principalsData.principals


    const rows = principals.reduce(function (rows, key, index) { 
        return (index % 2 === 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);
 
    return (
        
        rows.map(columns => ( 
            <div className="row cards" >
            { columns.map((principal) => 
              <>
              <Card principal={principal}/>
              <div className="col-md-1"></div>
              </>
                ) }
            </div>
          ))
    )
}

export default Cards

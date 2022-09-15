import ProizvodKartica from "./ProizvodKartica";

 
import { useState } from "react";
function Proizvodi({proizvodi,onAdd, onRemove}) {
  const [sort, setSort] = useState(true);
  function sortAsc(){
    
    setSort(true);
  }
  function sortDesc(){
    
    setSort(false);
  }
  return (
    <div>
      <div className="buttons">
      <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
      <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
    </div>
      <div className="all-products">
      {sort === true ? 
         proizvodi
             .sort((a, b) => a.price < b.price ? -1 : 1)
            .map((p) => ( <ProizvodKartica product={p} key={p.id} onAdd={onAdd} onRemove={onRemove}  />  ))
          :
          proizvodi
          .sort((a, b) => a.price > b.price ? -1 : 1)
         .map((p) => ( <ProizvodKartica product={p} key={p.id} onAdd={onAdd} onRemove={onRemove}  />  ))
      }

    </div>
   </div>
  );
}

export default Proizvodi;

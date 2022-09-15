import ProizvodKartica from "./ProizvodKartica";

 
 
function Proizvodi({proizvodi,onAdd, onRemove}) {
  return (

    <div className="all-products">
        {proizvodi .map((p) => (
    
        <ProizvodKartica product={p} key={p.id} onAdd={onAdd} onRemove={onRemove}  />

    ))}

   </div>
    
  );
}

export default Proizvodi;

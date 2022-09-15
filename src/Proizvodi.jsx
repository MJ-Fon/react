import ProizvodKartica from "./ProizvodKartica";

 
 
function Proizvodi({proizvodi}) {
  return (

    <div className="all-products">
        {proizvodi .map((p) => (
    
        <ProizvodKartica product={p} key={p.id}   />

    ))}

   </div>
    
  );
}

export default Proizvodi;

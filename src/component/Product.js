const Product = (props)=>
{
  return(
    <div>
        <h4>{props.title}</h4>
        <p>Price :- {props.price}</p>
        <p>Brand :- {props.brand}</p>
        {props.children}

    </div>
  );
    
}

export default Product;

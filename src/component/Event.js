const Event = ()=>{
  const demo = ()=>{
    console.log("buy now button clicked");
  }
  return(
    <div>
        <h1>Event Handling</h1>
        <button onClick={demo}>Buy Now</button>
  </div>
  );
  
}

export default Event;

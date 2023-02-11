let mains=document.getElementsByTagName("main");
let major=document.getElementById("apidata");
//fetching data from url
fetch('https://dummyjson.com/products').then((apidata)=>{
console.log(apidata);

return apidata.json();

}).then((actualdata)=>{
//handling promises
    console.log(actualdata);

      //iterarting and renderering over each element 
      for(let k=0;k<30;k++)
      {
       
         const mr=document.createElement("div");
        const mydata=actualdata.products[k];
      
         
   const sk=document.createElement("div");
       ////giving details such ad price, stocks ,ratings images
      sk.innerHTML=`
      
      <img src=${mydata.images[0]} height="200" width="200" alt="photo" border="1px solid black" box-sizing="border-box"  justifyContent="space-between" />    
     <br>
      Title  ${mydata.category}
      <br>
      Brand:${mydata.brand} 
      <br>
      Price  ${mydata.price}
      <br>
      Discount Percentage ${mydata.discountPercentage}
      <br>
      Stock ${mydata.stock}
     
  
      <br>
       id is ${mydata.id} 
      

  <br>
      
Rating -${mydata.rating}
      
      `
   
      sk.style.height="400px";
      sk.style.width="200px";
      sk.style.borderStyle="solid";
   
    sk.style.borderRadius="5px";
    sk.style.borderColor="black"
    sk.style.display="block";
     
     

       
    //mains.append(sk);
    major.append(sk);
    //content.style.display="flex";//using flex wrap properties
    major.style.flexWrap="wrap";
    major.style.flexDirection="column";
  major.style.justifyContent="space-evenly";

    //SVGTextContentElement.
  //content.style.flexDirection="";
    
    
  

 // mr.append(content);
  //mr.style.display="flex";
  //mr.style.flexDirection="column";*/
  
  //bd.append(content);
  //bd.style.display="flex";
  //bd.style.flexDirection="column";
  //mains.append(content);
  //mains.display*/
  //.style.display="flex"; 
  //mains.style.flexDirection="row";

}
     

}).catch((error)=>{
//hadling errors

    console.log(`The Error: ${error}`);
});

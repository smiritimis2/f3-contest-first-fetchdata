let mains=document.getElementsByTagName("main");
let content=document.getElementById("apidata");
let tb=document.getElementById("row");
let bd=document.getElementsByTagName("body");
fetch('https://dummyjson.com/products').then((apidata)=>{
console.log(apidata);

return apidata.json();

}).then((actualdata)=>{

    console.log(actualdata);

      
      for(let i=0;i<30;i++)
      {
       
         const mr=document.createElement("div");
        const mydata=actualdata.products[i];
      
         
   const cr=document.createElement("div");
       
      cr.innerHTML=`
      
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
      The name of id is ${mydata.id} mydata
      



      
      `
    //  cr.style.display="flex";
     ///cr.style.flexDirection="row";
      cr.style.height="400px";
      cr.style.width="200px";
      cr.style.borderStyle="solid";
    //cr.style.boxSizing="border-box";
    cr.style.borderRadius="5px";
    cr.style.borderColor="black"
    cr.style.display="block";
     // cr.style.box-sizing="border-box";
     

       
    //mains.append(cr);
    content.append(cr);
    //content.style.display="flex";
    content.style.flexWrap="wrap";
    content.style.flexDirection="column";
  content.style.justifyContent="space-evenly";

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


    console.log(`the error: ${error}`);
});
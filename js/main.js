function handleProductChange(product, isIncrease){
    let productInput=document.getElementById(product+"-count");
    let productCount=parseInt(productInput.value);
    let newProductCount=productCount;
    if(isIncrease==true){
        newProductCount++;
    }else if(isIncrease==false && productCount>1){
        newProductCount--;
    }
    productInput.value=newProductCount;
    let productTotal;
    if(product=="laptop"){
        productTotal=newProductCount*245;
    }else{
        productTotal=newProductCount*150;
    }
    document.getElementById(product+"-total").innerText=productTotal;
   handleCheckout()
}
// ========== this fun for product total & product tax ========
function handleCheckout(){
   const laptopCount=getItems('laptop');
   const iphoneCount=getItems('iphone');
   const totalPrice=parseInt(laptopCount) * 245 + parseInt(iphoneCount) *150; 
   console.log(totalPrice)
   document.getElementById('sub-total').innerText=totalPrice;
   const tax=Math.floor(totalPrice*0.1);
   document.getElementById('tax').innerText=tax;
   const grantedTotal=tax+totalPrice;
   document.getElementById('granted-total').innerText=grantedTotal;

}
// ====== this fun for get product input ========
function getItems(product){
   const productInput=document.getElementById(product+"-count");
   const productCount=parseInt(productInput.value);
   return productCount;
}
// ======= this fun for checkout button alert ========
function checkOut(){
    alert("Thanks for purchasing with us");
    location.reload();
}
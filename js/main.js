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
function handleCheckout(){
    const laptopCount=document.getElementById('laptop-count').value;
    const iphoneCount=document.getElementById('iphone-count').value;
   const totalPrice=parseInt(laptopCount) * 245 + parseInt(iphoneCount) *150; 
   console.log(totalPrice)
   document.getElementById('sub-total').innerText=totalPrice;
   const tax=Math.floor(totalPrice*0.1);
   document.getElementById('tax').innerText=tax;
   const grantedTotal=tax+totalPrice;
   document.getElementById('granted-total').innerText=grantedTotal;

}
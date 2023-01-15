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

}

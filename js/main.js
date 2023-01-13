
let macPriceText=document.getElementById('mac-price-text').innerText;
function handleProductChange(product, isIncrease){
    let productInput=document.getElementById('input-mac');
    let productCount=parseInt(productInput.value);
    console.log(productCount);
    const newProductCount=productInput;
    

    if(isIncrease==true){
        newProductCount.value=productCount+1;
    }else if(isIncrease==false){
        newProductCount.value=productCount-1;
    }
    
}
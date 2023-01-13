
let inputIphone=document.getElementById('input-iphone');
let macAdd=document.getElementById('mac-add');
let iphoneAdd=document.getElementById('iphone-add');



macAdd.addEventListener('click', function(){
    let inputMac=parseInt(document.getElementById('input-mac').value);
    let macPriceText=document.getElementById('mac-price-text').innerText;
    let macPrice=parseInt(macPriceText);
    console.log(macPrice+macPrice);
    let macTotal=macPrice*inputMac;
    document.getElementById('mac-price-text').innerText=macTotal;
    
})
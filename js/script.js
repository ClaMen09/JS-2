let totale = 0;

function Prodotto(){
    let num = prompt("Inserisci il totale");
    num = parseFloat(num);
    if(num != null && num != ""){
        if(num >= 0){
            totale = totale + num;
            console.log("Totale spesa: " + totale);
        }
    }
}
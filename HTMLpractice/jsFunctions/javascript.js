let billAmount=100; 

const gratuity = (billAmount)=>{

    

    return (billAmount*.10);



}

const totalWithGrat = (billAmount) =>{

  let  total = gratuity(billAmount) + billAmount;

    
    return ("Your total including gratuity is: " + total.toFixed(2));
    
}


console.log(totalWithGrat(billAmount));


//must always call functions with parameters or it will not run

//this is a different syntax for functions...supposed to be more modern



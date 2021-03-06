/* In this .js file you will see an interactive shop user interface 
    you will notice many purchaseable upgrades */


    // Declaration of constant variables, the set tax rate for purchasing products has been set to 7.25%
    // The constant variable sound is the *wow* effect that happens when you purchase an upgrade
    const tax = 0.0725;
    const sound = document.querySelector('#sound');



//-----------------------------------------------
//  VIDEO CARDS
//-----------------------------------------------


/* 
The variables elem1-18 correspond to the button id's inside the html
 you will notice  the .dataset value, this corresponds with setting a value to the element id's
 in this case it pertains to the dollar amounts, and the increase of hashrates for each upgrade purchased.
 */

let elem1 = document.getElementById("1");
elem1.dataset.dollar = 125;
elem1.dataset.hash = 0.5;
elem1.addEventListener("click", subtractUSD);

let elem2 = document.getElementById("2");
elem2.dataset.dollar = 300;
elem2.dataset.hash = 1.0;
elem2.addEventListener("click", subtractUSD);

let elem3 = document.getElementById("3");
elem3.dataset.dollar = 650;
elem3.dataset.hash = 2.0;
elem3.addEventListener("click", subtractUSD);

let elem4 = document.getElementById("4");
elem4.dataset.dollar = 1300;
elem4.dataset.hash = 4.0;
elem4.addEventListener("click", subtractUSD);

let elem5 = document.getElementById("5");
elem5.dataset.dollar = 2600;
elem5.dataset.hash = 8.0;
elem5.addEventListener("click", subtractUSD);

let elem6 = document.getElementById("6");
elem6.dataset.dollar = 5000;
elem6.dataset.hash = 16.0;
elem6.addEventListener("click", subtractUSD);

//------------------------------------------------
//  PROCESSORS
//------------------------------------------------

let elem7 = document.getElementById("7");
elem7.dataset.dollar = 200;
elem7.dataset.hash = 0.5;
elem7.addEventListener("click", subtractUSD);

let elem8 = document.getElementById("8");
elem8.dataset.dollar = 300;
elem8.dataset.hash = 1.0;
elem8.addEventListener("click", subtractUSD);

let elem9 = document.getElementById("9");
elem9.dataset.dollar = 400;
elem9.dataset.hash = 2.0;
elem9.addEventListener("click", subtractUSD);

let elem10 = document.getElementById("10");
elem10.dataset.dollar = 800;
elem10.dataset.hash = 4.0;
elem10.addEventListener("click", subtractUSD);

let elem11 = document.getElementById("11");
elem11.dataset.dollar = 125;
elem11.dataset.hash = 8.0;
elem11.addEventListener("click", subtractUSD);

let elem12 = document.getElementById("12");
elem12.dataset.dollar = 5000;
elem12.dataset.hash = 16.0;
elem12.addEventListener("click", subtractUSD);

//--------------------------------------------------
//  MOTHER BOARDS
//--------------------------------------------------

let elem13 = document.getElementById("13");
elem13.dataset.dollar = 150;
elem13.dataset.hash = 0.5;
elem13.addEventListener("click", subtractUSD);

let elem14 = document.getElementById("14");
elem14.dataset.dollar = 250;
elem14.dataset.hash = 1.0;
elem14.addEventListener("click", subtractUSD);

let elem15 = document.getElementById("15");
elem15.dataset.dollar = 350;
elem15.dataset.hash = 2.0;
elem15.addEventListener("click", subtractUSD);

let elem16 = document.getElementById("16");
elem16.dataset.dollar = 700;
elem16.dataset.hash = 4.0;
elem16.addEventListener("click", subtractUSD);

let elem17 = document.getElementById("17");
elem17.dataset.dollar = 2000;
elem17.dataset.hash = 8.0;
elem17.addEventListener("click", subtractUSD);

let elem18 = document.getElementById("18");
elem18.dataset.dollar = 5000;
elem18.dataset.hash = 16.0;
elem18.addEventListener("click", subtractUSD);




//    Here we have the function named subtractUSD, it targets the event (which is the click to purchase the upgrade)

function subtractUSD(event) {
  
  // The variable elem is set to target the event 

  var elem = event.target;

  //Here we declare that the variable 'dollar' is set to the .dataset value of the dollar
  let dollar = parseInt(elem.dataset.dollar);
  //Here we declare the varibable hash, which is attached to the element.dataset for the increase of hashrates in upgrades. 
  let hash = parseFloat(elem.dataset.hash);

  /* This is the if, else section
      It states that when your amount of usd held is less than the dollar+tax price amount,
      it will return and nothing will happen.
  
  */
  if (usdConversion < (dollar +(dollar * tax))) {
      // You cannot purchase this upgrade, you do not have enough money!;
      return;
    }
    
    /*
    The declaration of this else section says, okay you do have enough money, we will subtract the set price amount+tax 
    from your total usd held, store it into localstorage, increase the hashrate set value, store that into localstorage,
    update your balance of current usd held, play a *wow* sound for purchasing the upgrades, and finally removing the button
    from view seeing as how upgrades should only be able to be purchased once in real life.
    */
    else {
        usdConversion -= (dollar +(dollar * tax));
        localStorage.setItem("USD-held",usdConversion);
        $('#currentUSD').text("Dollars Available: $" + usdConversion.toFixed(DECIMAL_POINTS))
        DOGE_HASHRATE += hash;
        localStorage.setItem("hashRate",DOGE_HASHRATE);
        console.log(DOGE_HASHRATE,hash);
        $("#currentHash").text("Hash per Click: "+ DOGE_HASHRATE.toFixed(DECIMAL_POINTS))
        $("#balance").text("$"+usdConversion.toFixed(DECIMAL_POINTS))
        sound.play();
        elem.remove();

    }
  
}
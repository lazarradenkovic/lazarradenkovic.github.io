AOS.init();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.getElementById("g").onclick = function () {
  document.getElementById("vas-p-rez").innerHTML = `Odlican izbor! <br /> 
  G 63 AMG`;
  document.getElementById("vas-p-spec").innerHTML = `Kubikaza: 4000 cm3 <br />
                                                     Snaga motora: 430/585 (kW/KS) <br/>
                                                     Gorivo : Benzin`;
};

document.getElementById("s").onclick = function () {
  document.getElementById("vas-p-rez").innerHTML = `Odlican izbor! <br /> 
  S 63 AMG`;
  document.getElementById("vas-p-spec").innerHTML = `Kubikaza: 5461 cm3 <br />
                                                     Snaga motora: 430/585 (kW/KS) <br/>
                                                     Gorivo : Benzin`;
};

document.getElementById("eqs").onclick = function () {
  document.getElementById("vas-p-rez").innerHTML = `Odlican izbor! <br /> 
  EQS`;
  document.getElementById("vas-p-spec").innerHTML = `Baterija: 108kWh <br />
                                                     Snaga motora: 385/516 (kW/KS) <br/>
                                                     Ubrzanje od 0 do 100km/h : 4.3s`;
};

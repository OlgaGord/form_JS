window.addEventListener(
  "load",
  function() {
    var oBtn = document.getElementById("soumettre");

    oBtn.addEventListener(
      "click",
      function() {
        verifier();
      },
      false
    );
  },
  false
);

function verifier() {
  //stocker dans des variables tous les champs à verifier
  var osexe = document.getElementById("sexe");
  var osexe2 = document.getElementById("sexe2");
  var oPseudonyme = document.getElementById("pseudonyme");
  // var regexPseudonyme = /^[A-Za-z]{5}+$/; ;
  var oPost = document.getElementById("poste");
  var oAge = document.getElementById("age");
  // var regexAge = /^[1-1][8-9]( ?)[0-9][0-9]$/i;
  var oQualite = document.getElementById("qualite");
  var oEmploi = document.getElementById("emploi");
  var oFormation = document.getElementById("formation");
  var msg_erreur = "";

  if (osexe.checked == false && osexe2.checked == false) {
    msg_erreur = msg_erreur + "champ sexe est vide \n";
    osexe.classList.add("fondRouge");
  } else {
    osexe.classList.remove("fondRouge");
  }
  //verifier le champ pseudonyme
  if (oPseudonyme.value == "") {
    msg_erreur = msg_erreur + "champ Pseudonyme est vide \n";
    oPseudonyme.classList.add("fondRouge");
  } else {
    oPseudonyme.classList.remove("fondRouge");
  }

  //verifier le champ poste
  if (oPost.value == "") {
    msg_erreur += "champ post est  vide \n";
    oPost.classList.add("fondRouge");
  } else {
    oPost.classList.remove("fondRouge");
  }
  //verifier le champ age

  if (oAge.value == "") {
    msg_erreur += "champ age est  vide \n";
    oAge.classList.add("fondRouge");
  } else {
    oAge.classList.remove("fondRouge");
  }
  //verifier le champ qualite
  if (oQualite.value == "") {
    msg_erreur = msg_erreur + "champ qualite est vide \n";

    oQualite.classList.add("fondRouge");
  } else {
    oQualite.classList.remove("fondRouge");
  }
  //verifier le champ emploi
  if (oEmploi.value == "") {
    msg_erreur += "champ  emploi est  vide \n";

    oEmploi.classList.add("fondRouge");
  } else {
    oEmploi.classList.remove("fondRouge");
  }

  //verifier le champ formation

  if (oFormation.value == "") {
    msg_erreur += "champ formation est  vide \n";

    oFormation.classList.add("fondRouge");
  } else {
    oFormation.classList.remove("fondRouge");
  }
  if (msg_erreur != "") {
    alert(msg_erreur);
    //alert(msg_erreur);
  } else {
    //verifier quesl sexe a ete choisi

    var s = "";
    if (osexe2.checked == false) {
      var s = "Monsieur";
    } else {
      var s = "Madame";
    }

    //Ajoute les text de form au text en textarea
    document.getElementById("msg_sexe").innerHTML = s;
    document.getElementById("msg_pseudonyme").innerHTML = oPseudonyme.value;
    document.getElementById("msg_poste").innerHTML = oPost.value;
    document.getElementById("msg_age").innerHTML = oAge.value;
    document.getElementById("msg_qualite").innerHTML = oQualite.value;
    document.getElementById("msg_emploi").innerHTML = oEmploi.value;
    document.getElementById("msg_formation").innerHTML = oFormation.value;
  }
}

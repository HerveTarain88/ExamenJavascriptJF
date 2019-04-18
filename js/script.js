//Portée des donnée ou des variables : 
// La portée des variables est en fonction de l'endroit où une variable est déclarée, 
//celle-ci pourra être accessible de tout endroit dans le script ou bien uniquement dans une portion du code.
//Exemple : on peut déclarer une variable globale qui peut être utilisée à n'importe quel endroit du script ou portion de code.
//Exemple : une variable qui est déclarée à l'intérieur d'une fonction n'est utilisable que dans la fonction elle même
// c'est ce qu'on appelle une variable locale.
//Nous pouvons prendre aussi pour exemple les variables "var" et "let"
// La variable "var" sera accessible dans toute la fonction si elle est déclarée dans celle-ci, alors que la 
// portée de la variable "let" sera elle au contraire limité aux blocs (ex: if, ect...)

// Syntaxe et éléments de base du javascript​ : variable
var NumTicket = 0;

// Les tableaux
var eleves = [
    {
        "id": "1",
        "prenom": "Elodie",
        "nom": "MARTIN"
    },
    {
        "id": "2",
        "prenom": "Jérémy",
        "nom": "FACCHINO"
    },
    {
        "id": "3",
        "prenom": "Audrey",
        "nom": "SAUVAGEON"
    },
    {
        "id": "4",
        "prenom": "Alexis",
        "nom": "MONTERRAT"
    },
    {
        "id": "5",
        "prenom": "Alban",
        "nom": "BROSSARD"
    },
    {
        "id": "6",
        "prenom": "Mylène",
        "nom": "GRENERON"
    },
    {
        "id": "7",
        "prenom": "Adrien",
        "nom": "SOUBEYRAND"
    },
    {
        "id": "8",
        "prenom": "Cyril",
        "nom": "FRANCISCO"
    },
    {
        "id": "9",
        "prenom": "Mickaïl",
        "nom": "CELIKBAS"
    },
    {
        "id": "10",
        "prenom": "Raphaël",
        "nom": "VILAIN"
    },
    {
        "id": "11",
        "prenom": "Brian",
        "nom": "RAOELINA"
    }
];

// Syntaxe et éléments de base du javascript​ : boucles
for (i = 0; i < eleves.length; i++) {
    var template = $("#recupererElevesDepuisJs").html();
    var html = Mustache.render(template, eleves[i]);
    $("#listElevesContent").append(html);
}

//Les tableaux
var formateurs = [
    {
        "id": "1",
        "nomF": "FX Cote",
    },
    {
        "id": "2",
        "nomF": "Vincent B.",
    },
    {
        "id": "3",
        "nomF": "Ludo",
    },
    {
        "id": "4",
        "nomF": "Samuel",
    },
    {
        "id": "5",
        "nomF": "Amine",
    }
];

// Je parcours le tableau
for (i = 0; i < formateurs.length; i++) {
    var template = $("#recupererFormateursDepuisJs").html();
    var html = Mustache.render(template, formateurs[i]);
    $("#listFormateursContent").append(html);
}

//Les tableaux
var raisons = [{

    "id": "1",
    "libelle": "Je suis bloqué sur mon code"
},
{
    "id": "2",
    "libelle": "J'ai une question sur le cours"
},
{
    "id": "3",
    "libelle": "Je suis perdu, au secours ! "
},
{
    "id": "4",
    "libelle": "NullPointerException"
},
{
    "id": "5",
    "libelle": "C'est quoi déjà le polymorphisme ? "
},
{
    "id": "6",
    "libelle": "Mon ordi redémarre dans le BIOS ? "
},
{
    "id": "7",
    "libelle": "J'ai envie d'aller aux toilettes"
},
{
    "id": "8",
    "libelle": "Je peux frapper mon voisin ? "
},
{
    "id": "9",
    "libelle": "J'ai un train"
},
{
    "id": "10",
    "libelle": "Autre"
}
];

for (i=0 ; i < raisons.length; i++) {
    var template = $("#recupererRaisonsDepuisJs").html();
    var html = Mustache.render(template, raisons[i]);
    $("#listRaisonsContent").append(html);
}

//Générer un numéro de ticket
function getUniqueTicket(){ 
    NumTicket++;
    return NumTicket;
}
 

//Les fonctions et objets personnalisés : fonction
$("#genererTicket").click(function afficherObjet() {
    
    var monNumeroDeTicket = getUniqueTicket();
    var noob = $("select[name='listeEleves'] > option:selected").text();
    var reason = ($("select[name='listeRaisons'] > option:selected").text()); 
    var formateur = $("select[name='listeFormateurs'] > option:selected").text();
    var urgence = $("select[name='listeUrgence'] > option:selected").text();
    
    //Les fonctions et objets personnalisés : objet
    var objet = {
        "NumTicket" : monNumeroDeTicket,
        "Noob" : noob,
        "Reason" : reason,
        "Formateur" : formateur,
        "Urgence" : urgence
    };
    //Manipulation des objets
    var template = "<tr><td># {{NumTicket}}</td><td>{{noob}}</td></tr>";
    var numTicket = Mustache.render(template, objet);
    $("#numTicketContent").append(numTicket);

    var template = "<tr><td>{{Noob}}</td></tr>";
    var nomNoob = Mustache.render(template, objet);
    $("#noobContent").append(nomNoob);

    var template = "<tr><td>{{Reason}}</td></tr>";
    var reason = Mustache.render(template, objet);
    $("#reasonContent").append(reason);

    var template = "<tr><td>{{Formateur}}</td></tr>";
    var boss = Mustache.render(template, objet);
    $("#bossContent").append(boss);

    var template = "<tr><td>{{Urgence}}</td></tr>";
    var urgence = Mustache.render(template, objet);
    $("#urgenceContent").append(urgence);

    var template = "<tr><td><button type=\"button\" class=\"deletebtn\">DEL</button></td></tr>";
    var action = Mustache.render(template, objet);
    //créer un listener de click
    //l'attaché à l"élément qu'on est en train de créé
    //appen au DOM principal
    $("#actionContent").append(action);
    

   
});

//Fonction pour pouvoir récupérer les données météo avec Ajax au format Json
$("#weatherBtn").click(function () {

    var wantedCity = $("#city").val();
     const url = "https://www.prevision-meteo.ch/services/json/"+wantedCity;
      
     // Requête Ajax​
     $.ajax({
         "url": url,
         "type": "GET",
         "success": function(data, status) {
             var parsedResponse = data;
             console.log(parsedResponse);
             var current_city = parsedResponse.city_info.name;
             var current_temp = parsedResponse.current_condition.tmp+"°C";
             var current_cond = parsedResponse.current_condition.condition;
             $("#meteo").html("À " + current_city + ", il fait " + current_temp + " et " + current_cond);
         }, error:function(error) {
             console.log("Error:" + error);
         }
     });
                    
 });
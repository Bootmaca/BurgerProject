
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Content-Type: application/json; charset=UTF-8");

//Inclus toutes les classe dans _classes pour pouvoir les utiliser dans ce fichier
include_once("chargementClasses.php");

//Création de la connexion avec la base de donnée en créant l'objet
$produitMySQL = new ProduitMySQL();

// Recherche de toutes les frites
$resultFrite = $produitMySQL->afficherlesFrites();

// Recherche de toutes les boissons
$resultDessert = $produitMySQL->afficherLesDesserts();

// Recherche de tous les desserts
$resultBoisson = $produitMySQL->afficherLesBoissons();

$data = [];

//Pour chaque ligne récupéré de la requête frite
while($row = $resultFrite->fetch()){
   $ligne = array('id' => $row['idFrite'],
                  'libelle' => $row['libelle'],
                  'prix' => $row['prix'],
                  'image' => $row['image'],
                  'isDisponible' => $row['isDisponible'],
                  'typeProduit' => 'Frite');
   array_push($data, $ligne); //Pousse les données ci dessous dans le tableau
}

//Pour chaque ligne récupéré de la requête dessert
while($row = $resultDessert->fetch()){
   $ligne = array('id' => $row['idDessert'],
                  'libelle' => $row['libelle'],
                  'prix' => $row['prix'],
                  'image' => $row['image'],
                  'isDisponible' => $row['isDisponible'],
                  'typeProduit' => 'Dessert');
   array_push($data, $ligne); //Pousse les données ci dessous dans le tableau
}

//Pour chaque ligne récupéré de la requête dessert
while($row = $resultBoisson->fetch()){
   $ligne = array('id' => $row['idBoisson'],
                  'libelle' => $row['libelle'],
                  'prix' => $row['prix'],
                  'image' => $row['image'],
                  'isDisponible' => $row['isDisponible'],
                  'typeProduit' => 'Boisson');
   array_push($data, $ligne); //Pousse les données ci dessous dans le tableau
}

print json_encode($data); //Affichage du tableau au format json pour qu'il soit récupéré en typescript


?>

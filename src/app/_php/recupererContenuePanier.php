
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Content-Type: application/json; charset=UTF-8");

//Inclus toutes les classe dans _classes pour pouvoir les utiliser dans ce fichier
include_once("chargementClasses.php");

//Récupération des données
//$idUtil = $_REQUEST['idUtil'];

//Données de test
$idUtil = 8;

//Création de la connexion avec la base de donnée en créant l'objet
$panierMySQL = new PanierMySQL();

//Récupération du panier en cours de l'utilisateur
$idPanier = $panierMySQL->recupererLePanierCourant($idUtil);

// Recherche de toutes les frites
$resultFrite = $panierMySQL->rechercherLesFritesDuPanier($idPanier);

// Recherche de toutes les desserts
$resultDessert = $panierMySQL->rechercherLesDessertsDuPanier($idPanier);

// Recherche de tous les boissons
$resultBoisson = $panierMySQL->rechercherLesBoissonsDuPanier($idPanier);

// Recherche de tous les supplements
$resultAutre = $panierMySQL->rechercherLesAutresDuPanier($idPanier);

$data = [];

//Pour chaque ligne récupéré de la requête frite
while($row = $resultFrite->fetch()){
  $ligne = array('id' => $row['id'],
    'libelle' => $row['libelle'],
    'prix' => $row['prix'],
    'quantite' => $row['quantite'],
    'typeProduit' => 'frite');
  array_push($data, $ligne); //Pousse les données ci dessous dans le tableau
}

//Pour chaque ligne récupéré de la requête dessert
while($row = $resultDessert->fetch()){
  $ligne = array('id' => $row['id'],
    'libelle' => $row['libelle'],
    'prix' => $row['prix'],
    'quantite' => $row['quantite'],
    'typeProduit' => 'dessert');
  array_push($data, $ligne); //Pousse les données ci dessous dans le tableau
}

//Pour chaque ligne récupéré de la requête boisson
while($row = $resultBoisson->fetch()){
  $ligne = array('id' => $row['id'],
    'libelle' => $row['libelle'],
    'prix' => $row['prix'],
    'quantite' => $row['quantite'],
    'typeProduit' => 'boisson');
  array_push($data, $ligne); //Pousse les données ci dessous dans le tableau
}

//Pour chaque ligne récupéré de la requête supplement
while($row = $resultAutre->fetch()){
  $ligne = array('id' => $row['id'],
    'libelle' => $row['libelle'],
    'prix' => $row['prix'],
    'quantite' => $row['quantite'],
    'typeProduit' => 'autre');
  array_push($data, $ligne); //Pousse les données ci dessous dans le tableau
}

print json_encode($data); //Affichage du tableau au format json pour qu'il soit récupéré en typescript


?>

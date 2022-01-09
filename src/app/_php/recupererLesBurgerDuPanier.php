
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

// Recherche de tous les burgers
$resultBurger = $panierMySQL->rechercherLesBurgersDuPanier($idPanier);

$data = [];
$i = 0;
$supplement = [];

//Pour chaque ligne récupéré de la requête frite
while($row = $resultBurger->fetch()){
  $supplement = [];
  $resultSupplement = $panierMySQL->rechercherLesSupplementsDuBurger($row['id']);
  $i = 0;
  while($rowSupplement = $resultSupplement->fetch()){
    $i += 1;
    array_push($supplement, array($i => $rowSupplement['libelle']));
  }
  $ligne = array('id' => $row['id'],
    'libelle' => $row['libelleBurger'],
    'prix' => $row['prix'],
    'quantite' => $row['quantite'],
    'isPain' => $row['isPain'],
    'libelleViande' => $row['libelleViande'],
    'libelleSauce' => $row['libelleSauce'],
    'libelleSupplement' => $supplement);
  array_push($data, $ligne); //Pousse les données ci dessous dans le tableau
}

print json_encode($data); //Affichage du tableau au format json pour qu'il soit récupéré en typescript


?>

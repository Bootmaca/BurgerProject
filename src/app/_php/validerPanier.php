
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Content-Type: application/json; charset=UTF-8");

//Inclus toutes les classe dans _classes pour pouvoir les utiliser dans ce fichier
include_once("chargementClasses.php");

//Récupération des données
$idUtil = $_REQUEST['idUtil'];

//Données de test
//$idUtil = 8;

//Création de la connexion avec la base de donnée en créant l'objet
$panierMySQL = new PanierMySQL();

//Récupération du panier en cours de l'utilisateur
$idPanier = $panierMySQL->recupererLePanierCourant($idUtil);

//Changement de l'état de la commande
$isInserted = $panierMySQL->creerCommande($idPanier, $idUtil);

print json_encode($isInserted);

?>

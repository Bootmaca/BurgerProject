
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Content-Type: application/json; charset=UTF-8");

//Inclus toutes les classe dans _classes pour pouvoir les utiliser dans ce fichier
include_once("chargementClasses.php");

//Création de la connexion avec la base de donnée en créant l'objet
$produitMySQL = new ProduitMySQL();
$panierMySQL = new PanierMySQL();

$idUtil = $_REQUEST['idUtil'];
$nomBurger = $_REQUEST['nomBurger'];
$idPain = $_REQUEST['idPain'];
$idViande = $_REQUEST['idViande'];
$idSupplement = $_REQUEST['idSupplement'];
$idSauce = $_REQUEST['idSauce'];

//Données de test
//$idUtil = 2;
//$nomBurger = "CREATED BY Pierre DE ALMEIDA";
//$idPain = 0;
//$idViande = 1;
//$idSupplement = 1;
//$idSauce = 1;

$idProduit = 1;
$typeProduit = "Burger";

//Initialisation des variables
$isInserted = "false";
$isInserted2 = "false";

if($idSupplement < 1){
  $idBurger = $produitMySQL->ajouterUnBurger($nomBurger,$idPain, $idViande, $idSauce);
}else{
  $idBurger = $produitMySQL->ajouterUnBurgerAvecSupplement($nomBurger, $idPain, $idViande, $idSupplement, $idSauce);
}

//Récupération du panier en cours de l'utilisateur
$idPanier = $panierMySQL->recupererLePanierCourant($idUtil);

$isInserted = $panierMySQL->ajouterBurger($idPanier, $idBurger);

if($isInserted == true){//Si l'insertion à fonctionné on met à jour le prix
  $isInserted2 = $panierMySQL->majPrixDuPanierApresAjoutBurger($idPanier, $idBurger);
}


//Affichage du résultat de l'ajout du produit dans le panier
print json_encode($isInserted2);

?>

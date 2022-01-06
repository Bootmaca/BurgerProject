
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Content-Type: application/json; charset=UTF-8");

//Inclus toutes les classe dans _classes pour pouvoir les utiliser dans ce fichier
include_once("chargementClasses.php");

//Création de la connexion avec la base de donnée en créant l'objet
$panierMySQL = new PanierMySQL();

//Données de test
$idUtil = 2;
$idProduit = 1;
$typeProduit = "Burger";

//Récupération des données depuis l'url
//$idProduit = $_REQUEST['idProduit']; // $idProduit = 1;
//$idUtil = $_REQUEST['idUtil']; // $idUtil = 2;
//$typeProduit = $_REQUEST['typeProduit']; // $typeProduit = "Burger";

//Récupération du panier en cours de l'utilisateur
$idPanier = $panierMySQL->recupererLePanierCourant($idUtil);

//Initialisation des variables
$isInserted = "false";
$isInserted2 = "false";

// Selon le type du burger
switch ($typeProduit) {
  case "Menu":
    echo "Menu";
    break;
  case "Burger":
    if($panierMySQL->isDejaAjouteBurger($idPanier, $idProduit) == "true"){ //Si il est déjà ajouté on augmente la quantité
      $isInserted = $panierMySQL->augmenterQuantiteBurger($idPanier, $idProduit);
    }else{ //Sinon on l'insère
      $isInserted = $panierMySQL->ajouterBurger($idPanier, $idProduit);
    }
    if($isInserted == true){//Si l'insertion ou la modification à fonctionné on met à jour le prix
      $isInserted2 = $panierMySQL->majPrixDuPanierApresAjoutBurger($idPanier, $idProduit);
    }
    break;
  case "Frite":
    echo "Frite";
    break;
  case "Boisson":
    echo "Boisson";
    break;
  case "Supplement":
    echo "Supplement";
    break;
  case "Dessert":
    echo "Dessert";
    break;
}

//Affichage du résultat de l'ajout du produit dans le panier
print json_encode($isInserted2);

?>

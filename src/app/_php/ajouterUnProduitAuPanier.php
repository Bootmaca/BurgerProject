
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Content-Type: application/json; charset=UTF-8");

//Inclus toutes les classe dans _classes pour pouvoir les utiliser dans ce fichier
include_once("chargementClasses.php");

//Création de la connexion avec la base de donnée en créant l'objet
$panierMySQL = new PanierMySQL();


$idProduit = 1;
$idUtil = 2;
$typeProduit = "Burger";

//Récupération des données depuis l'url
//$idProduit = $_REQUEST['idProduit']; // $idProduit = 1;
//$idUtil = $_REQUEST['idUtil']; // $idUtil = 2;
//$typeProduit = $_REQUEST['typeProduit']; // $typeProduit = "Burger";

$idPanier = $panierMySQL->recupererLePanierCourant($idUtil);

echo($idPanier);

//
//switch ($i) {
//  case 0:
//    echo "i égal 0";
//    break;
//  case 1:
//    echo "i égal 1";
//    break;
//  case 2:
//    echo "i égal 2";
//    break;
//}



//
//if(isset($prenom)){
//  // Recherche de l'utilisateur concerné à partir du mot de passe et du pseudo saisis
//  $resultIsExist = $utilisateurMySQL->afficherUnUtilisateur($mail);
//
//  //Si aucun utilisateur existe avec cette adresse mail
//  if($resultIsExist->rowCount() < 1){
//    $isInserted = $utilisateurMySQL->ajouterUnUtilisateur($nom ,$prenom ,$mail, $password);
//    if($isInserted){
//      print json_encode($isInserted);
//    }
//  }else{ //Utilisateur qui existe déjà
//    print json_encode("false");
//    //Adrese mail déjà utilisé
//  }
//}

?>

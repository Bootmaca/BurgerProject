
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Content-Type: application/json; charset=UTF-8");

//Inclus toutes les classe dans _classes pour pouvoir les utiliser dans ce fichier
include_once("chargementClasses.php");

//Création de la connexion avec la base de donnée en créant l'objet
$utilisateurMySQL = new UtilisateurMySQL();

$prenom = "Clément";
$nom = "HADJ";
$mail = "clementt.hadj@outlook.fr";
$password = "monMDP";
// $prenom = $_REQUEST['prenom']; // $prenom = "Clément";
// $nom = $_REQUEST['nom']; // $nom = "HADJ";
// $mail = $_REQUEST['email']; // $mail = "clement.hadj@outlook.fr";
// $motDePasse = $_REQUEST['password']; // $motDePasse = "monMDP";

// Recherche de l'utilisateur concerné à partir du mot de passe et du pseudo saisis
$resultIsExist = $utilisateurMySQL->afficherUnUtilisateur($mail);

//Si aucun utilisateur existe avec cette adresse mail
if($resultIsExist->rowCount() < 1){
  $isInserted = $utilisateurMySQL->ajouterUnUtilisateur($nom ,$prenom ,$mail, $password);
}else{ //Utilisateur qui existe déjà
  echo "Adrese mail déjà utilisé";
  //Adrese mail déjà utilisé
}
?>

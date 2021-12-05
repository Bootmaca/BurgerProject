
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Content-Type: application/json; charset=UTF-8");


include_once("UtilisateurMySQL.php");
include_once("Connexion.php");

//Création de la connexion avec la base de donnée en créant l'objet
$utilisateurMySQL = new UtilisateurMySQL();

session_start();
session_unset();

// $mail = "clement.hadj@outlook.fr";
// $motDePasse = "clementH";

$mail = $_REQUEST['email'];
$motDePasse = $_REQUEST['password'];

// Recherche de l'utilisateur concerné à partir du mot de passe et du pseudo saisis
$result = $utilisateurMySQL->verifierUtilisateur($mail, $motDePasse);

$nbUser = $result->rowCount(); //Nb lignes

//Si il n'y a pas de lignes
if ($nbUser < 1) {
    echo "Aucune donnée";
} else {//Si il y a des lignes
    $data = [];
    while($row = $result->fetch()){ //Pour chaque ligne récupéré de la requête
       $ligne = array('prenom' => $row['prenom'],
                      'nom' => $row['nom'],
                      'typeUtil' => $row['typeUtil']);
       array_push($data, $ligne);
    }
    print json_encode($data); //Affichage du tableau au format json pour qu'il soit récupéré en typescript
}


?>

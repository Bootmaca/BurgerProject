
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Content-Type: application/json; charset=UTF-8");

//Inclus toutes les classe dans _classes pour pouvoir les utiliser dans ce fichier
include_once("chargementClasses.php");

//Création de la connexion avec la base de donnée en créant l'objet
$utilisateurMySQL = new UtilisateurMySQL();

$mail = $_REQUEST['email']; // $mail = "clement.hadj@outlook.fr";
$motDePasse = $_REQUEST['password']; // $motDePasse = "clementH";

// Recherche de l'utilisateur concerné à partir du mot de passe et du pseudo saisis
$result = $utilisateurMySQL->verifierUtilisateur($mail, $motDePasse);

//Nb lignes
$nbUser = $result->rowCount();

//Si il n'y a pas de lignes
if ($nbUser < 1) {
    echo "Aucune donnée";
} else {//Si il y a des lignes
    $data = [];
    while($row = $result->fetch()){ //Pour chaque ligne récupéré de la requête
       $ligne = array('prenom' => $row['prenom'],
                      'nom' => $row['nom'],
                      'typeUtil' => $row['typeUtil']);
       array_push($data, $ligne); //Pousse les données ci dessous dans le tableau
    }
    print json_encode($data); //Affichage du tableau au format json pour qu'il soit récupéré en typescript
}

?>

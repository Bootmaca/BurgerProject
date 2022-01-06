<?php


class UtilisateurMySQL
{
    private $laConnexion;

    function __construct()
    {
        $this->laConnexion = new Connexion();
    }

    function verifierUtilisateur($mail, $password){
      $stmt = $this->laConnexion->getDbh()->prepare("SELECT idUtil, typeUtil, nom, prenom" .
          " FROM Utilisateur".
          " WHERE mail = :mail".
          " AND password = :password");
      $stmt->bindParam(':mail', $mail);
      $stmt->bindParam(':password', $password);
      $stmt->execute();
      if ($stmt === false) {
        $this->laConnexion->afficherErreurSQL("Utilisateur non trouvé ", $stmt);
      }
      return $stmt;
    }

    function afficherUnUtilisateur($mail){
        $stmt = $this->laConnexion->getDbh()->prepare("SELECT mail ,nom, prenom" .
            " FROM Utilisateur " .
            " WHERE mail = :mail;");
        $stmt->bindParam(':mail', $mail);
        $stmt->execute();
        if ($stmt === false) {
            $this->laConnexion->afficherErreurSQL("Utilisateur non trouvé ", $stmt);
        }
        return $stmt;
    }

    function ajouterUnUtilisateur($nom ,$premon ,$mail, $password): string
    {
        $isInserted = "false";
        $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `Utilisateur` (`nom`,`prenom`,`mail`,`password`,`typeUtil`)
                                                            VALUES (:nom,:prenom,:mail,:password,0);");
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $premon);
        $stmt->bindParam(':mail', $mail);
        $stmt->bindParam(':password', $password);
        if ($stmt ->execute() == 1) {
            $isInserted = "true";
        }
        $idUtil = $this->laConnexion->getDbh()->lastInsertId();
        $this->creerUnPanier($idUtil);
        return $isInserted;
    }

    function supprimerUnUtilisateur($mail)
    {
        $stmt = $this->laConnexion->getDbh()->prepare("DELETE FROM Utilisateur WHERE mail = :mail");

        $stmt->bindParam(':mail', $mail);

        $stmt->execute();

    }

  function creerUnPanier($idUtil){
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO Panier(isSurPlace, prix, etat, date)
                                                            VALUES (1, 0, 0, NULL);");
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    $idPanier = $this->laConnexion->getDbh()->lastInsertId();
    $this->attribuerPanier($idUtil, $idPanier);
    return $isInserted;
  }

  function attribuerPanier($idUtil, $idPanier){
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO Commande(idUtil, idPanier)
                                                            VALUES (:idUtil, :idPanier);");
    $stmt->bindParam(':idUtil', $idUtil);
    $stmt->bindParam(':idPanier', $idPanier);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function rechercherUnPanier(){

  }

    /*
    function ModifierUtilisateur($nom, $prenom, $mail)
    {
        $Modified = false;
        $dernierId=0;
        $stmt = $this->laConnexion->getDbh()->prepare("UPDATE Utilisateur SET
                                                nom = :nom,
                                                prenom = :prenom
                                                WHERE mail = :mail");

        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':mail', $mail);

        if($stmt->execute()) {
            echo "edité";
            $dernierId = $this->laConnexion->getDbh();
        }
        return $dernierId;
    }
    */


};

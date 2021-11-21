<?php


class UtilisateurMySQL
{
    private $laConnexion;

    function __construct()
    {
        $this->laConnexion = new Connexion();
    }

    function verifierUtilisateur($mail, $password){
      $stmt = $this->laConnexion->getDbh()->prepare("SELECT typeUtil, nom, prenom" .
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

    function ajouterUnUtilisateur($nom ,$premon ,$mail, $password)
    {
        $isInserted = "false";
        $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `Utilisateur` (`nom`, `prenom` ,`mail`,`password`, `typeUtil`)
                                                            VALUES (:nom ,:prenom ,:mail ,:password ,0 )");
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt ->bindParam(':mail', $mail);
        $stmt ->bindParam(':password', $password);
        if ($stmt ->execute() == 1) {
            $isInserted = "true";
        }
        return $isInserted;
    }

    function supprimerUnUtilisateur($mail)
    {
        $stmt = $this->laConnexion->getDbh()->prepare("DELETE FROM Utilisateur WHERE mail = :mail");

        $stmt->bindParam(':mail', $mail);

        $stmt->execute();

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

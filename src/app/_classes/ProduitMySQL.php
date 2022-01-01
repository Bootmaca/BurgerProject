<?php


class ProduitMySQL
{
    private $laConnexion;

    function __construct()
    {
        $this->laConnexion = new Connexion();
    }

    function afficherLesFrites(){
        $stmt = $this->laConnexion->getDbh()->prepare("SELECT idFrite, libelle, prix, image, isDisponible FROM Frite;");
        $stmt->execute();
        if ($stmt === false) {
            $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
        }
        return $stmt;
    }

    function afficherLesDesserts(){
        $stmt = $this->laConnexion->getDbh()->prepare("SELECT idDessert, libelle, prix, image, isDisponible FROM Dessert;");
        $stmt->execute();
        if ($stmt === false) {
            $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
        }
        return $stmt;
    }


    function afficherLesBoissons(){
        $stmt = $this->laConnexion->getDbh()->prepare("SELECT idBoisson, libelle, prix, image, isDisponible FROM Boisson;");
        $stmt->execute();
        if ($stmt === false) {
            $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
        }
        return $stmt;
    }

    function ajouterUnUtilisateur($nom ,$premon ,$mail, $password)
    {
        $isInserted = "false";
        $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `Utilisateur` (`nom`,`prenom`,`mail`,`password`,`typeUtil`)
                                                            VALUES (:nom,:prenom,:mail,:password,0);");
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $premon);
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

};

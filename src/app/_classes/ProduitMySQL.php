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

    function afficherLesBurgers(){
      $stmt = $this->laConnexion->getDbh()->prepare("SELECT idBurger, libelle, prix, image, isDisponible, isByCreator FROM Burger;");
      $stmt->execute();
      if ($stmt === false) {
          $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
      }
      return $stmt;
    }

    function afficherLesSupplements(){
      $stmt = $this->laConnexion->getDbh()->prepare("SELECT idAutre, libelle, prix, image, isDisponible FROM Autre;");
      $stmt->execute();
      if ($stmt === false) {
          $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
      }
      return $stmt;
    }

  /*function ajouterBurger($idBurger, $idClient){
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `Burger` (`nom`,`prenom`,`mail`,`password`,`typeUtil`)
                                                            VALUES (:nom,:prenom,:mail,:password,0);");
    $stmt->bindParam(':nom', $nom);
    $stmt->bindParam(':prenom', $premon);
    $stmt ->bindParam(':mail', $mail);
    $stmt ->bindParam(':password', $password);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }*/

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

}

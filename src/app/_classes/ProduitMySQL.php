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
        if ($stmt->execute() === false) {
            $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
        }
        return $stmt;
    }

    function afficherLesDesserts(){
        $stmt = $this->laConnexion->getDbh()->prepare("SELECT idDessert, libelle, prix, image, isDisponible FROM Dessert;");
        if ($stmt->execute() === false) {
            $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
        }
        return $stmt;
    }


    function afficherLesBoissons(){
        $stmt = $this->laConnexion->getDbh()->prepare("SELECT idBoisson, libelle, prix, image, isDisponible FROM Boisson;");
        if ($stmt->execute() === false) {
            $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
        }
        return $stmt;
    }

    function afficherLesBurgers(){
        $stmt = $this->laConnexion->getDbh()->prepare("SELECT idBurger, libelle, prix, image, isDisponible, isByCreator FROM Burger;");
        if ($stmt->execute() === false) {
            $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
        }
        return $stmt;
    }

    function afficherLesSupplements(){
        $stmt = $this->laConnexion->getDbh()->prepare("SELECT idAutre, libelle, prix, image, isDisponible FROM Autre;");
        if($stmt->execute() === false) {
            $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
        }
        return $stmt;
    }

  function afficherLesMenus(){
      $stmt = $this->laConnexion->getDbh()->prepare("SELECT idMenu, libelle, prix, image, isDisponible FROM Menu;");
      if ($stmt->execute() === false) {
        $this->laConnexion->afficherErreurSQL("Produit non trouvé ", $stmt);
      }
      return $stmt;
  }





}

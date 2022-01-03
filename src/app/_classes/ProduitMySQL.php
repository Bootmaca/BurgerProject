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

};

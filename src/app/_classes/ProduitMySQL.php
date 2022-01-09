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

  function ajouterUnBurger($nomBurger, $idPain, $idViande, $idSauce){
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `Burger` (libelle, isPain, isByCreator, prix, image, isDisponible, idViande, idSauce)
                                                            VALUES (:nomBurger,:isPain, 0, 5, 'burger_a_creer.png', 1, :idViande, :idSauce);");
    $stmt->bindParam(':nomBurger', $nomBurger);
    $stmt->bindParam(':isPain', $idPain);
    $stmt->bindParam(':idViande', $idViande);
    $stmt->bindParam(':idSauce', $idSauce);
    $stmt ->execute();
    $idBurger = $this->laConnexion->getDbh()->lastInsertId();
    return $idBurger;
  }

  function ajouterUnBurgerAvecSupplement($nomBurger, $idPain, $idViande, $idSupplement, $idSauce){
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `Burger` (libelle, isPain, isByCreator, prix, image, isDisponible, idViande, idSauce)
                                                            VALUES (:nomBurger,:isPain, 0, (SELECT prix+5 FROM supplement WHERE idSupplement = :idSupplement), 'burger_a_creer.png', 1, :idViande, :idSauce);");

    $stmt->bindParam(':nomBurger', $nomBurger);
    $stmt->bindParam(':isPain', $idPain);
    $stmt->bindParam(':idSupplement', $idSupplement);
    $stmt->bindParam(':idViande', $idViande);
    $stmt->bindParam(':idSauce', $idSauce);
    $stmt ->execute();
    $idBurger = $this->laConnexion->getDbh()->lastInsertId();
    $this->ajouterSupplementBurger($idBurger, $idSupplement);
    return $idBurger;
  }

  function ajouterSupplementBurger($idBurger, $idSupplement){
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO supplementBurger (idBurger, idSupplement)
                                                            VALUES (:idBurger, :idSupplement);");

    $stmt->bindParam(':idBurger', $idBurger);
    $stmt->bindParam(':idSupplement', $idSupplement);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }





}

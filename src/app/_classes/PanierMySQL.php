<?php

class PanierMySQL
{
  private $laConnexion;

  function __construct()
  {
    $this->laConnexion = new Connexion();
  }

  function creerUnPanier($idUtil): string
  {
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

  function attribuerPanier($idUtil, $idPanier): string
  {
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

  function recupererLePanierCourant($idUtilisateur)
  {
    $idPanier = 0;
    $stmt = $this->laConnexion->getDbh()->prepare("SELECT P.idPanier as idPanier
      FROM Panier P INNER JOIN Commande C
      ON P.idPanier = C.idPanier
      WHERE C.idUtil = :idUtilisateur
      AND P.etat = 0;");
    $stmt->bindParam(':idUtilisateur', $idUtilisateur);
    $stmt->execute();
    if ($stmt === false) {
      $this->laConnexion->afficherErreurSQL("Panier non trouvé ", $stmt);
    }
    if($stmt->rowCount() > 0){
      $row = $stmt->fetch();
      $idPanier = $row['idPanier'];
    }
    return $idPanier;
  }

  function isDejaAjouteBurger($idPanier, $idBurger): string
  {
    $isDeja = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("SELECT idPanier
      FROM AjouterBurger P
      WHERE idPanier = :idPanier
      AND idBurger = :idBurger;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idBurger', $idBurger);
    $stmt->execute();
    if ($stmt === false) {
      $this->laConnexion->afficherErreurSQL("Panier non trouvé ", $stmt);
    }
    if($stmt->rowCount() > 0){
      $isDeja = "true";
    }
    return $isDeja;
  }

  //Créer un trigger pour cette fonction
  function augmenterQuantiteBurger($idPanier, $idBurger): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE AjouterBurger
                                                            SET quantite = quantite + 1
                                                            WHERE idPanier = :idPanier
                                                            AND idBurger = :idBurger;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idBurger', $idBurger);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function ajouterBurger($idPanier, $idBurger): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `AjouterBurger` (idPanier,idBurger,quantite)
                                                            VALUES (:idPanier,:idBurger, 1);");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idBurger', $idBurger);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  //Créer un trigger pour cette fonction
  function majPrixDuPanierApresAjoutBurger($idPanier, $idBurger): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE Panier
                                                            SET prix = prix + (SELECT prix FROM Burger WHERE idBurger = :idBurger)
                                                            WHERE idPanier = :idPanier;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idBurger', $idBurger);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function isDejaAjouteMenu($idPanier, $idMenu): string
  {
    $isDeja = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("SELECT idPanier
      FROM AjouterMenu
      WHERE idPanier = :idPanier
      AND idMenu = :idMenu;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idMenu', $idMenu);
    $stmt->execute();
    if ($stmt === false) {
      $this->laConnexion->afficherErreurSQL("Panier non trouvé ", $stmt);
    }
    if($stmt->rowCount() > 0){
      $isDeja = "true";
    }
    return $isDeja;
  }

  //Créer un trigger pour cette fonction
  function augmenterQuantiteMenu($idPanier, $idMenu): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE AjouterMenu
                                                            SET quantite = quantite + 1
                                                            WHERE idPanier = :idPanier
                                                            AND idMenu = :idMenu;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idMenu', $idMenu);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function ajouterMenu($idPanier, $idMenu): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `AjouterMenu` (idPanier,idMenu,quantite)
                                                            VALUES (:idPanier,:idMenu, 1);");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idMenu', $idMenu);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  //Créer un trigger pour cette fonction
  function majPrixDuPanierApresAjoutMenu($idPanier, $idMenu): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE Panier
                                                            SET prix = prix + (SELECT prix FROM Menu WHERE idMenu = :idMenu)
                                                            WHERE idPanier = :idPanier;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idMenu', $idMenu);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function isDejaAjouteFrite($idPanier, $idFrite): string
  {
    $isDeja = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("SELECT idPanier
      FROM AjouterFrite
      WHERE idPanier = :idPanier
      AND idFrite = :idFrite;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idFrite', $idFrite);
    $stmt->execute();
    if ($stmt === false) {
      $this->laConnexion->afficherErreurSQL("Panier non trouvé ", $stmt);
    }
    if($stmt->rowCount() > 0){
      $isDeja = "true";
    }
    return $isDeja;
  }

  //Créer un trigger pour cette fonction
  function augmenterQuantiteFrite($idPanier, $idFrite): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE AjouterFrite
                                                            SET quantite = quantite + 1
                                                            WHERE idPanier = :idPanier
                                                            AND idFrite = :idFrite;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idFrite', $idFrite);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function ajouterFrite($idPanier, $idFrite): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `AjouterFrite` (idPanier,idFrite,quantite)
                                                            VALUES (:idPanier,:idFrite, 1);");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idFrite', $idFrite);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  //Créer un trigger pour cette fonction
  function majPrixDuPanierApresAjoutFrite($idPanier, $idFrite): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE Panier
                                                            SET prix = prix + (SELECT prix FROM Frite WHERE idFrite = :idFrite)
                                                            WHERE idPanier = :idPanier;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idFrite', $idFrite);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function isDejaAjouteBoisson($idPanier, $idBoisson): string
  {
    $isDeja = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("SELECT idPanier
      FROM AjouterBoisson
      WHERE idPanier = :idPanier
      AND idBoisson = :idBoisson;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idBoisson', $idBoisson);
    $stmt->execute();
    if ($stmt === false) {
      $this->laConnexion->afficherErreurSQL("Panier non trouvé ", $stmt);
    }
    if($stmt->rowCount() > 0){
      $isDeja = "true";
    }
    return $isDeja;
  }

  //Créer un trigger pour cette fonction
  function augmenterQuantiteBoisson($idPanier, $idBoisson): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE AjouterBoisson
                                                            SET quantite = quantite + 1
                                                            WHERE idPanier = :idPanier
                                                            AND idBoisson = :idBoisson;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idBoisson', $idBoisson);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function ajouterBoisson($idPanier, $idBoisson): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `AjouterBoisson` (idPanier,idBoisson,quantite)
                                                            VALUES (:idPanier,:idBoisson, 1);");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idBoisson', $idBoisson);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  //Créer un trigger pour cette fonction
  function majPrixDuPanierApresAjoutBoisson($idPanier, $idBoisson): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE Panier
                                                            SET prix = prix + (SELECT prix FROM Boisson WHERE idBoisson = :idBoisson)
                                                            WHERE idPanier = :idPanier;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idBoisson', $idBoisson);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function isDejaAjouteAutre($idPanier, $idAutre): string
  {
    $isDeja = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("SELECT idPanier
      FROM AjouterAutre
      WHERE idPanier = :idPanier
      AND idAutre = :idAutre;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idAutre', $idAutre);
    $stmt->execute();
    if ($stmt === false) {
      $this->laConnexion->afficherErreurSQL("Panier non trouvé ", $stmt);
    }
    if($stmt->rowCount() > 0){
      $isDeja = "true";
    }
    return $isDeja;
  }

  //Créer un trigger pour cette fonction
  function augmenterQuantiteAutre($idPanier, $idAutre): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE AjouterAutre
                                                            SET quantite = quantite + 1
                                                            WHERE idPanier = :idPanier
                                                            AND idAutre = :idAutre;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idAutre', $idAutre);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function ajouterAutre($idPanier, $idAutre): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `AjouterAutre` (idPanier,idAutre,quantite)
                                                            VALUES (:idPanier,:idAutre, 1);");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idAutre', $idAutre);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  //Créer un trigger pour cette fonction
  function majPrixDuPanierApresAjoutAutre($idPanier, $idAutre): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE Panier
                                                            SET prix = prix + (SELECT prix FROM Autre WHERE idAutre = :idAutre)
                                                            WHERE idPanier = :idPanier;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idAutre', $idAutre);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function isDejaAjouteDessert($idPanier, $idDessert): string
  {
    $isDeja = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("SELECT idPanier
      FROM AjouterDessert
      WHERE idPanier = :idPanier
      AND idDessert = :idDessert;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idDessert', $idDessert);
    $stmt->execute();
    if ($stmt === false) {
      $this->laConnexion->afficherErreurSQL("Panier non trouvé ", $stmt);
    }
    if($stmt->rowCount() > 0){
      $isDeja = "true";
    }
    return $isDeja;
  }

  //Créer un trigger pour cette fonction
  function augmenterQuantiteDessert($idPanier, $idDessert): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE AjouterDessert
                                                            SET quantite = quantite + 1
                                                            WHERE idPanier = :idPanier
                                                            AND idDessert = :idDessert;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idDessert', $idDessert);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  function ajouterDessert($idPanier, $idDessert): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `AjouterDessert` (idPanier,idDessert,quantite)
                                                            VALUES (:idPanier,:idDessert, 1);");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idDessert', $idDessert);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

  //Créer un trigger pour cette fonction
  function majPrixDuPanierApresAjoutDessert($idPanier, $idDessert): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("UPDATE Panier
                                                            SET prix = prix + (SELECT prix FROM Dessert WHERE idDessert = :idDessert)
                                                            WHERE idPanier = :idPanier;");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idDessert', $idDessert);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

}

?>


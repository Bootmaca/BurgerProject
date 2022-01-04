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
    $stmt = $this->laConnexion->getDbh()->prepare("SELECT P.idPanier
      FROM Panier P INNER JOIN Commande C
      ON P.idPanier = C.idPanier
      WHERE C.idUtil = :idUtilisateur
      AND P.etat = 0;");
    $stmt->bindParam(':idUtilisateur', $idUtilisateur);
    $stmt->execute();
    if ($stmt === false) {
      $this->laConnexion->afficherErreurSQL("Panier non trouvé ", $stmt);
    }
    return $stmt;
  }

  function ajouterBurger($idBurger, $idPanier): string
  {
    $isInserted = "false";
    $stmt = $this->laConnexion->getDbh()->prepare("INSERT INTO `AjouterBurger` (idPanier,`idBurger`)
                                                            VALUES (:idPanier,:idBurger);");
    $stmt->bindParam(':idPanier', $idPanier);
    $stmt->bindParam(':idBurger', $idBurger);
    if ($stmt ->execute() == 1) {
      $isInserted = "true";
    }
    return $isInserted;
  }

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

}

?>


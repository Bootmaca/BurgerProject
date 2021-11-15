CREATE DATABASE BurgerProject;

USE BurgerProject;

CREATE TABLE Utilisateur(
	idUtil INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nom VARCHAR(50),
	prenom VARCHAR(50),
	mail VARCHAR(50),
	password VARCHAR(50),
	typeUtil TINYINT(1)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE Panier(
	idPanier INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	isSurPlace TINYINT(1),
	prix DECIMAL(20,2),
	etat TINYINT(1),
	date DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE Commande(
	idUtil INTEGER(10),
	idPanier INTEGER(10),
	PRIMARY KEY(idUtil, idPanier)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE Commande
  ADD CONSTRAINT fk_Commande_Utilisateur FOREIGN KEY (idUtil) REFERENCES Utilisateur(idUtil),
  ADD CONSTRAINT fk_Commande_Panier FOREIGN KEY (idPanier) REFERENCES Panier(idPanier);


CREATE TABLE Dessert(
	idDessert INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	libelle VARCHAR(50),
	prix DECIMAL(20,2),
	image VARCHAR(500)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE AjouterDessert(
	idPanier INTEGER(10),
	idDessert INTEGER(10),
	quantite INTEGER(5),
	PRIMARY KEY (idPanier, idDessert)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE AjouterDessert
  ADD CONSTRAINT fk_AjouterDessert_Panier FOREIGN KEY (idPanier) REFERENCES Panier(idPanier),
  ADD CONSTRAINT fk_AjouterDessert_Dessert FOREIGN KEY (idDessert) REFERENCES Dessert(idDessert);


CREATE TABLE Frite(
	idFrite INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	libelle VARCHAR(50),
	prix DECIMAL(20,2),
	image VARCHAR(500)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE AjouterFrite(
	idPanier INTEGER(10),
	idFrite INTEGER(10),
	quantite INTEGER(5),
	PRIMARY KEY (idPanier, idFrite)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE AjouterFrite
  ADD CONSTRAINT fk_AjouterFrite_Panier FOREIGN KEY (idPanier) REFERENCES Panier(idPanier),
  ADD CONSTRAINT fk_AjouterFrite_Dessert FOREIGN KEY (idFrite) REFERENCES Frite(idFrite);


CREATE TABLE Boisson(
	idBoisson INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	libelle VARCHAR(50),
	prix DECIMAL(20,2),
	image VARCHAR(500)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE AjouterBoisson(
	idPanier INTEGER(10),
	idBoisson INTEGER(10),
	quantite INTEGER(5),
	PRIMARY KEY (idPanier, idBoisson)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE AjouterBoisson
  ADD CONSTRAINT fk_AjouterBoisson_Panier FOREIGN KEY (idPanier) REFERENCES Panier(idPanier),
  ADD CONSTRAINT fk_AjouterBoisson_Boisson FOREIGN KEY (idBoisson) REFERENCES Boisson(idBoisson);


CREATE TABLE Autre(
	idAutre INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	libelle VARCHAR(50),
	prix DECIMAL(20,2),
	image VARCHAR(500)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE AjouterAutre(
	idPanier INTEGER(10),
	idAutre INTEGER(10),
	quantite INTEGER(5),
	PRIMARY KEY (idPanier, idAutre)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE AjouterAutre
  ADD CONSTRAINT fk_AjouterAutre_Panier FOREIGN KEY (idPanier) REFERENCES Panier(idPanier),
  ADD CONSTRAINT fk_AjouterAutre_Autre FOREIGN KEY (idAutre) REFERENCES Autre(idAutre);


CREATE TABLE Viande(
	idViande INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	libelle VARCHAR(50),
	image VARCHAR(500)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE Sauce(
	idSauce INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	libelle VARCHAR(50),
	image VARCHAR(500)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE Burger(
	idBurger INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	libelle VARCHAR(50),
	isPain TINYINT(1),
	isByCreator TINYINT(1),
	prix DECIMAL(20,2),
	image VARCHAR(500),
	idViande INTEGER(10),
	idSauce INTEGER(10)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE Burger
  ADD CONSTRAINT fk_Burger_Viande FOREIGN KEY (idViande) REFERENCES Viande(idViande),
  ADD CONSTRAINT fk_Burger_Sauce FOREIGN KEY (idSauce) REFERENCES Sauce(idSauce);


CREATE TABLE Supplement(
	idSupplement INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	libelle VARCHAR(50),
	prix INTEGER(10),
	image VARCHAR(500)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE SupplementBurger(
	idBurger INTEGER(10),
	idSupplement INTEGER(10),
	PRIMARY KEY (idBurger, idSupplement)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE SupplementBurger
  ADD CONSTRAINT fk_SupplementBurger_Burger FOREIGN KEY (idBurger) REFERENCES Burger(idBurger),
  ADD CONSTRAINT fk_SupplementBurger_Supplement FOREIGN KEY (idSupplement) REFERENCES Supplement(idSupplement);


CREATE TABLE AjouterBurger(
	idPanier INTEGER(10),
	idBurger INTEGER(10),
	quantite INTEGER(5),
	PRIMARY KEY (idPanier, idBurger)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE AjouterBurger
  ADD CONSTRAINT fk_AjouterBurger_Panier FOREIGN KEY (idPanier) REFERENCES Panier(idPanier),
  ADD CONSTRAINT fk_AjouterBurger_Burger FOREIGN KEY (idBurger) REFERENCES Burger(idBurger);


CREATE TABLE Menu(
	idMenu INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	prix INTEGER(10),
	image VARCHAR(500),
	idBurger INTEGER(10),
	idBoisson INTEGER(10),
	idFrite INTEGER(10)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE Menu
  ADD CONSTRAINT fk_Menu_Burger FOREIGN KEY (idBurger) REFERENCES Burger(idBurger),
  ADD CONSTRAINT fk_Menu_Boisson FOREIGN KEY (idBoisson) REFERENCES Boisson(idBoisson),
  ADD CONSTRAINT fk_Menu_Frite FOREIGN KEY (idFrite) REFERENCES Frite(idFrite);


CREATE TABLE AjouterMenu(
	idPanier INTEGER(10),
	idMenu INTEGER(10),
	quantite INTEGER(5),
	PRIMARY KEY (idPanier, idMenu)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE AjouterMenu
	ADD CONSTRAINT fk_AjouterMenu_Panier FOREIGN KEY (idPanier) REFERENCES Panier(idPanier),
	ADD CONSTRAINT fk_AjouterMenu_MenuBurger FOREIGN KEY (idMenu) REFERENCES Menu(idMenu);

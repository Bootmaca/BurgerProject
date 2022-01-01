USE BurgerProject;

INSERT INTO Utilisateur(idUtil, nom, prenom, mail, password, typeUtil )
  VALUES
    (1, 'HADJ', 'Clément', 'clement.hadj@outlook.fr', "clementh", 1),
	  (2, 'DE ALMEIDA', 'Pierre', 'pierre.dealmeida@outlook.fr', "pierreD", 0),
	  (3, 'MARTEAU', 'Nicolas', 'nicolas.marteau@outlook.fr', "nicolasM", 1),
	  (4, 'DUTHION', 'Mathias', 'mathias.duthion@outlook.fr', "mathiasD", 0),
	  (5, 'CHEVALLIER', 'Guillaume', 'guillaume.chevallier@outlook.fr', "guillaumeC", 1),
	  (6, 'GIRARD', 'Quentin', 'quentin.girard@outlook.fr', "quentinG", 0),
	  (7, 'PRATTICO', 'Emilien', 'emilien.prattico@outlook.fr', "emilienP", 1);

INSERT INTO Viande(idViande, libelle, image, isDisponible)
  VALUES
    (1,"Poulet", "url/image", 1),
    (2,"Steak haché", "url/image", 1),
    (3,"Poisson", "url/image", 1),
    (4,"Veggie", "url/image", 1);

INSERT INTO Sauce(idSauce, libelle, image, isDisponible)
  VALUES
    (1,"Ketchup", "url/image", 1),
    (2,"Sauce burger", "url/image", 1),
    (3,"Mayonnaise", "url/image", 1),
    (4,"Biggy", "url/image", 1);

INSERT INTO Burger(idBurger, libelle, isPain, isByCreator, prix, image, isDisponible, idViande, idSauce )
  VALUES
    (1,"Chicken Burger", 1, 1, 5.00,"url/image", 1, 1, 1),
    (2,"Beef Burger", 1, 1, 5.00, "url/image", 1, 2, 1),
    (3,"Cheese Burger", 1, 1, 5.50, "url/image", 1, 2, 2),
    (4,"Fish Burger", 1, 1, 5.00, "url/image", 1, 3, 1),
    (5,"Veggie Burger", 1, 1, 5.00, "url/image", 1, 4, 1),
    (6,"Real Bread Burger", 0, 1, 5.00, "url/image", 1, 2, 1);

INSERT INTO Supplement(idSupplement, libelle, prix, image, isDisponible)
  VALUES
    (1,"Bacon", 1.00, "url/image", 1),
    (2,"Cheddar", 0.50, "url/image", 1),
    (3,"Emmental", 0.50, "url/image", 1),
    (4,"Chèvre", 0.50, "url/image", 1),
    (5,"Poulet", 1.50, "url/image", 1),
    (6,"Steak haché", 1.50, "url/image", 1),
    (7,"Poisson", 1.50, "url/image", 1),
    (8,"Veggie", 1.50, "url/image", 1),
    (9,"Ananas", 1.00, "url/image", 1);

INSERT INTO SupplementBurger(idBurger, idSupplement)
  VALUES
    (3,2);

INSERT INTO Dessert(idDessert, libelle, prix, image, isDisponible)
  VALUES
    (1,"Muffin", 1.50, "muffin.png", 1),
    (2,"Donuts", 1.00, "donuts.png", 1),
    (3,"brownie", 2.00, "brownie.png", 1),
    (4,"cookie", 1.00, "cookie.png", 1),
    (5,"beignets",  2.00, "beignets.png", 1),
    (6,"glace choco", 2.50, "glace_choco.png", 1),
    (7,"glace caramel", 2.50, "glace_caramel.png", 1),
    (8,"glace vanille", 2.50, "glace_vanille.png", 1);

INSERT INTO Frite(idFrite, libelle, prix, image, isDisponible)
  VALUES
    (1,"Petite frite", 1.00, "petite_frite.png", 1),
    (2,"Moyenne frite", 2.00, "moyenne_frite.png", 1),
    (3,"Grande frite", 3.00, "grande_frite.png", 1),
    (4,"Frite au bacon", 3.50, "frite_bacon.png", 1);

INSERT INTO Boisson(idBoisson, libelle, prix, image, isDisponible)
  VALUES
    (1,"Vittel 50cl", 1.00, "eau.png", 1),
    (2,"San pellegrino 50cl", 1.50, "sanpe.png", 1),
    (3,"Coca Cola 50cl", 2.50, "grand_coca.png", 1),
    (4,"Ice Tea 50cl", 2.50, "grand_icetea.png", 1),
    (5,"Fanta 50cl", 2.50, "fanta.png", 1),
    (6,"Sprite 50cl", 2.50, "sprite.png", 1);


INSERT INTO Autre(idAutre, libelle, prix, image, isDisponible)
  VALUES
    (1,"Boite de 6 tenders", 5.00, "url/image", 1),
    (2,"Boite de 6 nuggets", 3.50, "url/image", 1),
    (3,"Salade césar", 6.00, "url/image", 1),
    (4,"Salade chèvre", 6.00, "url/image", 1);

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
    (1,"Burger au poulet", 1, 1, 5.00,"burger_poulet.png", 1, 1, 1),
    (2,"Burger au boeuf", 1, 1, 5.00, "burger_boeuf.png", 1, 2, 1),
    (3,"Cheese Burger", 1, 1, 5.50, "cheese_burger.png", 1, 2, 2),
    (4,"Burger au poisson", 1, 1, 5.00, "burger_poisson.png", 1, 3, 1),
    (5,"Burger végétarien", 1, 1, 5.00, "burger_veggie.png", 1, 4, 1),
    (6,"Baguette Burger", 0, 1, 5.00, "burger_baguette.png", 1, 2, 1),
    (7,"Burger boeuf & bacon", 0, 1, 6.00, "burger_boeuf_et_bacon.png", 1, 2, 1);

INSERT INTO Supplement(idSupplement, libelle, prix, image, isDisponible)
  VALUES
    (1,"Bacon", 1.00, "url/image", 1),
    (2,"Cheddar", 0.50, "url/image", 1),
    (3,"Emmental", 0.50, "url/image", 1),
    (4,"Chèvre", 0.50, "url/image", 1);

INSERT INTO SupplementBurger(idBurger, idSupplement)
  VALUES
    (3,2),
    (7,1);

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
    (1,"Eau vittel 50cl", 1.00, "eau.png", 1),
    (2,"San pellegrino 50cl", 1.50, "sanpe.png", 1),
    (3,"Coca Cola 33cl", 1.50, "petit_coca.png", 1),
    (4,"Coca Cola Cherry 33cl", 1.50, "petit_coca_cherry.png", 1),
    (6,"Fanta 33cl", 1.50, "petit_fanta.png", 1),
    (7,"Ice Tea Pêche 33cl", 1.50, "petit_ice_tea.png", 1),
    (8,"Ice Tea Agrumes 33cl", 1.50, "petit_ice_tea_agrumes.png", 1),
    (9,"Sprite 33cl", 1.50, "petit_sprite.png", 1),
    (10,"Coca Cola 50cl", 2.50, "grand_coca.png", 1),
    (11,"Coca Cola Cherry 50cl", 2.50, "grand_coca_cherry.png", 1),
    (12,"Fanta 50cl", 2.50, "grand_fanta.png", 1),
    (13,"Ice Tea Pêche 50cl", 2.50, "grand_ice_tea.png", 1),
    (14,"Ice Tea Agrumes 50cl", 2.50, "grand_ice_tea_agrumes.png", 1),
    (15,"Sprite 50cl", 2.50, "grand_sprite.png", 1);


INSERT INTO Autre(idAutre, libelle, prix, image, isDisponible)
  VALUES
    (1,"6 onion rings", 3.50, "onion_rings.png", 1),
    (2,"6 nuggets", 3.50, "nuggets.png", 1),
    (3,"6 crousty chèvre", 3.50, "crousty.png", 1),
    (4,"Salade césar", 6.00, "salade_cesar.png", 1),
    (5,"Salade chèvre", 6.00, "salade_chevre.png", 1),
    (6,"Carotte", 1.50, "carotte.png", 1);

INSERT INTO Menu(idMenu, libelle, prix, image, isDisponible, idBurger, idBoisson, idFrite)
VALUES
  (1,"Menu burger poulet", 7.00, "menu_burger_poulet.png", 1, 1, 10, 2),
  (2,"Menu burger boeuf", 7.00, "menu_burger_boeuf.png", 1, 2, 10, 2),
  (3,"Menu cheese burger", 7.50, "menu_cheese_burger.png", 1, 3, 10, 2),
  (4,"Menu burger poisson", 7.00, "menu_burger_poisson.png", 1, 4, 10, 2),
  (5,"Menu burger vegetarien", 7.00, "menu_burger_vegetarien.png", 1, 5, 10, 2),
  (6,"Menu burger boeuf et bacon", 8.00, "menu_burger_boeuf_et_bacon.png", 1, 7, 10, 2);

INSERT INTO Panier(idPanier, isSurPlace, prix, etat, date)
  VALUES
    (1, 1, 0, 0, NULL),
    (2, 1, 0, 0, NULL),
    (3, 1, 0, 0, NULL);

INSERT INTO Commande(idUtil, idPanier)
  VALUES
    (2,1),
    (4,2),
    (6,3);

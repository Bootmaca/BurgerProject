<?php
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        // Définition des variables de connexion
        $user = "root";
        $pass = "";
        $dbname = 'BurgerProject';
        $dsn ='mysql:host=localhost;dbname='.$dbname;

         // Connexion

                    $dbh = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT=>true,
                    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));  // Connexion persistante
                    $records = [];
                    $sql =  'SELECT * FROM Commande ';
                    $sqlinitburger = 'SELECT idBurger,libelle from burger';
                    $sqlinitboisson = 'SELECT idBoisson,libelle from boisson';
                    $sqlinitfrite = 'SELECT idFrite,libelle from frite';
                    $sqlinitautre = 'SELECT idAutre,libelle from autre';
                    $sqlinitdessert = 'SELECT idDessert,libelle from dessert';
                    $burger=[];
                    foreach  ($dbh->query($sqlinitburger) as $row) {
                         $burger[$row['idBurger']]=$row['libelle'];
                    }
                    $frite=[];
                    foreach  ($dbh->query($sqlinitfrite) as $row) {
                         $burger[$row['idFrite']]=$row['libelle'];
                    }
                    $boisson=[];
                    foreach  ($dbh->query($sqlinitboisson) as $row) {
                         $burger[$row['idBoisson']]=$row['libelle'];
                    }
                    $autre=[];
                    foreach  ($dbh->query($sqlinitautre) as $row) {
                         $burger[$row['idAutre']]=$row['libelle'];
                    }
                    $dessert=[];
                    foreach  ($dbh->query($sqlinitdessert) as $row) {
                         $burger[$row['idDessert']]=$row['libelle'];
                    }
                    $menu=[];


                     foreach  ($dbh->query($sql) as $row) {
                     // tableau d'utilisateur
                     $utils =[];
                     // on recupere
                     $sqlBurger ='SELECT * FROM ajouterburger where idPanier='.$row['idPanier'].'';
                     $itemBurger= $dbh->query($sqlBurger)->fetch();
                     $sqlBoisson ='SELECT * FROM ajouterboisson  where idPanier='.$row['idPanier'].'';
                     $itemBoisson= $dbh->query($sqlBoisson)->fetch();
                     $sqlFrite ='SELECT * FROM ajouterfrite where idPanier='.$row['idPanier'].'';
                     $itemfrite= $dbh->query($sqlFrite)->fetch();
                     $sqlMenu ='SELECT * FROM ajoutermenu where idPanier='.$row['idPanier'].'';
                     $itemmenu= $dbh->query($sqlMenu)->fetch();
                     $sqlAutre ='SELECT * FROM ajouterautre where idPanier='.$row['idPanier'].'';
                     $itemautre= $dbh->query($sqlAutre)->fetch();
                     $iter=0;
                     foreach ($itemBurger as $key){

                     $ligne = array('idPanier' => $row['idPanier'],
                                    'burger' => $key['idBurger'][$iter],
                                    'quantite' => $key['quantite'][$iter]
                                    ]);
                     array_push($records, $ligne);
                     $iter=$iter+1;

                     }

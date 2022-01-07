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
            $sql =  'SELECT * FROM Commande ';
            $records = [];
            foreach  ($dbh->query($sql) as $row) {
                $dbhUtil = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT=>true,
                            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));  // Connexion persistante
                $sqlUtil = 'SELECT `nom`,`prenom` from Utilisateur where `idUtil`=:id';
                $stmt = $dbhUtil->prepare($sqlUtil);
                $stmt->bindParam(':id', $row['idUtil']);
                $stmt->execute();
                $util=$stmt->fetch();


                // regroupement du nom et prenom
                $nompre=$util[0];
                $nompre .=" ";
                $nompre .=$util[1];


                $dbhPanier = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT=>true,
                    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));  // Connexion persistante
                $sqlPanier =  'SELECT `prix`,`date` from Panier where `idPanier` = :id ';
                $stmt = $dbhPanier->prepare($sqlPanier);

                $stmt->bindParam(':id', $row['idPanier']);
                $stmt->execute();
                $panier=$stmt->fetch();
              $ligne = array('idPanier' => $row['idPanier'],
                      'nom' => $nompre,
                      'prix' => $panier[0],
                      'date' => $panier[1]);
              array_push($records, $ligne);
            }
               print json_encode($records);


        ?>

  <?php
         header("Access-Control-Allow-Origin: *");
         header("Content-Type: application/json; charset=UTF-8");
         // Définition des variables de connexion
         $user = "root";
         $pass = "";
         $dbname = 'BurgerProject';
         $dsn ='mysql:host=localhost;dbname='.$dbname;

          // Connexion
         $id_Panier = $_GET["id"];
         $id_categorie =$_GET["categorie"];
         $dbh = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT=>true,
         PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));  // Connexion persistante
         $records = [];

         $sql = 'SELECT * FROM ajouter'.$id_categorie.' where idPanier="'.$id_Panier.'" ' ;

         foreach  ($dbh->query($sql) as $row) {

          // on concat id avec categorie pour pouvoir l'utiliser en tant que clef dans row[]
          $id2_categorie="id";
          $id2_categorie.=$id_categorie;
          // si on a un menu il faut récuperer son burger sa frite et sa boisson
          if ($id_categorie=="Menu") {
            $sqlBurger = 'SELECT libelle FROM  burger where idBurger="'.$row['idBurger'].'"';
            echo $sqlBurger;
            $sqlBoisson = 'SELECT libelle FROM  boisson where idBoisson="'.$row['idBoisson'].'"';
             echo $sqlBoisson;
             $sqlFrite = 'SELECT libelle FROM  frite where idFrite="'.$row['idFrite'].'"';
             echo $sqlFrite;

             $itemBurger= $dbh->query($sqlBurger)->fetch();
             $itemBoisson= $dbh->query($sqlBoisson)->fetch();
             $itemFrites= $dbh->query($sqlFrite)->fetch();
             $ligne = array('id' => $id_categorie,
                      'burger' => $itemBurger['libelle'],
                      'frite' => $itemFrites['libelle'],
                       'boisson' => $itemBoisson['libelle']);
             array_push($records, $ligne);

          }
          else{

                $sqlcat = 'SELECT libelle FROM  '.$id_categorie.' where id'.$id_categorie.'="'.$row[$id2_categorie].'"';


                $item= $dbh->query($sqlcat)->fetch();

                $ligne = array('id' => $id_categorie,
                               'nom' => $item['libelle'],
                               'quantite' => $row['quantite']
                               );
                array_push($records, $ligne);
               }
          }
          print json_encode($records);
  ?>

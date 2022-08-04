<?php // Traitement du formulaire
// Affiche le contenu d'une variable
function pr($array) 
{
  echo '<pre>';
  echo '</pre>';
}


// $_POST = array();
pr($_POST);

$prenom = '';
$nom = '';
$email = '';
$message = '';

// Si on a des valeurs de champs à traiter
if(isset($_POST) && count($_POST)){
  $prenom = $_POST['PRENOM'];
  $nom = $_POST['NOM'];
  $email = $_POST['EMAIL'];
  $message = $_POST['MESSAGE'];

  // CHANGE THE TWO LINES BELOW
  $email_to = "louislabatut1@gmail.com";
     
  $email_subject = "Contact depuis le portfolio";
}
?>

<!-- déclaration de l'usage de la norme HTML5 -->
<!DOCTYPE html>
<!-- déclaration de la langue du document à l'usage des lecteurs pour a11i -->
<html lang="fr">

<head>
  <!-- déclaration de l'usage de l'encodage utf-8 -->
  <meta charset="utf-8" />

  <!-- déclaration de l'intention pour le RWD de s'adapter au dispositif, à partir du niveau de zoom 1:1, sans réduction du contenu à la largeur du dispositif -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <!-- titre du document, utilisé pour les résultats de recherche et pour l'onglet du naviguateur -->
  <title>Louis Labatut</title>

  <!-- description courte (< 160 chars) du contenus du document pour les moteurs de recherches et le réf. -->
  <meta name="description" content="" />

  <!-- reboot CSS by Bootstrap  -->
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap-reboot.min.css" />

  <!-- font Google  -->
  <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Vollkorn&display=swap" rel="stylesheet" />

  <!-- feuille de CSS personnalisée -->
  <link rel="stylesheet" href="./assets/style.css" />
  <link rel="stylesheet" href="./assets/styles.css" />
</head>

<body class="contact">



  <!-- NAVIGATION  -->
  <!-- MENU MOBILE  -->
  <div class="menu-open">
    <div class="barre-mobile">
      <div class="logo_mobile"><a href="./index.html"><img src="./assets/img/louis_labatut_logotype.png"
            alt="Louis LABATUT" /></a></div>
      <div class="burger-button" class="boutton">
        <img src="./assets/svg/burger.svg" alt="icone menu burger" width="80px">
      </div>
      <div class="burger-close" class="boutton" style="display: none;">
        <img src="./assets/svg/cross.svg" alt="icone menu burger" width="80px">
      </div>
    </div>
    <div class="mobile-navmenu">
      <nav>
        <ul>
          <li><a href="./index.html" class="boutton">travaux</a></li>
          <li><a href="./a_propos.html" class="boutton">à propos</a></li>
          <li><div class="boutton__clicked">contact</div></li>
          <li><a href="#" class="boutton">recherche</a></li>
        </ul>
      </nav>
    </div>
  </div>
  <!-- MENU DESKTOP  -->
  <header>
    <figure class="brand">
      <a href="./index.html" class="boutton"><img src="./assets/img/louis_labatut_logotype.png"
          alt="Louis LABATUT" /></a>
    </figure>
    <nav>
      <ul>
        <li><a href="./index.html" class="boutton">travaux</a></li>
        <li><a href="./a_propos.html" class="boutton">à propos</a></li>
        <li><div class="boutton__clicked">contact</div></li>
        <li><a href="#" class="boutton">recherche</a></li>
      </ul>
    </nav>
  </header>
  <!-- / NAVIGATION  -->



  <!-- CONTENUS PRINCIPAL -->
  <main>
    <div class="main-header">

      <div class="grid-contact">
        <!-- composant "window" -->
        <div class="window">
          <div class="window__body window__body--title">
            <h1>me contacter</h1>
          </div>
        </div>
        <!-- /composant "window" -->


        <!-- composant "window" -->
        <div class="window">
          <div class="window__header">
            <h2 class="window__title">formulaire.doc</h2>
            <div class="window__toogle">X</div>
          </div>
          <div class="window__body">

            <form action="./contact.php" method="POST">
              <!-- Récupération du fichier php -->
              <div class="grid-form">
                <!-- grille du formulaire -->

                <div class="champ">
                  <label for="prenom">prénom</label>
                  <input type="text" id="prenom" name="PRENOM" value="<?= $prenom ?>" placeholder="prénom" />
                </div>

                <div class="champ">
                  <label for="nom">nom</label>
                  <input type="text" id="nom" name="NOM" value="<?= $nom ?>" placeholder="nom">
                </div>

                <div class="champ">
                  <label for="email">adresse e-mail</label>
                  <input type="email" id="email" name="EMAIL" value="<?= $email ?>" placeholder="adresse e-mail">
                </div>

                <div class="champ">
                  <label for="message">message</label>
                  <textarea placeholder="entrez votre message ..." id="message" name="MESSAGE" row="1"
                    col="1"><?= $message ?></textarea>
                </div>


              </div> <!-- fin grille du formulaire -->

          </div> <!-- fermeture window body -->
        </div> <!-- fermeture "window" -->
        <div><button type="submit" class="boutton button--solo">Envoyer</button></div>
        </form>


      </div>
    </div>

  </main>
  <!-- / CONTENUS PRINCIPAL -->

  <!-- PIED DE PAGE  -->
  <footer>
    <nav>
      <ul>
        <li><a class="boutton" href="./mentions_legales.html">mentions légales</a></li>
      </ul>
    </nav>
  </footer>
  <!-- / PIED DE PAGE  -->

  <script src="./main.js"></script>
</body>

</html>
// CSS selector
if (typeof (mediumZoom) != "undefined") {
    mediumZoom('.zoom', {
        margin: 0,
        scrollOffset: 200,
        background: 'rgba(25, 18, 25, .9)',
    })
}

// Ouvrir menu burger
document.getElementsByClassName("burger-button")[0].addEventListener("click", function () {
    document.getElementsByClassName("mobile-navmenu")[0].style.display = "block"
    document.getElementsByClassName("burger-button")[0].style.display = "none"
    document.getElementsByClassName("burger-close")[0].style.display = "flex"
})


// Fermer le menu burger
document.getElementsByClassName("burger-close")[0].addEventListener("click", function () {
    document.getElementsByClassName("mobile-navmenu")[0].style.display = "none"
    document.getElementsByClassName("burger-button")[0].style.display = "flex"
    document.getElementsByClassName("burger-close")[0].style.display = "none"
})

// Fade
window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});




//loader w3schools
/*
var myVar;



function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

if (!sessionStorage.isVisited) {
    sessionStorage.isVisited = 'true'
    $("#chargement-background").delay(3000).fadeOut("slow")
    document.getElementById("myDiv").style.display = "contents";
} else {
    $("#chargement-background").hide()
}

function showPage() {
    $('#chargement-background').delay(700).fadeOut("slow", function () {
        document.getElementById("myDiv").style.display = "contents";
        window.dispatchEvent(new Event('resize'));
    })

}


if (!sessionStorage.isVisited) {
    sessionStorage.isVisited = 'true'
  
    $('#chargement-background').show().delay(200).fadeOut('slow')
    $('html, body').css({ 'overflow': 'hidden' 
                        })
    setTimeout(function() {
      $('html, body').css({ 'overflow': 'auto' })
    }, 2100);
  }
*/
//$("chargement-background").css("display","contents")
//document.getElementById("myDiv").style.display = "contents";
//document.getElementById("chargement-background").style.display = "none";

// permet la fermeture des fen??tres
const closeHandlers = Array.from(document.querySelectorAll("[data-close]"));

closeHandlers.map(handle =>
  handle.addEventListener("click", function() {
    setCloseOn(getParent(this, "window"));
  })
);

/**
 * cherche de mani??re r??cursive le parent appell?? par sa class CSS
 * @param {HTMLElement} el l'??l??ment enfant
 * @param {String} classCssSelector la class du parent ?? chercher
 * @return {HTMLElement} le parent
 */
function getParent(el, classCssSelector) {
  if (el.classList.contains(classCssSelector)) return el;
  return getParent(el.parentNode, classCssSelector);
}

/**
 * Applique une class de fermeture sur l'??l??ment
 * @param {HTMLElement} el un ??l??ment HTML
 * @return l'??l??ment avec sa class
 */
function setCloseOn(el) {
  return el.classList.add("is-close");
}

// Permet la r??ouverture des fen??tres
const openWindows = Array.from(document.querySelectorAll("[data-open]"));

openWindows.map(handle =>
  handle.addEventListener("click", function() {
    const windows = Array.from(
      document.querySelectorAll(`[data-id="${this.dataset.open}"]`)
    );
    windows.map(window => setOpenOn(window));
  })
);

/**
 * Retire la class de fermeture sur l'??l??ment demand??
 * @param {HTMLElement} el un ??l??ment HTML
 * @return {HTMLElement} un ??l??ment HTML
 */
function setOpenOn(el) {
  return el.classList.remove("is-close");
}
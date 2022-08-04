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

// permet la fermeture des fenêtres
const closeHandlers = Array.from(document.querySelectorAll("[data-close]"));

closeHandlers.map(handle =>
  handle.addEventListener("click", function() {
    setCloseOn(getParent(this, "window"));
  })
);

/**
 * cherche de manière récursive le parent appellé par sa class CSS
 * @param {HTMLElement} el l'élément enfant
 * @param {String} classCssSelector la class du parent à chercher
 * @return {HTMLElement} le parent
 */
function getParent(el, classCssSelector) {
  if (el.classList.contains(classCssSelector)) return el;
  return getParent(el.parentNode, classCssSelector);
}

/**
 * Applique une class de fermeture sur l'élément
 * @param {HTMLElement} el un élément HTML
 * @return l'élément avec sa class
 */
function setCloseOn(el) {
  return el.classList.add("is-close");
}

// Permet la réouverture des fenêtres
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
 * Retire la class de fermeture sur l'élément demandé
 * @param {HTMLElement} el un élément HTML
 * @return {HTMLElement} un élément HTML
 */
function setOpenOn(el) {
  return el.classList.remove("is-close");
}
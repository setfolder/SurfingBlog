function menuON() {
    document.getElementById("fullMenu").classList.add("switchON");
}

function menuOFF() {
    document.getElementById("fullMenu").classList.remove("switchON");
}

function menuCateg() {
    document.getElementById("categOpened").classList.toggle("switchON");
    document.getElementById("metaOpened").classList.remove("switchON");
}

function menuMeta() {
    document.getElementById("metaOpened").classList.toggle("switchON");
    document.getElementById("categOpened").classList.remove("switchON");
}

var pageX = document.getElementById('pageX');
var burgerMenuX = document.getElementById('burgerMenuX');
var sideNavX = document.getElementById('sideNavX');
var convasNavX = document.getElementById('convasNavX');

function closeNavX() {
    sideNavX.style.width = "0px";
    pageX.style.marginLeft = "0px";
    burgerMenuX.classList.toggle('closeX');
    convasNavX.style.width = "0px";
}

function toggleNav(thisX) {
    thisX.classList.toggle('closeX');
    sideNavX.style.width = (sideNavX.style.width == "250px" ? "0px" : "250px");
    pageX.style.marginLeft = (pageX.style.marginLeft == "250px" ? "0px" : "250px");
    convasNavX.style.width = (convasNavX.style.width == "100%" ? "0px" : "100%");
}

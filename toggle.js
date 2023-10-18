const navigation = document.querySelector(".navigation");

const toggleMenu = document.querySelector(".toggle");


toggleMenu.onclick = function() {
    navigation.classList.toggle("active");
}
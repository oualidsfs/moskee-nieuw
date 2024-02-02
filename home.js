document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelectorAll('.hamburger');
    var menuBar = document.querySelector('.menu-bar');

    hamburger.forEach(function(hamburgerItem) {
        hamburgerItem.addEventListener('click', function() {
            menuBar.classList.toggle('active');
        });
    });

    document.querySelector('.bar').addEventListener('click', function() {
        document.querySelector('.menu-bar').classList.toggle('active');
    });

    var dropdown = document.querySelector('.dropdown-menu');
    dropdown.addEventListener('click', function() {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });

}); // This is the correct closing for the 'DOMContentLoaded' event listener

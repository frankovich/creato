;
(function () {
    'use strict';

    var imgs = document.querySelectorAll('.ba-works__filters img');
    var list = document.querySelectorAll('.ba-works__list li a');

    list.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(e);
            AllPhoto();
            if (e.target.innerText !== 'All') {
                imgs.forEach(element => {
                    if (element.getAttribute('category').indexOf(e.target.innerText) > -1) {
                        element.style.setProperty('display', 'none');
                    }
                });
            }
        });
    });

    function AllPhoto() {
        imgs.forEach(element => {
            element.style.setProperty('display', 'block');
        });
    }

    function filter(filter) {
        imgs.forEach(element => {
            if (element.getAttribute('category').indexOf(filter) > -1) {
                element.style.setProperty('display', 'none');
            }
        });
    };

})();
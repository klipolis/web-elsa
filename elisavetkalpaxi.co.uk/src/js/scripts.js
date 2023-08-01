//
// Scripts
// 


// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/carousel.js";
// import "../../node_modules/bootstrap/js/dist/util.js";



// DOMContentLoaded
window.addEventListener('DOMContentLoaded', event => {

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '.gallery a.thumbnail'
    });

});

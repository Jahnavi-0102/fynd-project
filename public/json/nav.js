const toggler = document.querySelector( '.main-menu-toggler' );

toggler.addEventListener( 'click', function() {
    const mainMenuLinks = document.querySelectorAll( '.menu-list' );

    for( let i = 0; i < mainMenuLinks.length; i++ ) {
        mainMenuLinks[i].classList.toggle( 'd-sm-none' );
    }
} );
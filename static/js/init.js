var slideIndex = 0;

document.addEventListener('DOMContentLoaded', function() {

    //Nav dropdown init
    let navDropdown = document.querySelectorAll('.nav-dropdown-trigger')
    M.Dropdown.init(navDropdown, {
        hover: true,
        coverTrigger: false
    });

    //sidenav init
    let mobile = document.querySelectorAll('.sidenav')
    M.Sidenav.init(mobile, {

    })

    //material box init
    let materialBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialBox, {

    })

    //collapsible init
    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible, {
        inDuration: 1000,
        accordion: false
    });

    //modal init
    let modal = document.querySelectorAll('.modal')
    M.Modal.init(modal, {

    })

    //Search dropdown init
    let dropdown = document.querySelectorAll('.year-dropdown-trigger')
    M.Dropdown.init(dropdown, {
        hover: false,
        coverTrigger: false
    });
})
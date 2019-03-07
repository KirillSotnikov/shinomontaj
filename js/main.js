const pageId = $('main').attr('id');

switch (pageId) {
    case 'garantyPage': {
        headerDropdown();
        break;
    }
    case 'blogPage': {
        headerDropdown();
        break;
    }
    case 'shinPage': {
        headerDropdown();
    }
    case 'postPage': {
        headerDropdown();
    }
    case 'basketPage': {
        headerDropdown();
    }
    case 'contactsPage': {
        headerDropdown();
    }
}


function headerDropdown(){
    $('.header_container_upper_box_arrow').on('click', function(){
        $('.header_container_upper_box_dropdown').toggleClass('active');
    });
    $('.header_container_lowew_box_arrow').on('click', function(){
        $('.header_container_lower_box .drowdown').toggleClass('active');
    })
}
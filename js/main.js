const pageId = $('main').attr('id');

switch (pageId) {
    case 'garantyPage': {
        headerDropdown();
        menuFunc();
        break;
    }
    case 'blogPage': {
        headerDropdown();
        menuFunc();
        break;
    }
    case 'shinPage': {
        headerDropdown();
        menuFunc();
    }
    case 'postPage': {
        headerDropdown();
        menuFunc();
    }
    case 'basketPage': {
        headerDropdown();
        menuFunc();
    }
    case 'contactsPage': {
        headerDropdown();
        menuFunc();
    }
    case 'openCatalogPage': {
        headerDropdown();
        addBasket();
        menuFunc();
    }
    case 'catalogPage': {
        headerDropdown();
        addBasket();
        slideFilter();
        menuFunc();
    }
    case 'mainPage': {
        initMainSlider();
        mainPageTabulation();
        headerDropdown();
        menuFunc();
    }
}

function menuFunc(){
    $('.header_container_lower_menu').click(function(){
        $('.menu-container').addClass('active');
    });
    $('.menu_closer').click(function(){
        $('.menu-container').removeClass('active');
    });
}

function initMainSlider(){
    $('.section_container .slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots: true,
        prevArrow: '<div class="arrow left"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65686 0.928931L0.292893 7.29289ZM21 7L1 7L1 9L21 9L21 7Z" fill="white"/></svg> </div>',
        nextArrow: '<div class="arrow right"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65686 0.928931L0.292893 7.29289ZM21 7L1 7L1 9L21 9L21 7Z" fill="white"/></svg> </div>',
    });
}

function mainPageTabulation(){
    $('[data-tabul]').on('click', function(){
        let target = $(this).attr('data-tabul');

        $('.section_container_box_tabul_item').removeClass('active');
        $(this).addClass('active');
        $('.section_container_box_dropdown').hide();
        $('.section_container_box_dropdown' + target).show();
    });
}

function headerDropdown(){
    $('.header_container_upper_box_arrow').on('click', function(){
        $('.header_container_upper_box_dropdown').toggleClass('active');
    });
    $('.header_container_lowew_box_arrow').on('click', function(){
        $('.header_container_lower_box .drowdown').toggleClass('active');
    })
}

function addBasket(){
    $('.good_container_item_addbasket').on('click', function(){
        $(this).html('Перейти в корзину');
    });
}

function slideFilter(){
    $('[data-down]').click(function(){
        let target = $(this).attr('data-down');
        $(this).siblings('.catalog_container_left-bar_head').removeClass('active');
        $(this).toggleClass('active');
        $('.catalog_container_left-bar_box' + target).siblings('.catalog_container_left-bar_box').slideUp('300');
        $('.catalog_container_left-bar_box' + target).slideToggle('300');
    });
    $('[data-subdown]').click(function(){
        let target = $(this).attr('data-subdown');
        $(this).siblings('.box_point').removeClass('active');
        $(this).toggleClass('active');
        $('.box_filter' + target).siblings('.box_filter').slideUp('300');
        $('.box_filter' + target).slideToggle('300');
    }); 



    // filter

    $('[data-filter]').on('click', function(){
        let target = $(this).attr('data-filter');
       $('.box_filter_item').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('active')){
            $(this).find('.custom-control-input').attr('checked', true)
        } else{
            $(this).find('.custom-control-input').attr('checked', '')
        }

        // console.log(filterArr.get(0));
        

    });
}
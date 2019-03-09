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
    case 'openCatalogPage': {
        headerDropdown();
        addBasket();
    }
    case 'catalogPage': {
        headerDropdown();
        addBasket();
        slideFilter();
    }
    case 'mainPage': {
        initMainSlider();
        mainPageTabulation();
        headerDropdown();
    }
}

function initMainSlider(){
    $('.section_container .slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots: true,
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
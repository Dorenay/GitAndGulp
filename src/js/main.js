function SMMToggleChoice(){
    $('.choise-controller').click(function(){
        $('.choise-bar__body').toggleClass('right');
    });
}

function SMMTabs(){
    
    $('div[data-tab]:not(current-tab)').click(function(){
        var currentTab = $('ul[data-tab].current-tab');
        var currentButton = $('div[data-tab].current-tab');
        var target = $(this).attr('data-tab');
        currentButton.removeClass('current-tab');
        $(this).addClass('current-tab');
        currentTab.removeClass('current-tab');
        $('ul[data-tab=' + target +']').addClass('current-tab');       
    });

    $(document).scroll(function(e){
        var currentPos = $(window).scrollTop();
        var blockTop = $('.section-smm--3__body__tabs-body').offset().top;
        var blockBottom = blockTop + $('.section-smm--3__body__tabs-body').height() - 300;
        console.log(currentPos, blockTop, blockBottom);
        if (currentPos > blockTop && currentPos < blockBottom){
            $('.section-smm--3__body__tabs-titles').addClass('fixed');
        }
        else{
            $('.section-smm--3__body__tabs-titles').removeClass('fixed');
        }
    });
}
function showPoputWithTariffPlan(){
    $('.section-smm--3__tab>li .package-submit').click(function(){
        var package = $(this).parents('.section-smm--3__body__tabs-body').siblings('.section-smm--3__body__tabs-titles')
        .find('.tab-title.current-tab').find('h3').text(),
            plan = $(this).parents('.section-smm--3__tab li').find('h3').text();
        $('.popap_smm form').after(
            '<div class="tariff-plan">Вы выбрали услугу: <span>'+  package + '</span> тариф: <span>' +  plan +'</span></div>'); dropPopup();
    });
}
function dropPopup(){
    $('.popap_smm').fadeIn(500);
}
function showPopupSMM(){
    function hidePopup(){
        $('.popap_smm').fadeOut(500);
        $('.popap_smm').find('.tariff-plan').remove();
    }
    $('.section-smm--1__body__form-block__wrapper button').on('click', dropPopup);
    $('.section-smm--6 .body-block button').on('click', dropPopup);
    $('.section-smm--7__item--button button').on('click', dropPopup);
    $('.popap_smm .button_popap').on('click', hidePopup);

}
function SMMCaseSlider(){
    $('.section-smm--5 .button-block').on('click', 'button', function(){
        var currentButton = $('.button-block button.current-tab');
        currentButton.removeClass('current-tab');
        $(this).addClass('current-tab');
        var chosenCase = $(this).attr('data-case');
        var currentCase = $('.smm-slider>div.current-tab');
        currentCase.removeClass('current-tab');
        $('.smm-slider>div[data-case="' + chosenCase + '"]').addClass('current-tab');
    });
}

$(document).ready(function(){
    SMMToggleChoice();
    SMMTabs();
    showPopupSMM();
    showPoputWithTariffPlan();
    SMMCaseSlider();
});
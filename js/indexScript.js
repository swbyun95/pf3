$(function(){    
    let sct=null;
    let winHeight=$("#intro").height();
    let profileOffset=$("#profile").offset().top;
    let statusOffset=$("#status").offset().top;
    let portfolioOffset=$("#portfolio").offset().top;
    let sectionOffset=[winHeight,profileOffset,statusOffset,portfolioOffset];
    let changeGnb=null;
//intro
    $(".btn_start").click(function(){
        $("html, body").animate({"scrollTop":profileOffset},500);
    });
//gnb
    $(".gnb>div>a").click(function(){
        $(this).addClass("gnb_active");
        $(this).parent().siblings().children("a").removeClass("gnb_active");
        changeGnb=$(this).parent().index()+1;
        $("html, body").animate({"scrollTop":sectionOffset[changeGnb]},500);
    });


//profile
//status

//portfolio
    $(".tab_menu>a").click(function(){
        return false;
    });

//tab_function
    $(".tab_menu>a").click(function(){
        $(this).addClass("tab_open");
        $(this).siblings().removeClass("tab_open");
        let count=$(this).index();
        $(".tab_contents>div").removeClass("tab_open");
        $(".tab_contents>div").eq(count).addClass("tab_open");
    }); 

    $(window).scroll(function(){
        sct=$(window).scrollTop();
        if(sct>=winHeight){
            $("#gnb_wrap").addClass("on sec1");
        }else{
            $("#gnb_wrap").removeClass("on sec3");
        };
        if(sct>=portfolioOffset){
            $("#gnb_wrap").removeClass("sec1");
            $("#gnb_wrap").addClass("sec3")
        }else if(sct>=winHeight && sct<portfolioOffset){
            $("#gnb_wrap").removeClass("sec3");
        };

        $(".gnb>div>a").removeClass("on");
        if(sct>=profileOffset && sct<statusOffset){
            $(".gnb>div").eq(0).children().addClass("on");
        }else if(sct>=statusOffset && sct<portfolioOffset){
            $(".gnb>div").eq(1).children().addClass("on");
        }else if(sct>=portfolioOffset){
            $(".gnb>div").eq(2).children().addClass("on");
        }
    });

    $(window).resize(function(){
        winHeight=$("#intro").height();
        profileOffset=$("#profile").offset().top;
        statusOffset=$("#status").offset().top;
        portfolioOffset=$("#portfolio").offset().top;
        sectionOffset=[winHeight,profileOffset,statusOffset,portfolioOffset];
    });

    let chagneText1=null;
    let chagneText2=null;
    let chagneText3=null;
    let chagnePdf=null;
    let changeSrc=null;
    let chagneBg=null;
    $(".tab_inside a").click(function(){
        $('.prot_modal').fadeIn();
        chagneText1=$(this).parent().next().find("h4").text();
        chagneText2=$(this).parent().next().find("strong").text();
        chagneText3=$(this).parent().next().find("p").text();
        chagnePdf=$(this).attr("data-src");
        changeSrc=$(this).attr("data-consrc");
        chagneBg=$(this).attr("data-bg");
        $(".prot_modal").find("h4").text(chagneText1);
        $(".prot_modal").find("strong").text(chagneText2);
        $(".prot_modal").find("p").text(chagneText3);
        $(".btn_download_pdf").attr("href",chagnePdf);
        $('.prot_modal').css({"background-color":chagneBg});
        if($(this).attr("title")=="video_project"){
            $(".detail_modal_content>img").hide()
            $(".detail_modal_content>video>source").show();
            $(".detail_modal_content>video>source").attr("src",changeSrc);
        }else{
            $(".detail_modal_content>video>source").hide();
            $(".detail_modal_content>img").show();
            $(".detail_modal_content>img").attr("src",changeSrc);
        }        
        event.preventDefault()
    })

    $(".btn_back").click(function(){
        $(".prot_modal").fadeOut();
    })
});//END
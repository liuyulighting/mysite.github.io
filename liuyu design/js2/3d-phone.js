$(function(){
    //判断1个到五个，个数不同定位不同；最终5个或者五个以上定位统一；
    var sum_li=$(".show_s_ui>li").length;//轮播图的数量
    $(".show_s_ui>li:nth-child(1)").attr("id","middel_shows");
    $(".show_s_ui>li:nth-child(2)").attr("id","right_shows");
    if(sum_li<=3){
        $(".show_s_ui>li:nth-child(3)").attr("id","left_shows");
    }else if(sum_li>=4){
        $(".show_s_ui>li:nth-child(3)").attr("id","small_right");
    }
    if(sum_li==4){
        $(".show_s_ui>li:last-child").attr("id","left_shows");
    }
    if(sum_li>=5){
        $(".show_s_ui>li:nth-last-child(2)").attr("id","small_left");
    }
    if(sum_li>=5){
        $(".show_s_ui>li:last-child").attr("id","left_shows");
    }
    //判断是否换行，如果换行则向前对其；此功能（使用弹性布局）不支持ie9及一下,ie9以下采用流式布局
    var mg_top=parseFloat($(".nav_banners>li").css("margin-top"));
    var mg_bottom=parseFloat($(".nav_banners>li").css("margin-bottom"));
    var li_padd_t=parseFloat($(".nav_banners>li").css("padding-top"));
    var li_padd_b=parseFloat($(".nav_banners>li").css("padding-bottom"));
    var li_heights=parseFloat($(".nav_banners>li").height());
    var sum_ul_height=mg_top+mg_bottom+li_padd_t+li_padd_b+li_heights+10;
    var ul_heights=$(".nav_banners").height();
    if(ul_heights>sum_ul_height){
        $(".pre_banner_3d").height($(".contrves").height()+$(".banner_tree").height());
        $(".nav_banners").css("-webkit-box-pack","start").css("-ms-flex-pack","start").css("justify-content","flex-start");
    }
    var middel_width=$("#middel_shows").width();//中间显示得宽
    var middel_hright=$("#middel_shows").height();//中间显示得高
    var slet_width=$("#right_shows").width();//两边显示得宽
    var slet_height=$("#right_shows").height();//两边显示得高
    var cster_width=$("#small_right").width();//最外层宽度
    var cster_height=$("#small_right").height();//最外层高度
    var pos_left_1=$("#middel_shows").css("left");//中间left偏移量
    var pos_left_2=$("#right_shows").css("left");//右边left偏移量
    var pos_left_3=$("#small_right").css("left");//最右边left偏移量
    var pos_left_4=$("#left_shows").css("left");//左边left偏移量
    var pos_left_5=$("#small_left").css("left");//最左边left偏移量
    var counts=1,lerts,rierts,fourts,five;
    //如果轮播项目大于5时对用的项目的下表的变量；
    if(sum_li>=5){
        lerts=counts+1;
        rierts=sum_li-2;
        fourts=sum_li-1;
        five=sum_li;
    }
    //====================================================
    var secend=150;//动画延迟时间                      
    if($(window).width()<521){secend=300}
    var scentimer=4000;//定时器间隔时间
    var timers=setInterval(auto_play_tree,scentimer);
    var ares=counts+1,ares2=counts;
    if(sum_li==4){ares=counts+2}
    if(sum_li>=5){ares=sum_li-1}
    //====================================================
    function dis_bloc(){
        $($(".show_s_ui>li")[counts]).css("display","block");
        $($(".show_s_ui>li")[lerts]).css("display","block");
        $($(".show_s_ui>li")[rierts]).css("display","block");
        $($(".show_s_ui>li")[fourts]).css("display","block");
        $($(".show_s_ui>li")[five]).css("display","block");
    }
    //左点击控件开始=========================================
    function left_btn(){
        $(this).off("click");
        if(sum_li==2){
            ares=counts;
            if(counts>=2){counts=0;}else if(counts<0){counts=sum_li-1}
            lerts=counts+1;
            if(lerts>=2){lerts=lerts-sum_li;}else if(lerts<0){lerts=sum_li-1}
            animating(counts,middel_width,middel_hright,pos_left_1,"1");//1
            animating(lerts,slet_width,slet_height,pos_left_2,"0.6");//0
        }
        if(sum_li==3){
            if(counts<0){counts=sum_li-1;}else if(counts>=sum_li){counts=0;}
            lerts=counts+1;
            rierts=counts+2;
            if(lerts>=3){lerts=lerts-sum_li;}
            if(rierts>=3){rierts=rierts-sum_li;} animating(counts,slet_width,slet_height,pos_left_4,"0.6");//1
            animating(lerts,middel_width,middel_hright,pos_left_1,"1");//2
            animating(rierts,slet_width,slet_height,pos_left_2,"0.6");//0
        } 
        if(sum_li==4){
            if(counts<0){counts=sum_li-1;}else if(counts>=sum_li){counts=0}
            lerts=counts+1;
            rierts=counts+2;
            fourts=counts+3;
            if(lerts>=4){lerts=lerts-sum_li;}
            if(rierts>=4){rierts=rierts-sum_li;}
            if(fourts>=4){fourts=fourts-sum_li;}
            animating(counts,slet_width,slet_height,pos_left_3,"0");//1
            animating(lerts,slet_width,slet_height,pos_left_4,"0.6");//2
            animating(rierts,middel_width,middel_hright,pos_left_1,"1");//3
            animating(fourts,slet_width,slet_height,pos_left_2,"0.6");//0
        }
        if(sum_li>=5){
            if(counts>=sum_li){counts=0;}else if(counts<0){counts=sum_li-1;}
            if(lerts>=sum_li){lerts=0;}else if(lerts<0){lerts=sum_li-1;}
            if(rierts>=sum_li){rierts=0;}else if(rierts<0){rierts=sum_li-1;}
            if(fourts>=sum_li){fourts=0;}else if(fourts<0){fourts=sum_li-1;}
            if(five>=sum_li){five=0;}else if(five<0){five=sum_li-1;}
            dis_bloc()
            animating(counts,cster_width,cster_height,pos_left_3,"0");//1
            animating(lerts,cster_width,cster_height,pos_left_5,"0");//2
            animating(rierts,slet_width,slet_height,pos_left_4,"0.6");//倒数第二个
            animating(fourts,middel_width,middel_hright,pos_left_1,"1");//倒数第一个
            animating(five,slet_width,slet_height,pos_left_2,"0.6");//0
            lerts--;
            rierts--;
            fourts--;
            five--;
        }
        if(ares>=sum_li){ares=0}else if(ares<0){ares=sum_li-1}
        $($(".nav_banners>li")[ares]).addClass("blue_nav").siblings().removeClass("blue_nav");
        counts--;
        ares--;
        ares2--;
        if(ares2>=sum_li){ares2=0}else if(ares2<0){ares2=sum_li-1}
        setTimeout(function(){
            $(".left_btn").on("click",left_btn);
        },secend);
    }
    $(".left_btn").on("click",left_btn);
    //左点击控件结束=========================================
    //右点击控件开始==========================================
    function right_btn(){
        $(this).off("click");
        auto_play_tree();
        setTimeout(function(){
            $(".right_btn").on("click",right_btn);      
        },secend);
    }
    $(".right_btn").on("click",right_btn);
    //右点击空间结束=======================================
    $(".color_font").mouseenter(function(){
        //鼠标移入控件清除定时器
        clearInterval(timers);
    }).mouseleave(function(){
        //鼠标移出控件启动定时器
        timers=setInterval(auto_play_tree,scentimer);
    });
    //动画函数开始========================================
    function animating(number,width,height,lefts,opacitting){
        $($(".show_s_ui>li")[number]).animate({
            width:width+"px",
            height:height+"px",
            left:lefts,
            opacity:opacitting,
        },secend);
    }
    //动画函数结束=========================================
    //轮播导航条显示=======================================
    $(".nav_banners>li").click(function(){
        clearInterval(timers);
        counts=$(this).index();
        ares=counts-2;
        ares2=counts;
    //    if(sum_li<5){
            
    //    }
        if(sum_li>=5){
            $(".show_s_ui>li").css("display","none");
            lerts=counts+1;
            rierts=sum_li-2+counts;
            if(rierts<=sum_li){rierts-=1}else if(rierts>sum_li)(rierts=rierts-sum_li-1)
            fourts=sum_li-1+counts;
            if(fourts<=sum_li){fourts-=1}else if(fourts>sum_li)(fourts=fourts-sum_li-1)
            five=sum_li+counts;
            if(five<=sum_li){five-=1}else if(five>sum_li)(five=five-sum_li-1)
        }
        auto_play_tree();
        
        timers=setInterval(auto_play_tree,scentimer)
    })
    //轮播到航条结束=======================================
    //轮播函数开始=========================================
    function auto_play_tree(){
        if(sum_li==2){
            if(counts>=2){counts=0;}else if(counts<0){counts=sum_li-1}
            lerts=counts+1;
            if(lerts>=2){lerts=lerts-sum_li;}else if(lerts<0){lerts=sum_li-1}
            animating(counts,middel_width,middel_hright,pos_left_1,"1");//1
            animating(lerts,slet_width,slet_height,pos_left_2,"0.6");//0
        }
        if(sum_li==3){
            if(counts>=3){counts=0;}else if(counts<0){counts=sum_li-1;}
            lerts=counts+1;
            rierts=counts+2;
            if(lerts>=3){lerts=lerts-sum_li;}
            if(rierts>=3){rierts=rierts-sum_li;}
            animating(counts,middel_width,middel_hright,pos_left_1,"1");//1
            animating(lerts,slet_width,slet_height,pos_left_2,"0.6");//2
            animating(rierts,slet_width,slet_height,pos_left_4,"0.6");//0
        } 
        if(sum_li==4){
            if(counts>=4){counts=0;}else if(counts<0){counts=sum_li-1;}
            lerts=counts+1;
            rierts=counts+2;
            fourts=counts+3;
            if(lerts>=4){lerts=lerts-sum_li;}
            if(rierts>=4){rierts=rierts-sum_li;}
            if(fourts>=4){fourts=fourts-sum_li;}
            animating(counts,middel_width,middel_hright,pos_left_1,"1");//1
            animating(lerts,slet_width,slet_height,pos_left_2,"0.6");//2
            animating(rierts,slet_width,slet_height,pos_left_3,"0");//3
            animating(fourts,slet_width,slet_height,pos_left_4,"0.6");//0
        }
        if(sum_li>=5){
            if(counts>=sum_li){counts=0;}else if(counts<0){counts=sum_li-1;}
            if(lerts>=sum_li){lerts=0;}else if(lerts<0){lerts=sum_li-1;}
            if(rierts>=sum_li){rierts=0;}else if(rierts<0){rierts=sum_li-1;}
            if(fourts>=sum_li){fourts=0;}else if(fourts<0){fourts=sum_li-1;}
            if(five>=sum_li){five=0;}else if(five<0){five=sum_li-1;}
            dis_bloc();
            animating(counts,middel_width,middel_hright,pos_left_1,"1");//1
            animating(lerts,slet_width,slet_height,pos_left_2,"0.6");//2
            animating(rierts,cster_width,cster_height,pos_left_3,"0");//倒数第二个
            animating(fourts,cster_width,cster_height,pos_left_5,"0");//倒数第一个
            animating(five,slet_width,slet_height,pos_left_4,"0.6");//0
            lerts++;
            rierts++;
            fourts++;
            five++;
        }
        if(ares2>=sum_li){ares2=0}else if(ares2<0){ares2=sum_li-1}
        $($(".nav_banners>li")[ares2]).addClass("blue_nav").siblings().removeClass("blue_nav");
        counts++;
        ares++;
        ares2++;
        if(ares>=sum_li){ares=0}else if(ares<0){ares=sum_li-1}
    }
    //轮播函数结束=========================================================
    //如果就一张则停止定时器；清除所有控件事件
    if(sum_li<2){
        clearInterval(timers);
        $(".nav_banners>li").off();
        $(".color_font").off();
    }
    //移入到轮播项目上停止定时器，隐藏介绍（div）显示，移出启动定时器；
    $(".show_s_ui>li").mouseenter(function(){
        clearInterval(timers);
        $(this).children("div").css("display","block");
    }).mouseleave(function(){
        $(this).children("div").css("display","none");
        timers=setInterval(auto_play_tree,scentimer);
    });
});
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "body.html"
            })
            .when("/findStore", {
                templateUrl: "menu/findStore.html"
            })
            .when("/favourite", {
                templateUrl: "menu/favourite.html"
            })
            .when("/login", {
                templateUrl: "menu/login.html"
            })
            .when("/shoppingCard", {
                templateUrl: "menu/shoppingCart.html"
            })
            .when("/register", {
                templateUrl: "menu/register.html"
            })
            .when("/iora1", {
                templateUrl: "nav/iORA_1.html"
            })
            .when("/iora2", {
                templateUrl: "IORA/iORA_2.html"
            })
            .when("/iora5", {
                templateUrl: "IORA/iORA_Bottoms.html"
            })
            .when("/iora6", {
                templateUrl: "IORA/iORA_KnitAndSweaters.html"
            })
            .when("/iora7", {
                templateUrl: "IORA/iORA_NewArrival.html"
            })
            .when("/iora8", {
                templateUrl: "IORA/iORA_Skirts.html"
            })
            .when("/iora9", {
                templateUrl: "IORA/iORA_Tops.html"
            })
            .when("/bundledeal1", {
                templateUrl: "bundledeal/bundledeal1.html"
            })
            .when("/bundledeal2", {
                templateUrl: "bundledeal/bundledeal2.html"
            })
            .when("/bags1", {
                templateUrl: "accessories/Bags_.html"
            })
            .when("/lalu1", {
                templateUrl: "nav/LALU_1.html"
            })
            .when("/lalu2", {
                templateUrl: "lalu/LALU_2.html"
            })
            .when("/lalubottom", {
                templateUrl: "lalu/laluBottoms.html"
            })
            .when("/lalunewarri", {
                templateUrl: "lalu/laluNewArrivals.html"
            })
            .when("/laluskirts", {
                templateUrl: "lalu/laluSkirts.html"
            })
           
            .when("/shoe1", {
                templateUrl: "accessories/Shoes_.html"
            })
            .when("/cookies", {
                templateUrl: "footer/cookies-policy.html"
            })
            .when("/privacy", {
                templateUrl: "footer/privacy-policy.html"
            })
            .when("/terms", {
                templateUrl: "footer/terms-of-service.html"
            })
            .when("/Accessories", {
                templateUrl: "nav/Accessories_.html"
            })
            .when("/onlineexclusive", {
                templateUrl: "nav/onlineexclusive.html"
            })
            .when("/sale", {
                templateUrl: "nav/sale.html"
            })
            .when("/AboutUs", {
                templateUrl: "footer/nav/AboutUs.html"
            })
            .when("/campaigns", {
                templateUrl: "footer/nav/campaigns.html"
            })
            .when("/ContactUs", {
                templateUrl: "footer/nav/ContactUs.html"
            })
            .when("/methods-cost", {
                templateUrl: "footer/nav/methods-cost.html"
            })
            .when("/returns-exchange", {
                templateUrl: "footer/nav/returns-exchange.html"
            })
            .when("/Blog_1", {
                templateUrl: "blog/Blog_1.html"
            })
            .when("/Blog_2", {
                templateUrl: "blog/Blog_2.html"
            })
            .when("/A-Line Flare Hem", {
                templateUrl: "IORA/Product/A-Line Flare Hem/A-Line Flare Hem.html"
            })
            .when("/Asymmetrical Flap Top", {
                templateUrl: "IORA/Product/Asymmetrical Flap Top/Asymmetrical Flap Top.html"
            })
            .when("/Basic Mayar Top", {
                templateUrl: "IORA/Product/Basic Mayar Top/Basic Mayar Top.html"
            })
            .when("/Basic PU Skorts", {
                templateUrl: "IORA/Product/Basic PU Skorts/Basic PU Skorts.html"
            })
            .when("/Centre Scrunched Knit Blouse", {
                templateUrl: "IORA/Product/Centre Scrunched Knit Blouse/Centre Scrunched Knit Blouse.html"
            })
            .when("/Crew Sweater", {
                templateUrl: "IORA/Product/Crew Sweater/Crew Sweater.html"
            })
            .when("/Criss-Cross Knit Top", {
                templateUrl: "IORA/Product/Criss-Cross Knit Top/Criss-Cross Knit Top.html"
            })
            .when("/Flare Bottom Pants", {
                templateUrl: "IORA/Product/Flare Bottom Pants/Flare Bottom Pants.html"
            })
            .when("/Highneck Knit Tank Top", {
                templateUrl: "IORA/Product/Highneck Knit Tank Top/Highneck Knit Tank Top.html"
            })
            .when("/Knotted Blouse", {
                templateUrl: "IORA/Product/Knotted Blouse/Knotted Blouse.html"
            })
            .when("/Mandarin Asymmetrical Hem Blouse", {
                templateUrl: "IORA/Product/Mandarin Asymmetrical Hem Blouse/Mandarin Asymmetrical Hem Blouse.html"
            })
            .when("/Midi A-Line Skirt", {
                templateUrl: "IORA/Product/Midi A-Line Skirt/Midi A-Line Skirt.html"
            })
            .when("/Off-Shoulder Knit Top", {
                templateUrl: "IORA/Product/Off-Shoulder Knit Top/Off-Shoulder Knit Top.html"
            })
            .when("/Overlapped Kimono Top", {
                templateUrl: "IORA/Product/Overlapped Kimono Top/Overlapped Kimono Top.html"
            })
            .when("/Panelled Colour Blouse", {
                templateUrl: "IORA/Product/Panelled Colour Blouse/Panelled Colour Blouse.html"
            })
            .when("/Polka Dot Jumpsuit", {
                templateUrl: "IORA/Product/Polka Dot Jumpsuit/Polka Dot Jumpsuit.html"
            })
            .when("/Puffy Polka Dot Top", {
                templateUrl: "IORA/Product/Puffy Polka Dot Top/Puffy Polka Dot Top.html"
            })
            .when("/Raglan Stripes Knit", {
                templateUrl: "IORA/Product/Raglan Stripes Knit/Raglan Stripes Knit.html"
            })
            .when("/Sleveless Tunic Top", {
                templateUrl: "IORA/Product/Sleveless Tunic Top/Sleveless Tunic Top.html"
            })
            .when("/Straight-Cut Jumpsuit", {
                templateUrl: "IORA/Product/Straight-Cut Jumpsuit/Straight-Cut Jumpsuit.html"
            })
            .when("/Stripes Magyar Top", {
                templateUrl: "IORA/Product/Stripes Magyar Top/Stripes Magyar Top.html"
            })
            .when("/Twist Polka Dot Top", {
                templateUrl: "IORA/Product/Twist Polka Dot Top/Twist Polka Dot Top.html"
            })
            .when("/Twisted Puffy Knit Top", {
                templateUrl: "IORA/Product/Twisted Puffy Knit Top/Twisted Puffy Knit Top.html"
            })
            .when("/Zippers Tapered Pants", {
                templateUrl: "IORA/Product/Zippers Tapered Pants/Zippers Tapered Pants.html"
            })
            .when("/careers", {
                templateUrl: "careers.html"
            })
            .when("/sizeguide", {
                templateUrl: "sizeguide.html"
            })
            .when("/lalu/Contrasting Knit Top", {
                templateUrl: "lalu/productLalu/ari0/Contrasting Knit Top/Contrasting Knit Top.html"
            })
    })
 
    var offset = 300;
    // thời gian di trượt 0.75s ( 1000 = 1s )
    var duration = 150;
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset)
                $('#top-up').fadeIn(duration);
            else
                $('#top-up').fadeOut(duration);
        });
        $('#top-up').click(function() {
            $('body,html').animate({ scrollTop: 0 }, duration);
        });
    });
    $(function() {

    $('a').click(function() {
        $('body,html').animate({ scrollTop: 0 }, duration);
    });
});
// Attach click event to .dropdown-btn
$(".dropdown-btn").click(function() {
    const faqAns = $(this).next(".faq-ans");
    const plusIcon = $(this).children(".faq-plus");
    const minusIcon = $(this).children(".faq-minus");


    faqAns.toggleClass("hide");
    plusIcon.toggleClass("hide");
    minusIcon.toggleClass("hide");



    $(".faq-ans").not(faqAns).addClass("hide");
    $(".faq-plus").not(plusIcon).removeClass("hide");
    $(".faq-minus").not(minusIcon).addClass("hide");

});
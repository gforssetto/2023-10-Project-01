$('article').eq(0).addClass("selected");
$('article').click((e)=>{
    $('article').removeClass("selected");
    $(e.target).addClass("selected");
})
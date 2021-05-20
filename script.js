$(".innerback").hover(function() {
    let item3 = `<div class='newdiv' style="position: absolute;">play</div>`;
   
    $(this).append(item3);
    $(this).mousemove(function(event){
        $(".newdiv").animate({
            position: 'absolute',
            left: `${event.screenX+10}`,
            top: `${event.screenY-60}`
        }, 0)
        
    }
        );
}, function() {
    $(".newdiv").remove();
});



$('.navbar-toggle').click(function(){
    $('.all').css('display','none');
    $('.header').css('display','block');
    $('.exit').click(function(){
        $('.all').css('display','block');
        $('.header').css('display','none');
    })
})


// 메인페이지 자바스크립트



// const btn = document.getElementById('button');
        
// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_s ervice';
//    const templateID = 'template_iwnudb8';

//    emailjs.sendForm( service_vy0n21l, template_iwnudb8, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });






jQuery(document).ready(function(){
    $(".menu>li").mouseover(function(){
        if($(this).children(".submenu").length > 0) {
            $(this).children(".submenu").stop().slideDown(100);
        }
        });

    $(".menu>li").mouseleave(function(){
        if($(this).children(".submenu").stop().slideUp());
        
        });




});







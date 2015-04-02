window.onload = mylinks;
//функция перечисляет значения ссылок в блоке менютоп
//asdfasdfasd
function mylinks() {
    var linkcount = $('.menutop a').length;//кол-во ссылок в блоке меню топ

    var jquerobj;
    var strreq; //селектор ссылки
    var i = 0;
    //var index;
    //var arrOfLinks = [];
    for (i; i < linkcount; i++) {

        strreq ='.menutop a:eq(' + i + ')';
        jquerobj = $(strreq);



       // alert('Начало бинда '+strreq);

       $(strreq).bind('mouseover', function () {
            $(this).css('background', '#f2d141')
        });
        $(strreq).bind('mouseout', function () {
            $(this).css('background', '')
        });


    }//закрыли for
}//закрыли всю функцию onload


window.onload = mylinks;
//функция перечисляет значения ссылок в блоке менютоп
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
        //alert('Конец бинда, шаг - '+i);


        //---------------------------------------------------------так работает
       

       /* $(strreq).bind('mouseover', function () {
            $(strreq).css('background', '#f2d141')

        });
        alert ('четное: '+ strreq);
        $(strreq).bind('mouseout', function () {
            $(strreq).css('background', '')
        });*/
        /*if (i % 2 == 0 ) {
            $(strreq).bind('mouseover', function () {
                $(strreq).css('background', '#f2d141')

            });
            alert ('четное: '+ strreq);
            $(strreq).bind('mouseout', function () {
                $(strreq).css('background', '')
            });
        }
        else {
            $(strreq).bind('mouseover', function () {

                $(strreq).css('background', 'green')
            });
            alert ('neчетное: '+ strreq);
            $(strreq).bind('mouseout', function () {
                $(strreq).css('background', '')
            });
        }*/

    }//закрыли for
}//закрыли всю функцию onload
/*
 $('.menutop a:eq(0)').bind('mouseover', function () {
            $('.menutop a:eq(0)').css('background', '#f2d141')
        });
        $('.menutop a:eq(0)').bind('mouseout', function () {
            $('.menutop a:eq(0)').css('background', '')
        });
        $('.menutop a:eq(1)').bind('mouseover', function () {
            $('.menutop a:eq(1)').css('background', '#f2d141')
        });
        $('.menutop a:eq(1)').bind('mouseout', function () {
            $('.menutop a:eq(1)').css('background', '')
        });
        $('.menutop a:eq(2)').bind('mouseover', function () {
            $('.menutop a:eq(2)').css('background', '#f2d141')
        });
        $('.menutop a:eq(2)').bind('mouseout', function () {
            $('.menutop a:eq(2)').css('background', '')
        });
        $('.menutop a:eq(3)').bind('mouseover', function () {
            $('.menutop a:eq(3)').css('background', '#f2d141')
        });
        $('.menutop a:eq(3)').bind('mouseout', function () {
            $('.menutop a:eq(3)').css('background', '')
        });
        $('.menutop a:eq(4)').bind('mouseover', function () {
            $('.menutop a:eq(4)').css('background', '#f2d141')
        });
        $('.menutop a:eq(4)').bind('mouseout', function () {
            $('.menutop a:eq(4)').css('background', '')
        });
*/
/*strreq = '.menutop a:eq(' + i + ')';
 jquerobj = $(strreq);
 arrOfLinks[i]=jquerobj.attr('href'); //- массив содержащий значения ссылок топменю
 //Биндим ссылки на подсветку
 index = arrOfLinks.indexOf(jquerobj.attr('href'));
 //alert('selector: ' + strreq + 'index: '+ index);*/

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';

$(function(){
    var $text=$(".sle");
    selectShow();

    $('.sle').change(function(){
        selectShow();
    });
    function selectShow(){
        if($text.val()=="1"){
            $(".people-message1").show();
            $(".people-message2").hide();
        }
        else if($text.val()=="2"){
            $(".people-message").show();
        }
        else{
            $(".people-message").hide();
        }
    }

    //提交
    $('.btn01').click(function(){
        //验证手机号码
        var phone=$('#txtPhone').val();
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if( phone=="" ){
            $(".mask").show(100).delay(3000).hide(100);
            $(".mask-school").show().find("p").html("请填写正确的号码");
            return false;
        }
        else if(phone.length!=11){
            $(".mask").show(100).delay(3000).hide(100);
            $(".mask-school").show().find("p").html("请填写正确的号码");
            return false;
        }
        else if(!myreg.test(phone)){
            $(".mask").show(100).delay(3000).hide(100);
            $(".mask-school").show().find("p").html("请填写正确的号码");
            return false;
        }
        else{
            $(".mask").hide();
            return true;
        }
    });

});



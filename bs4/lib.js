/*
js lib v1.1.20180724
+20180724 util中msg新增return  
*/

//按钮LOADING，使用$('#obj').postLoading('url',{data:data},function(data){...});
$.fn.postLoading = function (u, o, f) {
	var _this = $(this);
	_this.hide();
    _this.after('<img id="_postloading" src="data:image/gif;base64,R0lGODlhEAAQALMPAHp6evf394qKiry8vJOTk83NzYKCgubm5t7e3qysrMXFxe7u7pubm7S0tKOjo////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCAAPACwAAAAAEAAQAAAETPDJSau9NRDAgWxDYGmdZADCkQnlU7CCOA3oNgXsQG2FRhUAAoWDIU6MGeSDR0m4ghRa7JjIUXCogqQzpRxYhi2HILsOGuJxGcNuTyIAIfkECQgADwAsAAAAABAAEAAABGLwSXmMmjhLAQjSWDAYQHmAz8GVQPIESxZwggIYS0AIATYAvAdh8OIQJwRAQbJkdjAlUCA6KfU0VEmyGWgWnpNfcEAoAo6SmWtBUtCuk9gjwQKeQAeWYQAHIZICKBoKBncTEQAh+QQJCAAPACwAAAAAEAAQAAAEWvDJORejGCtQsgwDAQAGGWSHMK7jgAWq0CGj0VEDIJxPnvAU0a13eAQKrsnI81gqAZ6AUzIonA7JRwFAyAQSgCQsjCmUAIhjDEhlrQTFV+lMGLApWwUzw1jsIwAh+QQJCAAPACwAAAAAEAAQAAAETvDJSau9L4QaBgEAMWgEQh0CqALCZ0pBKhRSkYLvM7Ab/OGThoE2+QExyAdiuexhVglKwdCgqKKTGGBgBc00Np7VcVsJDpVo5ydyJt/wCAAh+QQJCAAPACwAAAAAEAAQAAAEWvDJSau9OAwCABnBtQhdCQjHlQhFWJBCOKWPLAXk8KQIkCwWBcAgMDw4Q5CkgOwohCVCYTIwdAgPolVhWSQAiN1jcLLVQrQbrBV4EcySA8l0Alo0yA8cw+9TIgAh+QQFCAAPACwAAAAAEAAQAAAEWvDJSau9WA4AyAhWMChPwXHCQRUGYARgKQBCzJxAQgXzIC2KFkc1MREoHMTAhwQ0Y5oBgkMhAAqUw8mgWGho0EcCx5DwaAUQrGXATg6zE7bwCQ2sAGZmz7dEAAA7">');
    $.post(u, o, function (data) {
		_this.show();
		f(data);
		$('#_postloading').remove();
	});
}; 

var util={
	//回车搜索,使用：util._keyEnter($('#obj'),function(){search();//自定义搜索函数、方法});
	_keyEnter:function(o,f){
		o.keyup(function (event) {
            if (event.keyCode == 13) {
                f();
            }
            if ($(this).val() == '' || $(this).val().length >3) {
				f();
            }
        });
	},
	//显示居中
	_center:function(o){  
		if(o.size()==0)return;
		o.css({'position':'absolute','top':(($(window).height()-o.height())/2)+$(window).scrollTop()+'px','left':(($(window).width()-o.outerWidth(true))/2)+'px'}); 
	},
	//遮罩
	maskOpen:function(){
		if($('._mask').size()>0)return;
		$(document.body).append('<div class="_mask" style="position:absolute;left:0px;top:0px;width:100%;z-index:998;opacity:0.3;background:#000;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>');
		$('._mask').css({'height':$(window).height()+'px'});
	},
	maskClose:function(){
		$('._mask').remove();
	},
	//提示
	msgShow:function(o){
		util.msgShowEX(o,o?'操作成功':'操作失败',1);
		return o;
	},
	msgShowEX:function(o,s,m){
		$(document.body).append('<div id="_msg" style="position:absolute;background:'+(o?'green':'#c30')+';top:'+$(window).scrollTop()+'px;left:45%;color:#fff;font-size:14px;padding:5px 8px;z-index:99999">'+s+'</div>');setTimeout("$('#_msg').remove();",m*1000); 
		return o;
	}
};

/*
    TODO 将所有JavaScript逻辑代码封装在当前JS文件中
    TODO 1. 由于HTML页面引入JS文件的位置是<head>标签中
    TODO    使用 ready() 方法 - 保证加载顺序正确
 */
$(function(){
    /*// 1. 手机京东的显示与隐藏
    $('#app_jd').mouseover(function(){
        $('#app_jd_items').show();
    }).mouseout(function(){
        $('#app_jd_items').hide();
    });
    // 2. 客户服务的显示与隐藏
    $('#service').mouseover(function(){
        $('#service_items').show();
    }).mouseout(function(){
        $('#service_items').hide();
    });
    $('#site_nav').mouseover(function(){
        $('#site_nav_items').show();
    }).mouseout(function(){
        $('#site_nav_items').hide();
    });*/

    /*showAndHide('app_jd');
    showAndHide('service');
    showAndHide('site_nav');*/

    /*$('li[name=show_hide]').mouseover(function(){
        $(this).children(':last').show();
    }).mouseout(function(){
        $(this).children(':last').hide();
    });*/

    /*
        TODO 定义专门用于显示与隐藏操作的函数
        TODO 1. 初步封装 - 变化的内容作为参数传递
        TODO    * $('#site_nav') - 绑定事件的元素
        TODO    * $('#site_nav_items') - 被操作的元素
        TODO 2. 进一步封装 - 分析两个元素的ID规律
        TODO    * 将绑定事件的元素的ID作为参数
      */
    /*function showAndHide(elemId){
        var $elem_items = $('#'+elemId+'_items');
        $('#'+elemId).mouseover(function(){
            $elem_items.show();
        }).mouseout(function(){
            $elem_items.hide();
        });
    }*/

    /*
        TODO 定义专门用于显示与隐藏操作的函数
        TODO * 参数 - 所有完成显示与隐藏效果的元素集合(数组)
     */
    var idArr = ['app_jd','service','site_nav'];
    showAndHide(idArr);

    // TODO 循环过程中，取 i 的过程中的值 0,1,2 -> 循环完毕时,i=2或3
    function showAndHide(elemArr){
        for(var i=0;i<elemArr.length;i++){
            // TODO 定义空数组
            var elemId = elemArr[i];
            $('#'+elemId).mouseover(function(event){
                var $elem = $(event.target);
                $elem.children(':last').show();
            }).mouseout(function(event){
                var $elem = $(event.target);
                $elem.children(':last').hide();
            });
        }
    }
});

function fn(){
    var arr = [];
    for(var i=0;i<3;i++){
        arr[i] = i;
    }
    return arr;
}
fn();
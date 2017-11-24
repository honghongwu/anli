$(function(){
    // TODO 显示与隐藏
    $('li[name=show_hide]').mouseover(function(){
        $(this).children(':last').show();
    }).mouseout(function(){
        $(this).children(':last').hide();
    });
    // TODO 鼠标选中任意小图片，大图片相应改变
    $('#icon_list>li>img').mouseover(function(event){
        // TODO 1. 获取当前触发mouseover事件的<img>
        var img = event.target;
        // TODO 2. 获取对应<img>的src属性值 - 图片路径
        var path = img.src;
        // http://localhost:63342/DAY27/images/products/   product-s1.jpg -> product-s1-m.jpg
        //console.log(path);
        // TODO 3. 根据当前小图片的路径，生成大图片的路径
        var newPath = path.replace(/.jpg/,'-m.jpg');
        // TODO 4. 替换当前大图片的路径
        $('#mediumImg').attr('src',newPath);
    });
    /*
        TODO 小图片手动轮播效果
        TODO * 控制向左和向右的按钮是否可用的效果
        TODO   * 不可用的效果 - forward_disabled
        TODO   * 可用的效果 - forward
      */
    // TODO 1. 分别获取向左和向右的按钮
    var $leftBtn = $('#preview>h1>a:first');
    var $rightBtn = $('#preview>h1>a:last');
    // TODO 2. 默认开启向右的按钮
    $rightBtn.attr('class','forward');
    // TODO 3. 获取到作为所有图片的容器元素<ul>
    var $ul = $('#icon_list');
    var $lis = $ul.children('li');// 所有<li>
    var $div = $ul.parent('div');
    // TODO 4. 用于移动计算的相关值
    var imgWidth = parseInt($lis.first().css('width'));// 每张图片的宽度
    var sum = $lis.length - parseInt($div.css('width'))/imgWidth;// 隐藏图片的个数
    var iRight = sum;// 表示向右按钮的可用次数
    var iLeft = 0;// 表示向左按钮的可用次数
    // TODO 5. 为向右和向左的按钮绑定click事件
    $rightBtn.click(function(){
        iRight--;
        iLeft++;
        var left = parseInt($ul.css('left'));
        $ul.css('left',(left - imgWidth)+'px');
        if(iLeft > 0){
            $leftBtn.attr('class','backward');
        }
        // TODO 判断是否为最后一张 - 1.不可点击；2.回到第一张
        if(iRight == 0){
            $(this).attr('class','forward_disabled');
        }
    });
    $leftBtn.click(function(){
        iLeft--;
        iRight++;
        var left = parseInt($ul.css('left'));
        $ul.css('left',(left + imgWidth)+'px');
        if(iRight > 0){
            $rightBtn.attr('class','forward');
        }
        // TODO 判断是否为最后一张 - 1.不可点击；2.回到第一张
        if(iLeft == 0){
            $(this).attr('class','backward_disabled');
        }
    });

    // TODO 大图片的放大镜效果
    var maskWidth = parseInt($('#mask').css('width'));
    var maskHeight = parseInt($('#mask').css('height'));
    var maskTopWidth = parseInt($('#maskTop').css('width'));
    var maskTopHeight = parseInt($('#maskTop').css('height'));
    $('#maskTop').mouseover(function(event){
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        // TODO 鼠标的水平方向边界
        if(mouseX > (maskTopWidth - maskWidth/2) && mouseX < maskTopWidth){
            var left = maskTopWidth - maskWidth;
        }
        if(mouseX >= maskWidth/2 && mouseX <= (maskTopWidth - maskWidth/2)){
            var left = event.offsetX - maskWidth/2;
        }
        // TODO 鼠标的垂直方向边界
        if(mouseY > (maskTopHeight - maskHeight/2) && mouseY < maskTopHeight){
            var top = maskTopHeight - maskHeight;
        }
        if(mouseY >= maskHeight/2 && mouseY <= (maskTopHeight - maskHeight/2)){
            var top = event.offsetY - maskHeight/2;
        }

        // TODO 调整小黄块显示的位置 - 根据鼠标当前的坐标值
        $('#mask').css({
            left : left,
            top : top
        }).show();
        /*********************************************/
        $('#largeImgContainer').show();
        $('#loading').hide();
        var path = $('#mediumImg').attr('src');
        var newPath = path.replace(/-m.jpg/,'-l.jpg');
        $('#largeImg').attr('src',newPath).show();
        // TODO 1. 获取小黄块在图片区域中的水平和垂直方向的比例
        var newLeft = parseInt($('#mask').css('left'));
        var newTop =parseInt($('#mask').css('top'));

        var precentX = newLeft/maskTopWidth;
        var precentY = newTop/maskTopHeight;

        // TODO 2. 将放大镜图片的水平和垂直方向的位置，根据上面计算的比例设置
        $('#largeImg').css({
            left : 0-(precentX * 800),
            top : 0-(precentY * 800)
        })
    }).mousemove(function(event){
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        // TODO 鼠标的水平方向边界
        if(mouseX >= maskWidth/2 && mouseX <= (maskTopWidth - maskWidth/2)){
            var left = event.offsetX - maskWidth/2;
        }
        // TODO 鼠标的垂直方向边界
        if(mouseY >= maskHeight/2 && mouseY <= (maskTopHeight - maskHeight/2)){
            var top = event.offsetY - maskHeight/2;
        }

        $('#mask').css({
            left : left,
            top : top
        });
        /**************************************/
        // TODO 1. 获取小黄块在图片区域中的水平和垂直方向的比例
        var newLeft = parseInt($('#mask').css('left'));
        var newTop =parseInt($('#mask').css('top'));

        var precentX = newLeft/maskTopWidth;
        var precentY = newTop/maskTopHeight;

        // TODO 2. 将放大镜图片的水平和垂直方向的位置，根据上面计算的比例设置
        $('#largeImg').css({
            left : 0-(precentX * 800),
            top : 0-(precentY * 800)
        })
    }).mouseout(function(){
        $('#mask').hide();
    });
})
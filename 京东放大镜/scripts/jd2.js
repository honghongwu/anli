/*<p id="medimImgContainer">
     //此处是中间显示的m图片的地址，后面需要通过这个链接以及拼串得到另两个的
     的图片地址
    <img id="mediumImg" src="images/products/product-s1-m.jpg" />
    <span id="mask"></span><!--小黄块-->
    <span id="maskTop"></span><!--悬于图片/mask上方的专用于接收鼠标移动事件的一个完全透明的层-->
    <span id="largeImgContainer"><!--放大镜-->
    <!--<img id="loading" src="images/loading.gif"/>-->
    <img id="largeImg"/> <!--img没有src地址，需要现加载-->
</span>
</p>*/



//用简写的ready $(function(){})
$(function(){
    //获取小黄快的高和宽
    var maskWidth =parseInt($('#mask').css('width'));
    var maskHeight =parseInt($('#mask').css('height'));
    //
    var maskTopWidth =parseInt($('#maskTop').css('width'));
    var maskTopHeight =parseInt($('#maskTop').css('height'));
    //计算小黄快的范围
    var minLeft=0;
    var minTop=0;
    var maxLeft= maskTopWidth -maskWidth;
    var maxTop = maskTopHeight- maskHeight;
    //给小黄块上面的那个绑定mouse事件
    $('#maskTop').mouseover(function(event){
        //改成变量，做判断
        var left=event.offsetX-maskWidth/2;
        var top=event.offsetY-maskHeight/2;
        if(top<=minTop){
            top=minTop;
        }else if(top>=maxTop){
            top=maxTop;
        }
        if(left<=minLeft){
            left=minLeft;
        }else if(left>=maxLeft){
            left=maxLeft;
        }
      //显示小黄块
       $('#mask').css({
           left:left+'px',       //现前先设置给小黄块
           top:top+'px'
       }).show();
        //显示放大镜
        $('#largeImgContainer').show();
        //先得到M图片的地址，然后得到其他两个

        //截取的开始是0，结束是path.indexOf(m.jpg)   images/products/product-s1-
        //images/products/product-s1-l.jpg拼串后
        var path = $('#mediumImg').attr('src');
        var imgPath= path.substring(0,path.indexOf('m.jpg'))+'l.jpg';
        //var newPath = path.replace(/-m.jpg/,'-l.jpg');//这是另一种方法得到L图片的路径
       //得到路径后设置给L图片，就是放大镜下面那张，.attr()可以获取也可以用于设置
        $('#largeImg').attr('src',imgPath).show();

        var preLeft =left/maskTopWidth;  //计算小黄块相对图片的比例，得到比例
        var preTop =top/maskTopHeight;
        //先得到L图片的宽和高，然后通过(比例*L图片)得到L图片左边和上边距离
        var imgWidth= parseInt($('#largeImg').css('width'));
        var imgHeight= parseInt($('#largeImg').css('height'));

        var imgLeft =imgWidth*preLeft;
        var imgTop =imgHeight*preTop;
        //设置给L图片的左右距离
        $('#largeImg').css({
            left:-imgLeft+'px',
            top:-imgTop+'px'
        })
    }).mousemove(function(){
        //同上面
        var left=event.offsetX-mazzzzzzzzzzzzzzzzzzzzzzskWidth/2;
        var top=event.offsetY-maskHeight/2;
        if(top<=minTop){
            top=minTop;
        }else if(top>=maxTop){
            top=maxTop;
        }
        if(left<=minLeft){
            left=minLeft;
        }else if(left>=maxLeft){
            left=maxLeft;
        }
        //同上显示小黄快
        $('#mask').css({
            left:left+'px',
            top:top+'px'
        });
        //同上得到L图片的左右上下距离
        var preLeft =left/maskTopWidth;  //计算小黄块相对图片的比例，得到比例
        var preTop =top/maskTopHeight;
        //先得到L图片的宽和高，然后通过（比例*L图片）得到L图片左边和上边距离
        var imgWidth= parseInt($('#largeImg').css('width'));
        var imgHeight= parseInt($('#largeImg').css('height'));

        var imgLeft =imgWidth*preLeft;
        var imgTop =imgWidth*preTop;
        //设置给L图片的左右距离
        $('#largeImg').css({
            left:-imgLeft+'px',
            top:-imgTop+'px'
        })
    }).mouseout(function(){
       //隐藏小黄快
        $('#mask').hide();
        //隐藏放大镜
        $('#largeImgContainer').hide();

    })
});

window.onload=function () {
    //获取 jQ方式：var maskWidth =parseInt($('#mask').css('width'));
    var mask =document.getElementById('mask');
    var cssObj1=window.getComputedStyle(mask,null);
    var maskWidth=parseFloat(cssObj1.width);
    var maskHeight=parseFloat(cssObj1.height);
    //获取jQ方式：var maskTopWidth =parseInt($('#maskTop').css('width'));
    var maskTop =document.getElementById('maskTop');
    var cssObj2=window.getComputedStyle(maskTop,null);
    var maskTopWidth=parseFloat(cssObj2.width);
    var maskTopHeight=parseFloat(cssObj2.height);

    var largeImgContainer=document.getElementById('largeImgContainer');
    var mediumImg=document.getElementById('mediumImg');


    //小黄块的范围
    var minLeft=0;
    var minTop=0;
    var maxLeft= maskTopWidth -maskWidth;
    var maxTop = maskTopHeight- maskHeight;
    //给小黄块下面的M图绑定mouse事件
    maskTop.addEventListener('mouseover',move);
      function move(event) {
          //变量
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
          //显示小黄框
          mask.setAttribute('style','display:block');// TODO ????
          mask.style.top = top+'px';//现前先设置给小黄块左右距离
          mask.style.left=left+'px';

      }
          //显示放大镜
           largeImgContainer.setAttribute('style','display:block');//
         //通过M图片的地址找到L图片的地址
           var path =mediumImg.src;
           var imgPath= path.substring(0,path.indexOf('m.jpg'))+'l.jpg';
             mediumImg.setAttribute('style','imgPath');
             mediumImg.setAttribute('style','display:block');

          var preLeft =left/maskTopWidth;  //计算小黄块相对图片的比例，得到比例
          var preTop =top/maskTopHeight;
          //先得到L图片的宽和高，然后通过(比例*L图片)得到L图片左边和上边距离
          //获取jQ方式： var imgWidth= parseInt($('#largeImg').css('width'));
         var largeImg =document.getElementById('largeImg');
         var cssObj3=window.getComputedStyle(largeImg,null);
         var imgWidth=parseFloat(cssObj3.width);
         var imgHeight=parseFloat(cssObj3.height);

          var imgLeft =imgWidth*preLeft;
          var imgTop =imgHeight*preTop;

         largeImg.style.top = -imgTop+'px';//
         largeImg.style.left= -imgLeft+'px';
    maskTop.addEventListener('mousemove',move1);
       function move1(event) {
        //变量
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
        //显示小黄框
        mask.setAttribute('style','display:block');// TODO ????
        mask.style.top = top+'px';//现前先设置给小黄块左右距离
        mask.style.left=left+'px';

           var preLeft =left/maskTopWidth;  //计算小黄块相对图片的比例，得到比例
           var preTop =top/maskTopHeight;
           //先得到L图片的宽和高，然后通过(比例*L图片)得到L图片左边和上边距离
           //获取jQ方式： var imgWidth= parseInt($('#largeImg').css('width'));
           var largeImg =document.getElementById('largeImg');
           var cssObj3=window.getComputedStyle(largeImg,null);
           var imgWidth=parseFloat(cssObj3.width);
           var imgHeight=parseFloat(cssObj3.height);

           var imgLeft =imgWidth*preLeft;
           var imgTop =imgHeight*preTop;

           largeImg.style.top = -imgTop+'px';//
           largeImg.style.left= -imgLeft+'px';
    }

      };


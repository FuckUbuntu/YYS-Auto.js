//困28脚本，自己截图

if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}

while(true)
{
var scs = captureScreen() //大图，即屏幕截图
var img = images.read("/storage/emulated/0/Autoyys/d28.png") //括号图片地址
var p = findImage(scs, img) //判定
if (p) 
    {
        var xx = random(p.x, p.x + img.getWidth())
        var yy = random(p.y, p.y + img.getWidth())
        var slp = random(1000, 2000)
        sleep(slp)  //随机延时
        click(xx, yy)
        
    }
    
//t2


var scs = captureScreen()
var img = images.read("/storage/emulated/0/Autoyys/pts.jpg");        //图片地址
var result = images.matchTemplate(scs, img, { max: 5 });

if (result != null)
 {
    for (var i = 0; i < result.matches.length; i++) 
    {
        var pp = result.matches[i].point
        
        //var xx = random(pp.x, pp.x + img.getWidth())
        //var yy = random(pp.y, pp.y + img.getWidth())
        //var slp = random(1000, 2000)
        //sleep(slp)  //随机延时
        click(pp.x, pp.y)
        sleep (1000)
        
        
    }
} 

}

//--鼠标滑过显示分数和评价，点亮前面的星星（用循环）
//--鼠标点击固定星星和评价
//--鼠标离开显示上一次的分数

//TODO
//鼠标移出A星 
//--1.移到A-1的星，则A星变暗
//--2.移到外部，则恢复到click的num值
//done
$(document).ready(function(){
	var arr = ["1分","2分","3分","4分","5分"];
	var num = -1;
	$("li").mouseover(function(){
		var thisL = $(this).index();
		for(var i = 0;i < thisL;i++){
			$("li").eq(i).attr("class","act");
		}
		for(var i = thisL; i < 5;i++){
			$("li").eq(i).removeAttr("class","act");
		}
		$(this).attr("class","act");
	})
	$("li").mouseout(function(){
		var thisL = $(this).index();
		for(var i = thisL; i < 5;i++){
			$("li").eq(i).removeAttr("class","act");
		}
	})
	$("ul").mouseout(function(){
		console.log("aaa");
		for(var i = 0; i < num;i++){
			$("li").eq(i).attr("class","act");
		}
	})
	$("li").click(function(){
		var thisL = $(this).index();
		$("p").html(arr[thisL]);
//		alert($(this).index());
		$(this).attr("class","act");
		num = thisL+1;
		console.log(num);
	})
	console.log(num);
})
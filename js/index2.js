(function($){
     $("#nav li").on("click",function(){
     	var types=$(this).data("type");
     	var url="./tpl/"+types+".json";
     	$.ajax({
     		url:url,
     		dataType:"json",
     		success:function(result){
     			$("#box").html(result.content);
     		}
     	})
     })
	
})(jQuery);
	


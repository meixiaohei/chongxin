
$("#opmore1").on('click',function () {
    //var map = {};
    //map.pageNum = 1;
    newsTitle = $("#input").val();
    //newsList(map);
	window.location.href = './news.html?opId='+newsTitle;
});
$("#opmore2").on('click',function () {
    //var map = {};
    //map.pageNum = 1;
    newsTitle = $("#input2").val();
    //newsList(map);
	window.location.href = './news.html?opId='+newsTitle;
});


var newsId = window.location.search;
newsId = newsId.split('=');
newsId = newsId[1];
newsFn('');
$("#search").on('click',function () {
    var value = $("#input").val();
    newsFn(value);
});
function newsFn(newsTitle){
    common.get(
        "http://39.104.188.154:18080/news/news/list.do",
        {
            pageNum:1,
            pageSize:4,
            newsTitle:newsTitle
        },
        true,
        function(res){
            if(res.code==='10000'){
                console.log(res);
                var str = '';
                res.data.data.forEach(function (item,index) {
                    var url = item.newsCover;
                    str += '<div class="news-init-photo">' +
                        '<img src="'+url+'" alt="">' +
                        '<div class="news-init-video">' +
                        '<div></div>' +
                        '<div>'+item.newsTitle+'</div>' +
                        '</div>' +
                        '</div>';
                });
                str+='<div class="news-init-photo-href"><a href="../page/news.html">更多新闻</a></div>'
                $('#news_photo').html(str);
            } else{
            }
        });
}
common.get(
    "http://39.104.188.154:18080/news/news/getNews.do",
    {newsId:newsId},
    true,
    function(res){
        if(res.code==='10000'){
            var str = '';
            // var url = res.data.newsCover;
            var src = '<div class="title">'
                +'<p>'+res.data.newsTitle+'</p>'
                +'<p>'+moment(res.data.createTime).format('YYYY-MM-DD')+'</p>'
                +'</div>'
                // +'<div class="pic">'
                // // + '<img src="'+url+'" alt="">'
                // +'</div>'
                +'<div class="text">'
                +res.data.newsContext
                +'</div>';
            $("#news_init").html(src);
        } else{
        }
    });



common.get(
    "http://39.104.188.154:18080/news/photo/list.do",
    {},
    true,
    function(res){
        if(res.code==='10000'){
            var str = '';
            res.data.forEach(function (item,index) {
                if(index<3){
                    str += '<div class="news-init-photo"><img src="'+item.list[0].photoUrl+'" alt=""></div>';
                }
            });
            str += '<div class="news-init-photo-href"><a href="../page/division.html">进入相册</a></div>';
            $("#photo").html(str);
        } else{
        }
    });

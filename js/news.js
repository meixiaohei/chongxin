//合作落地页面get值
var opId = window.location.search;

opId = opId.split('=');
opId = decodeURIComponent(opId[1]);
//opId = opId[1];
//alert(opId);
if(opId==='undefined') { // 等同于 a === undefined || a === null
    newsList({pageNum:1,newsTitle:''});
}else{
	newsList({pageNum:1,newsTitle:opId});
}

$("#search").on('click',function () {
    var map = {};
    map.pageNum = 1;
    map.newsTitle = $("#input").val();
	alert(2);
    newsList(map);
});

function newsList(map){
    common.get(
		
        "http://39.104.188.154:18080/news/news/list.do",
        {
            pageNum:map.pageNum,
            pageSize:10,
            newsTitle:map.newsTitle
        },
        true,
        function(res){
            if(res.code==='10000'){
                console.log(res);
                var str = '';
                res.data.data.forEach(function (item) {
                    // var url = item.newsContext.split('<img src="');
                    // if(url[1]){
                    //     var index = url[1].indexOf('"');
                    //     url = url[1].substring(0,index);
                    // }
                    var url = item.newsCover;
                    var newsText = item.newsText;
                    var newsTextStr = '';
                    if(newsText.length>=46){
                        for (var i=0;i<newsText.length;i++){
                            if(i<46){
                                newsTextStr += newsText[i];
                            }
                        }
                        newsTextStr += '...';
                    }

                    str += '<div class="news-init-lists" onclick="locationNew('+item.newsId+')">'
                        + '<div class="news-init-img"><img src="'+url+'" alt=""></div>'
                        +'<div class="news-init-content">'
                        +' <div class="news-title">'
                        + '<img src="../img/news/61.png" alt="">'
                        + '<span>'+item.newsTitle+'</span>'
                        +'</div>'
                        +'<div class="news-init-time">'+moment(item.createTime).format('YYYY-MM-DD')+'</div>'
                        +'<div class="news-init-details">'+newsTextStr+'</div>'
                        +'<div class="link-new">更多>></div>'
                        +'</div>'
                        +'</div>'

                });
                str += '<div id="kkpager"></div>';
                $('#news_init').html(str);
                var total = res.data.total;
                var tatalPage = Math.ceil(total/10);
                pageFn(map.pageNum,tatalPage,total)
            } else{
            }
        });
}




common.get(
    "http://39.104.188.154:18080/news/photo/list.do",
    {},
    true,
    function(res){
        if(res.code==='10000'){
            var str = '';
            res.data.forEach(function (item,index) {
                if(index<4){
                    str += '<div class="news-init-photo"><a href="../page/division.html"><img src="'+item.list[0].photoUrl+'" alt=""></a></div>';
                }
            });
            str += '<div class="news-init-photo-href"><a href="../page/division.html">进入相册</a></div>';
            $("#photo").html(str);
        } else{
        }
    });


function pageFn(pageNo,totalPage,totalRecords){
    console.log(pageNo, totalPage, totalRecords);
    kkpager.generPageHtml({
        pno : pageNo,
        //总页码
        total : totalPage,
        //总数据条数
        // totalRecords : totalRecords,
        mode : 'click',//默认值是link，可选link或者click
        click : function(n){
            var map = {};
            map.pageNum = n;
            map.newsTitle = $("#input").val();
            newsList(map);
            this.selectPage(n);
            return false;
        }
    },true);
}


function locationNew(newsId){
    window.location.href = './details.html?newsId='+newsId;
}

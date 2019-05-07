var common = {};
common.get=function (url, data, async, fun) {
    $.ajax({
        type: 'GET',
        async: async,
        url: url,
        data: data,
        dataType:'jsonp',
        contentType: "application/json",
        jsonp:'callbackParam',
        error: function () {
            var result = {
                'code': '30000',
                'msg': '服务器错误'
            };
            if (typeof (fun) == 'undefined') {
                return result;
            } else {
                fun(result);
            }
        },
        success: function (result) {
            if (typeof (fun) == 'undefined') {
                return result;
            } else {
                fun(result);
            }
        },
        beforeSend: function () {},
        complete: function () {}
    });
};
function ale() {  
        //弹出一个对话框  
        alert("该赛区暂未开放！");  
}  
common.get(
    "http://39.104.188.154:18080/news/photo/list.do",
    {},
    true,
    function (res) {
        if (res.code === '10000') {
            var str = '';
            console.log(res);
            res.data.forEach(function (item, index) {
                var photo = '';
                var bigPhoto = '';
                var bigpHotoDescription = '';

                item.list.forEach(function (subItem, subIndex) {
                    if(subIndex === 0){
                        bigPhoto = subItem.photoUrl;
                        bigpHotoDescription = subItem.photoDescription;
                    }
                    photo += '<div title="' + subItem.photoDescription + '" style="background-image:url(' + subItem.photoUrl + ');background-size: cover;"></div>';
                });

                var str1 = '<div class="img-init">' +
                    '<img src="'+bigPhoto+'" alt="">' +
                    '<div class="bigpHotoDescription"> >>'+bigpHotoDescription+'</div>' +
                    '</div>';

                var str2 = '<div class="collection">' +
                    '<div class="title">' +
                    '<p>' + item.typeTitle + '</p>' +
                    '<p>' + item.typeAddr + '</p>' +
                    '</div>' +
                    '<div class="img-lists">' +
                    '<div>' +
                    photo +
                    '</div>' +
                    '</div>' +
                    '</div>';
                str += '<div class="list">' +
                    (index % 2 === 0 ? str2 : str1) +
                    (index % 2 === 0 ? str1 : str2) +
                    '</div>';
            });
            $("#photo").html(str);
            $(".img-lists>div>div").mouseover( function () {
                var data = $(this).css('background-image').split('"');
                var hotoDescription = $(this).attr('title');
                $(this).parent().parent().parent('.collection').siblings(".img-init").find('img').attr('src', data[1]);
                $(this).parent().parent().parent('.collection').siblings(".img-init").find('.bigpHotoDescription').html('>>'+hotoDescription);
            });
        } else {
        }
    });

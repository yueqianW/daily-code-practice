var page = 1; //全局变量

var numpage; //分页总数
//==================初始化========================
$(document).ready(function() {
        contentlist(page); //页面加载
    })
    //=================内容列表=======================
function contentlist(page) {
    var setlist = "";
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: '这里写入后台php程序员给你的接口',
        data: { page: page }, //这里给后台传入分页数
        success: function(json) {
            console.log('遍历数据1:', json);
            mypage = json.data.count; //这里是后台给你的列表总数
            myPagination(page, mypage); //调取分页方法，将page值和列表总数值传过去
            $.each(json.data.doctorList, function(i, item) { //循环出你需要的列表数据
                console.log('遍历数据2:', item);

                //将得到的数据显示在前台页面上
                setlist = item.content;
                $('#result').append(setlist + '<br/>');
            })
        },
        error: function() {
            alert('网络异常');
        }
    })
}

//====================翻页功能====================
function myPagination(page1, mypage) {
    var num = mypage;
    //这里做个判断，如果后台限制你每页只能显示2条数据的话，你就让总数去除以2取模，如果有余数，那就加1
    if (num % 2 == 0) {
        numpage = num / 2;
    } else {
        numpage = num / 2 + 1;
    }

    // 调取分页插件，将page值和分页总数值传过去就行了
    $("#pager").pager({ pagenumber: page1, pagecount: numpage, buttonClickCallback: PageClick });
}

// 调取分页插件
PageClick = function(pageclickednumber) {
    $("#pager").pager({ pagenumber: pageclickednumber, pagecount: numpage, buttonClickCallback: PageClick });

    //每次点击分页的时候，清空原来的数据
    contentlist(pageclickednumber);
    $('#result').html('')
}

下面是主要的了， 分页插件： jquery.pager.js(function($) {
    $.fn.pager = function(options) {
        var opts = $.extend({}, $.fn.pager.defaults, options);
        return this.each(function() {
            $(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));
            $('.pages li').mouseover(function() { document.body.style.cursor = "pointer"; }).mouseout(function() { document.body.style.cursor = "auto"; });
        });
    };

    function renderpager(pagenumber, pagecount, buttonClickCallback) {
        var $pager = $('<ul class="pages"></ul>');
        $pager.append(renderButton('首页', pagenumber, pagecount, buttonClickCallback)).append(renderButton('上一页', pagenumber, pagecount, buttonClickCallback));
        var startPoint = 1;
        var endPoint = 9;
        if (pagenumber > 4) {
            startPoint = pagenumber - 4;
            endPoint = pagenumber + 4;
        }
        if (endPoint > pagecount) {
            startPoint = pagecount - 8;
            endPoint = pagecount;
        }
        if (startPoint < 1) {
            startPoint = 1;
        }
        for (var page = startPoint; page <= endPoint; page++) {
            var currentButton = $('<li class="page-number">' + (page) + '</li>');
            page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data); });
            currentButton.appendTo($pager);
        }
        $pager.append(renderButton('下一页', pagenumber, pagecount, buttonClickCallback)).append(renderButton('尾页', pagenumber, pagecount, buttonClickCallback));
        return $pager;
    }

    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {
        var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');
        var destPage = 1;
        switch (buttonLabel) {
            case "首页":
                destPage = 1;
                break;
            case "上一页":
                destPage = pagenumber - 1;
                break;
            case "下一页":
                destPage = pagenumber + 1;
                break;
            case "尾页":
                destPage = pagecount;
                break;
        }
        if (buttonLabel == "首页" || buttonLabel == "上一页") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        } else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }
        return $Button;
    }
    $.fn.pager.defaults = {
        pagenumber: 1,
        pagecount: 1
    };

})(jQuery);

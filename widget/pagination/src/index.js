/**
 * Created by cmfsea on 2016/11/7.
 */

$(function() {
    //总长度
    var total = 10000 * 10000;
    var size = 20000;

    total = Math.min(size, total);

    var opt = {
        items_per_page: 10,
        num_display_entries: 6,
        current_page: 0,
        num_edge_entries: 1,
        link_to: "#",
        prev_text: "前5页",
        next_text: "后5页",
        prev_show_always: true,
        next_show_always: true,
        callback: pageselectCallback
    };

    $("#pag_show").yPagination(total, opt);

    /**
     * 点击分页查询
     * @param page_index 分页下标（从0开始）
     * @param jq
     * @returns {boolean}
     */
    function pageselectCallback(page_index, jq) {
        console.log(page_index, this, jq, this === jq);
        return false;
    }
});

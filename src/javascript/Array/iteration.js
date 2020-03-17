/**
 * filter, map, forEach
 */

var arr = [1,2,3,4,5,6,1]
var city = ['奥体', '龙江', '南京', '上海']

// filter 只进行判断数据大小，返回排除项，不能乘除
var filterList = arr.filter((item, index, arr) => {
    return item > 3
})

console.log('-----', filterList)

// map 可以对数据进行乘除操作，返回操作值
var mapList = arr.map(item => {
    return item > 3
})

// forEach 只迭代，不返回数据

console.log('-----',mapList)

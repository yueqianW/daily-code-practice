# 深入理解 javascript 异步

## 什么是异步

#### 本节内容概述

* JS 为何有异步？
* 异步的实现原理是什么？
* 常用的异步操作有哪些？

#### JS 为何有异步？

首先记住一句话 — **JS 是单线程的语言**，所谓 单线程 就是一根筋，对于拿到的程序，一行一行的执行，上面的执行完成，就傻傻的等着，例如：

```javascript
var i,t = Date.now();
for (i=0;i<10000000;i++){
}
console.log(Date.now() - t);
```

上面的程序花费 250ms 的时间执行完成，执行的过程中会有卡顿，其他的事就先撂一边不管了。

执行程序这样没有问题，但是对于 JS 最初使用的环境 — 浏览器客户端 — 就不一样了。因此在浏览器端运行的 js，可能会有大量的网络请求，而一个网络资源啥时候返回，这个时间是不可预估的。这种情况也要傻傻的等着，卡顿着，啥也不做，行吗？ — 肯定不行。

因此，js 对于这个场景就设计了异步 — 即，发起一个网络请求，就先不管这边了，先干其他事，网络请求啥时候返回结果，到时候再说，这样就保证了一个网页的流程运行。

#### 异步的实现原理

先看看一段比较常见的代码：

```javascript
var ajax = $.ajax({
  url:'/data/data1.json',
  success:function(){
    console.log('success');  
  }
})
```

上面代码中 $.ajax 需要传入两个参数进去，url 和 success，其中 url 是请求的路由，success 是一个函数，这个函数传递过去不会立即执行，而是等着请求成功之后才能执行。对于这种传递过去不执行，等出来结果之后在执行的函数，叫做 callback，即回调函数。

再看一段更能说明回调函数的 nodejs 代码。和上面代码基本一样，唯一的区别是：上面代码是网络请求，而下面代码是 IO 操作：

```javascript
var fs = require('fs');
fs.readFile('data1.json',(err,data)=>{
  console.log(data.toString())  
})
```

从上面两个 demo 看来，实现异步的最核心原理就是将 callback 作为参数传递给异步执行函数 ，当有结果返回之后再触发 callback 执行，就是如此简单。

#### 常用的异步操作

开发中比较常用的异步操作有：

* 网络请求：ajax，http.get
* IO 操作：readFile，readdir
* 定是函数：setTimeOut，setInterval

## 异步和 event-loop

提到异步，就必须提 event-loop。event-loop 中文翻译叫做 事件轮询，它是能体现单线程中异步操作是如何被执行的。




























# why promise

故事是在这样的：小铁去某厂面试被问到：promise 的出现是为了解决那些问题？他胸有成竹脱口而出：promise 的出现是为了提高代码的可读性，用同步的方式来写异步。然而面试官对这个回答并不满意，说：这只是一方面，并没有答到点子上。事后小铁发现自己对 promise 的理解还只是停留在表面，所以有了下面这篇 promise 知识点的总结。

小铁觉得深刻理解一个概念，大体可以从一下三个问题出发：

1. 是什么？
2. 为什么？
3. 怎么做？

那么下面我们就带着这三个问题撸一撸 promise 吧~

慢着，promise 是个抽象概念，直接去理解一个抽象概念似乎并不容易。我们先搞懂为什么，再去探索他是什么会不会更容易些？

## 为什么需要 promise

```javascript
function getUser(name){
  var spl = 'SELECT * FROM users WHERE name=?';
  var user = query(spl,name);
  if(!user)
    throw new Error('no user');
  return user;
}
```

上面这段代码存在一个问题，查库方法 query 会阻塞后续代码的执行，直至数据库返回查询结果。

接着，我们来看看下面这段代码

```javascript
function getUser(name,callback){
  var spl = 'SELECT * FROM users WHERE name=?';
  query(spl,name,function(error,user){
    if(error)
      callback(error);
    else if(!user)
      callback(new Error('no user'));
    else
      callback(null,user);
  })
}
```

query 允许将一个函数作为第三参数传入，而这里的 query 不会阻塞后续代码的执行。这个作为参数的函数就是回调函数，他会在数据库返回查询结果的时候被执行，是异步的。

但是，回调函数存在以下四个局限：

1. 在回调函数里我们不能使用关键字 throw 和 return 了

> 回调函数是异步的，所以回调函数内部通过 throw 抛出的异常无法被外部的 try catch 捕获。

2. 回调函数的执行次数得不到保证，举个例子：

   ```javascript
   function getUsers(name,callback){
     var spl = 'SELECT * FROM users WHERE name=?';
     var users = [];
     names.forEach(name =>{
       query(spl,name,function(error,user){
         if(error)
           callback(error);
         else if(!user)
           callback(new Error('no user'));
         else{
           users.push(user);
           if(users.length === name.length)
             callback(null,users);
         }
       })  
     })
   }
   ```

> 当 names 为两个无效的用户名集合，query 抛出异常时，callback 依然会被执行两次。

3. 回调函数中不能利用函数的调用栈了。由回调函数的异步性质导致
4. 回调函数易用性不高

```javascript
getUser('mjackson',function(user){
  getNewTweets(user,function(tweets){
    updateTimeline(tweets);  
  })  
})
```

> 多个异步逻辑存在先后依赖的时候，我们的代码就像喝水都长膘的胖子，稍不留神就会横向生长，这样的代码成为回调地狱，不利于阅读也不利于维护

总结一下上面说的几个问题：

1. 回调函数内部无法使用回调栈（无法使用关键字 throw 和 return）
2. 当错误发生时，回调函数的执行次数得不到保证
3. 回调函数过多难以维护，可读性差

## 什么是 promise

promise 对象是一个代理对象（代理一个值），被代理的值在 promise 对象创建时可能是未知的。它允许你为异步代码执行结果的成功和失败分别绑定相应的处理方法（resolve、reject）

这让异步方法可以像同步方法那样返回值，但并非立即返回执行的结果，因为毕竟执行的是异步代码，因此他会返回一个 promise 对象，如前所说，他是一个代理对象，代理了最终返回的值，可以在后期使用。

promise 有以下几种状态：

* pending：初始状态
* fulfilled：操作成功
* rejected：操作失败

创建一个 promise 对象，在 executor 函数体内执行异步操作：

```javascript
new Promise(
  /* executor */
  function(resolve,reject){
  /**/  
})
```

**promise.prototype.then()**

then() 方法返回一个 promise，绑定处理异步代码执行结果的函数。他最多需要两个参数：

语法：

```javascript
p.then(onFulfilled,onRejected)
```

promise.prototype.then(onFulfilled,onRejected) 方法返回一个由 onFulfilled、onRejected 方法确定的 promise

当 onFulfilled、onRejected 方法抛出一个错误，或者返回一个拒绝的 promise，then 返回一个 rejected promise。

当 onFulfilled、onRejected 方法返回一个 fulfilled promise，或者返回任何其他（或者没有动态的设置返回值），then 返回一个 fulfilled promise。

**promise.prototype.catch()**

catch() 方法返回一个 promise，只处理拒绝的情况。他的行为与调用 promise.prototype.then(undefined,onRejected)相同

语法：

```javascript
p.catch(onRejected)
```

**catch 和 onRejected 的区别**

```javascript
//A
new Promise(function(resolve,reject){
  1?resolve():reject();  
}).then(function(){
    console.log('resolve');
},function(){
    console.log('reject');
});

//B
new Promise(function(resolve,reject){
  1?resolve():reject();  
}).then(function(){
    console.log('resolve');
}).catch(function(){
    console.log('reject');
});

//C
new Promise(function(resolve,reject){
  1?resolve():reject();  
}).then(function(){
    console.log('resolve');
}).then(null,function(err){
    console.log('reject')
})
```

B 和 C 完全一样，A 和 B 有细微的区别，当第一个 onFulfilled 内抛出异常时，A 的 onRejected 并不会被执行（二者不能同时执行），而 B 的 catch 回调会被执行。

## 怎么使用 promise

现在我们来看看用 promise 怎么解决上述三个问题。

第一个问题，回调函数内部无法使用回调栈（无法使用关键字 throw 和 return）

```javascript
function getUser(name){
  var spl = 'SELECT * FROM users WHERE name=?';
  var user = query(spl,name);
  if(!user)
    throw new Error('no user');
  return user;
}

try{
    getUser('mjackson');
}catch(e){
    console.log(e)
}

//callback
function getUser(name,callback){
  var spl = 'SELECT * FROM users WHERE name=?';
  query(spl,name,function(error,user){
    if(error)
      callback(error);
    else if(!user)
      callback(new Error('no user'));
    else
      callback(null,user);
  });
};

getUser('mjackson',(error,user){
  if(error)
	return console.error(error);
  console.log(user);	
});

//promise
function getUser(name){
  var spl = 'SELECT * FROM users WHERE name=?';
  var executor = function(resolve,reject){
    query(spl,name,(error,user){
      error?reject(error):resolve(user);      
    });
  }
}

getUser('mjackson').then(function(user){
  if(!user)
    throw new Error('no user');
  return Promise.resolve(user);
}).then(console.log,console.error);
```






















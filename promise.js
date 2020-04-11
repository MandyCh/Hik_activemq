
console.log("start");
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve("hello");
//     }, 2000);
// }) // 执行完之后改变当前promise实例的状态，然后操作then函数
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve("world");
//             }, 2000);
//         });
//     })
//     .then(value => {
//         console.log(value + " world");
//     });

// promise 作为队列 ，promise生成之后可以作为一个变量传递到其他的地方
let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('the promise fulfilled');
        resolve('hello')
    }, 1000)
})

setTimeout(() => {
    promise.then((value) => {
        console.log(value + 'world')
    })
}, 3000)

// then()不返回promise

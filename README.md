# Hik_activemq

海康威视视频 Web 插件测试+JS 通过 mqtt 连接 activemq 接收数据

异步回到无法使用 try catch
无法正常检测堆栈信息

三个状态
pending

fulfilled

rejected

promise 状态发生改变就会触发 .then 里面的回调函数 then 函数返回一个 promise

```
 new Promise(
    // 执行器 executor
    function(resolve, reject) {
        // 一段耗时的操作
        resolve(); // 数据处理完成

        reject(); // 数据处理出错
    }
) // 执行完之后改变当前promise实例的状态，然后操作then函数
    .then(
        function A() {
            // resolve()--->fulfilled--->调用A函数
        },
        function B() {
            // reject()--->rejected--->调用B函数
        }
    );
```

连续多个异步回调函数 使用 promise

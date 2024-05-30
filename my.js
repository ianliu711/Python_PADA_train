
// This is a simple Node.js program that creates a HTTP server and listens on port 3232.
// 1. 先執行 node my.js
// 2. 在瀏覽器Chrome中輸入 http://localhost:3232/ 或是http://127.0.0.1:3232/ 會看到Hello Helen, this is Node.js

// Include http module, which is a built-in module in Node.js
// Require http module, which is a built-in module in Node.js
// 引入 http 模組，這是 Node.js 內建的模組
var http = require('http');

// Create a HTTP server that listens on port 3232
// 建立一個監聽 3232 port 的 HTTP 伺服器
http.createServer(
    // Define a callback function that will be called when a request is received
    // 定義一個回呼函式，當收到請求時會被呼叫
    function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/html' });  // 設定回應標頭為狀態碼 200 和內容類型為 text/html
        res.write('<h1> Hello Helen, this is Node.js </h1>');  // 將 HTML 回應寫入客戶端
        res.end('Hello world');  // 結束回應
    }).listen(3232);

// Log a message to the console
// 在控制台中記錄一條消息
console.log("HTTP Server is listening at port 3232");

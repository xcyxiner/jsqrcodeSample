# jsqrcodeSample
安卓手机，js调用系统摄像头扫码二维码并识别，推荐火狐以及谷歌浏览器(只测试了火狐)
![支持的浏览器](https://img-blog.csdn.net/20151110105736384?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)


# 参考链接
* [web/html5调用摄像头实现二维码扫描](https://blog.csdn.net/xuewufeifang/article/details/49756099)
* [JS调用安卓手机摄像头扫描二维码并用JS解析二维码](https://blog.csdn.net/qq_33768099/article/details/79743651)
* [LazarSoft/jsqrcode](https://github.com/LazarSoft/jsqrcode)
* [H5混合开发二维码扫描以及调用本地摄像头](https://www.jianshu.com/p/c952b3a5e1d2)
* [草料二维码](https://cli.im/)
* [使用Nodejs快速搭建一个的本地静态文件服务器](https://blog.csdn.net/u014291497/article/details/52975321)


# 前置条件
* 需要安装 node 

# 关于运行


```
npm install
node server.js
```

* 或者执行脚本1.sh

```
sh 1.sh
```

# 示例二维码以及扫码后的截屏见screen_shot目录


# 目录结构
```
├── 1.sh
├── README.md
├── node_modules
│   ├── connect
│   ├── debug
│   ├── depd
│   ├── destroy
│   ├── ee-first
│   ├── encodeurl
│   ├── escape-html
│   ├── etag
│   ├── finalhandler
│   ├── fresh
│   ├── http-errors
│   ├── inherits
│   ├── mime
│   ├── ms
│   ├── on-finished
│   ├── parseurl
│   ├── path
│   ├── process
│   ├── range-parser
│   ├── send
│   ├── serve-static
│   ├── setprototypeof
│   ├── statuses
│   ├── unpipe
│   ├── util
│   └── utils-merge
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   ├── js
│   └── jsqrcode
├── screen_shot
│   ├── hellokitty.png
│   └── 截图.jpeg
└── server.js
```
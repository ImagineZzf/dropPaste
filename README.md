# dropPaste
一款支持截图/图片/文件，粘贴、拖拽的jquery插件

#### 简单版，没有加入自动上传功能，只是将粘贴、拖拽后的数据进行了返回，可以在回调函数里进行自定义上传操作

### 一、引入

``` js
<script src="js/jquery.min.js"></script>
<script src="js/jquery.dragPaste.js"></script>
```

### 二、使用

```js
$('#ID').dragPaste(function(type, fileType, data) {
    console.log(type)   // paste-粘贴   drop-拖拽
    console.log(fileType)   // screenshot-截图  image-图片  file-其他文件
    console.log(data)   // 截图/图片：base64     其他文件：file
    // 自己的业务逻辑    
})
```



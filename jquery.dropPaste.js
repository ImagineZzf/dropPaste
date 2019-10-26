/**
 * 返回数据
 * type   paste-粘贴  drop-拖拽
 * fileType   文件类型 screenshot-截图  image-图片  file-其他文件
 * data   screenshot截图-base64   image/file-file
 */
;(function($) {
  $.fn.dragPaste = function(callback) {
    this.bind({
      // 粘贴事件
      paste: function(e) {
        if (e.originalEvent && e.originalEvent.clipboardData) {
          var clipboardData = e.originalEvent.clipboardData
          var reader = new FileReader()
          var file = clipboardData.files[0]
          if (clipboardData.items[0].type.indexOf('image') > -1) {
            // 如果是截图粘贴
            reader.onload = function(e) {
              callback('paste', 'screenshot', e.target.result)
            }
            reader.readAsDataURL(file) //获取base64编码
          } else if (clipboardData.types.length > 1) {
            // 如果是复制粘贴
            if (file) {
              // 复制粘贴图片
              callback('paste', 'image', file)
            } else {
              // 复制粘贴其他文件（除了图片）
              callback('paste', 'file', file)
            }
          }
        }
      },
      // 拖拽
      drop: function(e) {
        e.preventDefault() //取消默认浏览器拖拽效果
        if (e.originalEvent && e.originalEvent.dataTransfer) {
          var dataTransfer = e.originalEvent.dataTransfer
          if (dataTransfer.files.length > 0) {
            var file = dataTransfer.files[0]
            // 有拖拽的数据
            if (file.type.indexOf('image') > -1) {
              // 拖拽的是图片
              callback('drop', 'image', file)
            } else {
              // 拖拽的是其他文件
              callback('drop', 'file', file)
            }
          }
        }
      }
    })
    return this
  }
})(jQuery)

// pages/topic/topic.js
var api = require('../../utils/api.js')
Page({
    data: {
        data:{}
    },
  onLoad:function(options){
    console.log(options)
    api.fetchDetail(options.id, re => {
        this.setData({data: re.data})
        console.log(this.data.data)
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
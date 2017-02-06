// pages/topic/topic.js
var api = require('../../utils/api.js')
Page({
  data:{
    topicList: [],
    tab: 'all',
    page: 1,
    hidden: true
  },
  onLoad:function(options){
    this.fetchData()
  },
  fetchData:function(){
    var self = this
    api.fetchTopic({
      tab: this.data.tab,
      page: this.data.page
    }, (response) => {
      self.setData({
        topicList: response.data,
        hidden: true
      })
    })
  },
  switchTab:function(e){
    var tab = e.target.id
    console.log('id',e.target.id)
    if(tab !== this.data.tab) {
      this.setData({
        tab: tab,
        topicList: [],
        hidden: false,
        page: 1
      })
      this.fetchData()
    }
  },
  lower: function() {
    console.log('scroll to lower')
    this.setData({page: this.data.page+1})
    this.fetchData()
  },
  goDetail:function(e){
    console.log('go de', e.currentTarget.id)
    wx.navigateTo({
      url: '../detail/detail?id='+e.currentTarget.id
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
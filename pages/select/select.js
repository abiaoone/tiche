Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  //转发
  onShareAppMessage: function (res) {
    return {
      title: '8亿人都在做的中医体检！5分钟出结果，超级准！点开即测！ >>',
      path: '/pages/index/index',
      imageUrl: '/image/share1.png',
      success: function (res) {
        //转发成功
        wx.showToast({
          title: '转发成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '转发失败',
          icon: 'fail',
          duration: 2000
        })
      }
    }
  },
  setYangXuZhi:function(){
     wx.navigateTo({
       url:'../detail/detail_yangxuzhi/detail_yangxuzhi'
      // url: '../detail/template/template'
     })
  },
  setYinXuZhi: function () {
    wx.navigateTo({
      url: '../detail/detail_yinxuzhi/detail_yinxuzhi'
    })
  },
  setQiXuZhi: function () {
    wx.navigateTo({
      url: '../detail/detail_qixuzhi/detail_qixuzhi'
    })
  },
  setTangShiZhi: function () {
    wx.navigateTo({
      url: '../detail/detail_tanshizhi/detail_tanshizhi'
    })
  },
  setShiReZhi: function () {
    wx.navigateTo({
      url: '../detail/detail_shierzhi/detail_shierzhi'
    })
  },
  setXueYuZhi: function () {
    wx.navigateTo({
      url: '../detail/detail_xueyuzhi/detail_xueyuzhi'
    })
  },
  setTeBingZhi: function () {
    wx.navigateTo({
      url: '../detail/detail_tebingzhi/detail_tebingzhi'
    })
  },
  setQiYuZhi: function () {
    wx.navigateTo({
      url: '../detail/detail_qiyuzhi/detail_qiyuzhi'
    })
  },
  setPingHeZhi: function () {
    wx.navigateTo({
      url: '../detail/detail_pinghezhi/detail_pinghezhi'
    })
  },
})
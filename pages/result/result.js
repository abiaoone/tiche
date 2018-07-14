// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: "气郁质",
    maxIndex: 0,
    sex:'women'
  },
  onLoad: function (options) {
    var that = this;
    var result = this.data.result
    this.setData({
      maxIndex: options.maxIndex,
      sex: options.sex
    })
    console.log(options.maxIndex);
    if (options.maxIndex == 0) {
      that.setData({
        result: "阳虚质"
      })
    } else if (options.maxIndex == 1) {
      that.setData({
        result: "阴虚质"
      })
    } else if (options.maxIndex == 2) {
      that.setData({
        result: "气虚质"
      })
    } else if (options.maxIndex == 3) {
      that.setData({
        result: "痰湿质"
      })
    } else if (options.maxIndex == 4) {
      that.setData({
        result: "湿热质"
      })
    } else if (options.maxIndex == 5) {
      that.setData({
        result: "血瘀质"
      })
    } else if (options.maxIndex == 6) {
      that.setData({
        result: "特禀质"
      })
    } else if (options.maxIndex == 7) {
      that.setData({
        result: "气郁质"
      })
    } else if (options.maxIndex == 8) {
      that.setData({
        result: "平和质"
      })
    }
  },
  gotoDetail: function () {
    var that = this;
    var content = this.data.result;
    if (content == "阳虚质") {
      wx.navigateTo({
        url: '../detail/detail_yangxuzhi/detail_yangxuzhi',
      })
    } else if (content == "阴虚质") {
      wx.navigateTo({
        url: '../detail/detail_yinxuzhi/detail_yinxuzhi',
      })
    } else if (content == "气虚质") {
      wx.navigateTo({
        url: '../detail/detail_qixuzhi/detail_qixuzhi',
      })
    } else if (content == "痰湿质") {
      wx.navigateTo({
        url: '../detail/detail_tanshizhi/detail_tanshizhi',
      })
    } else if (content == "湿热质") {
      wx.navigateTo({
        url: '../detail/detail_shierzhi/detail_shierzhi',
      })
    } else if (content == "血瘀质") {
      wx.navigateTo({
        url: '../detail/detail_xueyuzhi/detail_xueyuzhi',
      })
    } else if (content == "特禀质") {
      wx.navigateTo({
        url: '../detail/detail_tebingzhi/detail_tebingzhi',
      })
    } else if (content == "气郁质") {
      wx.navigateTo({
        url: '../detail/detail_qiyuzhi/detail_qiyuzhi',
      })
    } else if (content == "平和质") {
      wx.navigateTo({
        url: '../detail/detail_pinghezhi/detail_pinghezhi',
      })
    }
  },
  testagige:function(){
    if (options.sex=='women'){
      wx.navigateTo({
        url: '../title_women/title_women',
      })
    } else if (options.sex == 'man'){
      wx.navigateTo({
        url: '../title_man/title_man',
      })
    }
  
  },
  // 转发
  onShareAppMessage: function (res) {
    return {
      title: '8亿人都在做的中医体检！5分钟出结果，超级准！点开即测！ >>',
      path: '/pages/index/index',
      imageUrl:'/image/share1.png',
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
  goBack: function () {
    wx.switchTab({
      url: '../index/index',
    })
  }
})
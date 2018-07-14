//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    defaultSize: 'default',
    plain: false,
    loading: false
  },
  //体质说明跳转
  tizhiDetail:function(){
    wx.switchTab({
      url: '../select/select'
    })
  },
  setGoToTitleBYwomen:function(e){
    console.log(e.currentTarget.dataset.value)
    wx.navigateTo({
      url: '../title_women/title_women',
    }),
      wx.request({
        url: 'http://localhost/tiche/index.php/Home/index/test',
        data: {
          'sex': e.currentTarget.dataset.value
        },
        method: 'get',
        success: function (res) {
          console.log(res)
        },
        fail: function () {
          console.log("失败了")
        }
      })
  },
  setGoToTitleBYman:function(e){
    wx.navigateTo({
      url: '../title_man/title_man',
    }),
    wx.request({
      url: 'http://localhost/tiche/index.php/Home/index/test',
      data:{
        'sex': e.currentTarget.dataset.value
      },
      method: 'get',
      success:function(res){
        console.log(res)
      },
      fail:function(){
        console.log("失败了")
      }
    })
  },
  //转发
  onShareAppMessage:function(res){
     return{
       title:'8亿人都在做的中医体检！5分钟出结果，超级准！点开即测！ >>',
       path:'/pages/index/index',
       imageUrl: '/image/share1.png',
       success:function(res){
         //转发成功
         wx.showToast({
           title: '转发成功',
           icon:'success',
           duration:2000
         })
       },
       fail:function(res){
         wx.showToast({
           title: '转发失败',
           icon: 'fail',
           duration: 2000
         })
       }
     }
  }
})

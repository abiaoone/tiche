// function show(options) {
//   showView: (options.showView == "true" ? true : false)
// }
// module.exports.show = show
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // defaultSize: 'default',
    // plain: false,
    // loading: false,
    //  name:'阳虚质',
      showView: false,
      text:'阿标'
  },
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }
})
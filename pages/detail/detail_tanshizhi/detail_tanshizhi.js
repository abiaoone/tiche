
// var content_data = require('../../templates/templates.js')
// Page({
//   /**
//    * 页面的初始数据
//    */
//   data: {
//      item:{
//        name: "阴虚质",
//        showView: false,
//        text:"阿标one"
//      },
//   },
//   onLoad: function (options) {
//     showView: (options.showView == "true" ? true : false)
//   },
//   onChangeShowState: function () {

//     var that = this;
//     that.setData({
//       showView: (!that.data.showView)
//     })
//   }
// })
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgalist: ['http://ab.lingw09.com/hsh.jpg'],
    defaultSize: 'default',
    plain: false,
    loading: false,
    name: '痰湿质',
    tizhi: false,
    yihuan: false,
    ziran: false,
    yinshi: false,
    sheshi: false,
    tiyu: false,
    yaoshang: false,
    shenghou: false,
    tishishouming: '痰湿体质是指当人体脏腑功能失调，易引起气血津液运化失调，水湿停聚，聚湿成痰而成痰湿内蕴表现，常表现为体形肥胖，腹部肥满，胸闷，痰多，容易困倦，身重不爽，喜食肥甘醇酒，舌体胖大，舌苔白腻，多因寒湿侵袭、饮食不节，先天禀赋、年老久病、缺乏运动而发病，常随痰湿留滞部位不同而出现不同的症状。',
    yihuanbingzheng: '易患消渴、中风、胸痹等。',
    ziransheying: '对梅雨及湿重环境适应力差。',
    yinshitiaoyang: '蔬菜、水果，尤其是一些具有健脾利湿、化痰祛痰的食物，白萝卜、荸荠、紫菜、海蜇、洋葱、白果、扁豆、红小豆、蚕豆、包菜等',
    shengshishiwu: '饴糖、石榴、大枣、柚子、枇杷、砂糖，肥肉及甜、黏、油腻的食物，油腻、酸涩，肥甘厚味，戒酒，且最忌暴饮暴食和进食速度过快，肥甘厚味、酒类也不宜多饮，且勿过饱，限制食盐的摄入。',
    tiyuduanlian: '应长期坚持体育锻炼、散步、慢跑、球类、武术、八段锦、五禽戏，以及各种舞蹈，均可选择。',
    yanshanjianyi: '【黄芪山药薏苡仁粥】材料：黄芪、山药、麦冬、薏苡仁、竹茹各20克，糖适量，粳米50克。制作：先将山药切成小片，与黄芪、麦冬、白术一起泡透后，再加入所有材料，加水用火煮沸后，再用小火熬成粥。',
    shenghoujianyi: '饮食清谈为主，平时多进行户外活动，多点晒太阳，坚持运动。不宜居住在潮湿的环境里；在阴雨季节，要注意湿邪的侵袭。'
  },
  onLoad: function (options) {
    tizhi: (options.tizhi == "true" ? true : false)
    yihuan: (options.yihuan == "true" ? true : false)
    ziran: (options.ziran == "true" ? true : false)
    yinshi: (options.yinshi == "true" ? true : false)
    sheshi: (options.sheshi == "true" ? true : false)
    tiyu: (options.tiyu == "true" ? true : false)
    yaoshang: (options.yaoshang == "true" ? true : false)
    shenghou: (options.shenghou == "true" ? true : false)
  },
  onChangetizhi: function () {
    var that = this;
    that.setData({
      tizhi: (!that.data.tizhi)
    })
  },
  onChangeyihuan: function () {
    var that = this;
    that.setData({
      yihuan: (!that.data.yihuan)
    })
  },
  onChangeziran: function () {
    var that = this;
    that.setData({
      ziran: (!that.data.ziran)
    })
  },
  onChangeyinshi: function () {
    var that = this;
    that.setData({
      yinshi: (!that.data.yinshi)
    })
  },
  onChangesheshi: function () {
    var that = this;
    that.setData({
      sheshi: (!that.data.sheshi)
    })
  },
  onChanegtiyu: function () {
    var that = this;
    that.setData({
      tiyu: (!that.data.tiyu)
    })
  },
  onChanegyaoshang: function () {
    var that = this;
    that.setData({
      yaoshang: (!that.data.yaoshang)
    })
  },
  onChanegshenghou: function () {
    var that = this;
    that.setData({
      shenghou: (!that.data.shenghou)
    })
  },
  onBack: function () {
    wx.switchTab({
      url: '../../index/index',
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: this.data.imgalist, // 当前显示图片的http链接     
      urls: this.data.imgalist // 需要预览的图片http链接列表     
    })
    wx.getImageInfo({// 获取图片信息（此处可不要）  
      src: 'https://tz.esk98.cn/hsh.jpg',
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  },
})
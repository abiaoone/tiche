
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
    name: '气虚质',
    tizhi: false,
    yihuan: false,
    ziran: false,
    yinshi: false,
    sheshi: false,
    tiyu: false,
    yaoshang: false,
    shenghou: false,
    tishishouming: '是指当人体脏腑功能失调，气的化生不足时，易出现气虚表现，常表现为语声低微，形体消瘦或偏胖，面色苍白，气短懒言，精神不振，体倦乏力，常自汗出，动则尤甚，舌淡红，舌边有齿痕，苔白，脉虚弱，因各种病因而发病，因心肺脾肾气虚部位不同而并见不同的症状。',
    yihuanbingzheng: '易患感冒、气虚眩晕、内脏下垂，平素抵抗力弱，妇女分娩后易患产后虚羸、产后目病等，病后康复缓慢。',
    ziransheying: '不耐受风、寒、暑、湿邪，抵抗力比较弱。',
    yinshitiaoyang: '多食用具有益气健脾作用的食物，如山药、土豆、红薯、莲子、芡实、白扁豆、大枣、香菇、鸡肉等。',
    shengshishiwu: '忌食生冷性凉、油腻厚味等耗伤脾胃的食物，如：西瓜、香瓜、水梨、香蕉、黄瓜、苦瓜、空心菜、筊白、笋、蚌类等。',
    tiyuduanlian: '宜采用低强度、多次数方式，不适合激烈、长时间的运动，以免耗伤正气。以柔和运动，如散步、打太极拳等为主；平时可按摩或艾灸足三里穴（位于小腿前外侧，外膝眼下3寸，距胫骨前沿一横指处)，能健脾益气，强身健体。',
    yanshanjianyi: '【炙黄芪粥】材料：炙黄芪30克，粳米50克。做法：先用清水煎煮炙黄芪，取汁去渣，再用药汁煮米成粥，晨起空腹食之。',
    shenghoujianyi: '只需要在日常生活中经常锻炼，注意饮食调养，身体自然而然就会变得非常的健康。千万不能够因为工作过于繁忙而缺少锻炼，日常应该经常进行一些爬山或者是游泳、散步等等，这些运动都能够很好的锻炼身体，增强体质，同时对于治疗气虚体质也是非常重要的。除此之外，饮食上也要特别的注意，少吃一些寒凉或者是味道过重的食材，而是应该科学的选择，最好能够根据不同的季节还有其后变化来选择最适合的。总而言之，气虚并不是一种重大疾病，只需要我们在日常生活中积极面对，经常锻炼、注意饮食，身体自然而然就会恢复健康了。'
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
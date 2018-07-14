
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
    name: '湿热质',
    tizhi: false,
    yihuan: false,
    ziran: false,
    yinshi: false,
    sheshi: false,
    tiyu: false,
    yaoshang: false,
    shenghou: false,
    tishishouming: '所谓湿，即通常所说的水湿，它有外湿和内湿的区分。外湿是由于气候潮湿或涉水淋雨或居室潮湿，使外来水湿入侵人体而引起；内湿是一种病理产物，常与消化功能有关。中医认为脾有“运化水湿”的功能，若体虚消化不良或暴饮暴食，吃过多油腻、甜食，脾不能正常运化而使“水湿内停”；且脾虚的人也易招来外湿的入侵，外湿也常困阻脾胃使湿从内生，所以两者是既独立又关联的。',
    yihuanbingzheng: '容易生疮长痘，使痘痘不容易痊愈，容易感皮肤、泌尿生殖、肝胆系统一类的疾病。',
    ziransheying: '对湿环境或气温偏高，尤其夏末秋初，湿热交蒸气候较难适应。',
    yinshitiaoyang: '可多选择薏苡仁、莲子、茯苓、红小豆、绿豆、冬瓜、丝瓜、苦瓜、黄瓜、绿茶、鸭肉、田螺等',
    shengshishiwu: '不宜食用羊肉、狗肉、鳝鱼、辣椒、花椒、酒、熟地、银耳、燕窝、雪蛤、阿胶、蜂蜜、麦芽糖等热性或滋补食物以及烤、炸、煎等方式。',
    tiyuduanlian: '重点在舒展筋骨关节，增加身体柔韧度。因为筋骨关节的僵硬、涩滞不利肝胆的疏泄。推荐瑜伽，五禽戏，太极拳、普拉提。',
    yanshanjianyi: '【乳鸽枸杞汤】材料：乳鸽、山药、茯苓、枸杞、桂圆、莲子、红枣、薏苡仁。做法：老火炖3个小时。',
    shenghoujianyi: '湿热质的成因和先天遗传、长期居住在比较潮湿的地方、平时喜欢吃油腻甜食，或者长年喝酒导致湿热蕴藏在体内等有关。生活压力增加，学生、商人、商业服务行业人员多见湿热体质。湿热质的人饮食上应以清淡为原则，适宜食用具有甘寒、苦寒功效的食物。避免居住在低洼潮湿的地方，保持充足而有规律的睡眠。适合做大强度、大运动量的锻炼；克制过激情绪。'
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
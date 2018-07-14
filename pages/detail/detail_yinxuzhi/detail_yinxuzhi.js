
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
    name: '阴虚质',
    tizhi: false,
    yihuan: false,
    ziran: false,
    yinshi: false,
    sheshi: false,
    tiyu: false,
    yaoshang: false,
    shenghou: false,
    tishishouming: '阴就好比生活中的水分，阴液亏少，机体失去水分的濡润滋养，就好像生火做饭时火太大、水太少一样，所以阴虚质常见表现主要分为两大类：干燥和虚热。比如口燥咽干、鼻微干、大便干燥、小便短、眩晕耳鸣、两目干涩、视物模糊、皮肤偏干、易生皱纹、舌少津少苔、脉细等；同时由于阴不制阳，阳热之气相对偏旺而生内热，故表现为一派虚火内扰的证候，可见手足心热，口渴喜冷饮，面色潮红，有烘热感，唇红，睡眠差，舌红脉数等。',
    yihuanbingzheng: '平素易患有阴亏燥热的病变，或病后易表现为阴亏症状，具有易患复发性口疮、习惯性便秘、干燥综合症等病的倾向',
    ziransheying: '平素不耐热邪，耐冬不耐夏；不耐受燥邪',
    yinshitiaoyang: '肾阴是一身阴气的根本，阴虚质者应该多食一些滋补肾阴的食物，以滋阴潜阳为法。常选择的食物如芝麻、糯米、绿豆、乌贼、龟、鳖、海参、鲍鱼、枸杞、雪蛤、螃蟹、牛奶、牡蛎、蛤蜊、海蛰、鸭肉、猪皮、豆腐、甘蔗、桃子、银耳、蔬菜、水果等。',
    shengshishiwu: '少食过分温热燥热的食物，以免耗伤人体阴液，如辣椒、大蒜、韭菜、花椒、桂皮、干姜、丁香、羊肉、狗肉等。',
    tiyuduanlian: '阴虚质由于体内精、血、津、液等阴液亏少，运动时易出现口渴干燥、面色潮红、小便少等现象，只适合做中小强度、间断性的身体练习，可选择太极拳、太极剑、八段锦、气功等动静结合的传统健身项目，也可习练“六字诀”中的“嘘”字功，以涵养肝气。锻炼时要控制出汗量，及时补充水分。阴虚质的人多消瘦，容易上火，皮肤干燥等。皮肤干燥甚者，可多选择游泳，能够滋润肌肤，减少皮肤瘙痒，但不宜桑拿。静气功锻炼对人体内分泌具有双向调节功能，促进脾胃运化，增加体液的生成，改善阴虚质。',
    yanshanjianyi: '【百合莲子饮】配方：百合20g，莲子30g，冰糖30g 制作：先将百合、莲子洗净，放锅内加适量水，用小火慢慢炖至百合、莲子烂熟，加入冰糖溶化后即可食用。每天1次，连服数天。',
    shenghoujianyi: '阴虚质者由于阳气偏亢，锻炼时要控制出汗量，及时补充水分，不宜进行剧烈运动，应避免大强度、大运动量的锻炼形式，避免在炎热的夏天或闷热的环境中运动，以免出汗过多，损伤阴液，不宜洗桑拿。'
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
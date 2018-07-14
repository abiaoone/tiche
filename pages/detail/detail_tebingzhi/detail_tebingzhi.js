
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
    name: '特禀质',
    tizhi: false,
    yihuan: false,
    ziran: false,
    yinshi: false,
    sheshi: false,
    tiyu: false,
    yaoshang: false,
    shenghou: false,
    tishishouming: '特禀体质又称特禀型生理缺陷、过敏。是指由于遗传因素和先天因素所造成的特殊状态的体质，主要包括过敏体质、遗传病体质、胎传体质等。特禀体质的人会出现打喷嚏、流清涕等症状，是因为卫气虚损不能抵御外邪所致。中医认为，“肾为先天之本”“脾为后天之本”，特禀质养生以健脾、补肾气为主，以增强卫外功能。',
    yihuanbingzheng: '哮喘、风团、咽痒、鼻塞、喷嚏等',
    ziransheying: '适应能力差，如过敏体质者对易致过敏季节适应能力差，易引发宿疾。',
    yinshitiaoyang: '当归20g，生姜30g，冲洗干净，用清水浸软，切片备用。羊肉500g剔去筋膜，放入开水锅中略烫，除去血水后捞出，切片备用。当归、生姜、羊肉放入砂锅中，加清水、料酒、食盐，旺火烧沸后撇去浮沫，再改用小火炖至羊肉熟烂即成。胡桃仁50g开水浸泡去皮，沥干备用。韭菜200g择洗干净，切成寸段备用。麻油倒入炒锅，烧至七成热时，加入胡桃仁，炸至焦黄，再加入韭菜、食盐，翻炒至熟。将牛奶150ml放入锅中加热，煮沸前即兑入鹿角胶10g，用小火缓慢加热。并用筷子不停搅拌，促使胶体烊化。等到鹿角胶完全烊化停火晾温，最后加入30ml蜂蜜，搅拌均匀。上下午分两次服用。',
    shengshishiwu: '不宜食用腥膻发物及含致敏物质的食物；亦不宜食用酒、辣椒、浓茶、咖啡等辛辣之品。被褥床单要经常洗晒，可防止对尘螨过敏；不宜养宠物，以免对动物皮毛过敏。',
    tiyuduanlian: '宜进行慢跑、散步等户外活动，也可选择下棋、瑜珈等室内活动。不宜选择大 运动量的活动，避免春天或季节交替时长时间在野外锻炼。运动时注意避风寒。',
    yanshanjianyi: '鹿茸酒 取鹿茸4.5克，白酒500毫升。将鹿茸用白酒浸泡20日以上即可服用。本药酒具有壮元阳、益精髓、补气血、强筋骨的功效。适用于精血不足、头晕眼花等肾阳虚者。口服，每次10毫升，每日两次。.雪莲酒 取雪莲花15克，白酒或黄酒200毫升。将雪莲花浸泡于酒中，7天后即可饮用。本药酒具有补肾壮阳，调经的作用。适用于阳虚者的保健，也可用于调治肾阳不足而引起的畏寒肢冷、关节冷痛、阳痿、月经不调。每次饮用10毫升，每日两次。',
    shenghoujianyi: '起居要有规律，保持充足的睡眠时间。居室宜通风良好。生活环境中接触的物 品如枕头、棉被、床垫、地毯、窗帘、衣橱易附有尘螨，可引起过敏，应经常清洗、日晒。外出也要避免处在花粉及粉刷油漆的空气中，以免刺激而诱发过敏病症。'
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
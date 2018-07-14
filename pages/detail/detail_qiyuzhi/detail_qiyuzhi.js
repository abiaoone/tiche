
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
    name: '气郁质',
    tizhi: false,
    yihuan: false,
    ziran: false,
    yinshi: false,
    sheshi: false,
    tiyu: false,
    yaoshang: false,
    shenghou: false,
    tishishouming: '气郁体质（Qi depression constitution）是由于长期情志不畅、气机郁滞而形成的以性格内向不稳定、忧郁脆弱、敏感多疑为主要表现的体质状态。处于这种体质状态者，多见于中青年，以女性多见，性格多孤僻内向，易多愁善感，气量较狭小。气郁体质者的发病以肝为主，兼及心、胃、大肠、小肠。易伤情志及饮食，易产生气机不畅，如郁病、失眠、梅核气、惊恐等，现代研究此类体质易生肿瘤。调理治疗宜调畅情志，疏通气机。',
    yihuanbingzheng: '神情抑郁，情感脆弱，烦闷不乐，舌淡红，苔薄白，脉弦。',
    ziransheying: '对精神刺激适应能力较差；不适应阴雨天气。',
    yinshitiaoyang: '当归20g，生姜30g，冲洗干净，用清水浸软，切片备用。羊肉500g剔去筋膜，放入开水锅中略烫，除去血水后捞出，切片备用。当归、生姜、羊肉放入砂锅中，加清水、料酒、食盐，旺火烧沸后撇去浮沫，再改用小火炖至羊肉熟烂即成。胡桃仁50g开水浸泡去皮，沥干备用。韭菜200g择洗干净，切成寸段备用。麻油倒入炒锅，烧至七成热时，加入胡桃仁，炸至焦黄，再加入韭菜、食盐，翻炒至熟。将牛奶150ml放入锅中加热，煮沸前即兑入鹿角胶10g，用小火缓慢加热。并用筷子不停搅拌，促使胶体烊化。等到鹿角胶完全烊化停火晾温，最后加入30ml蜂蜜，搅拌均匀。上下午分两次服用。',
    shengshishiwu: '应少食收敛酸涩之物，如乌梅、泡菜、石榴、青梅、杨梅、草莓、杨桃、酸枣、李子、柠檬等，以免阻滞气机，气滞则血凝。',
    tiyuduanlian: '宜多参加群体性体育运动项目，坚持做较大强度、较大负荷的“发泄式”锻炼，如跑步、登山、游泳。也可参与下棋、打牌等娱乐活动，分散注意力。',
    yanshanjianyi: '鹿茸酒 取鹿茸4.5克，白酒500毫升。将鹿茸用白酒浸泡20日以上即可服用。本药酒具有壮元阳、益精髓、补气血、强筋骨的功效。适用于精血不足、头晕眼花等肾阳虚者。口服，每次10毫升，每日两次。.雪莲酒 取雪莲花15克，白酒或黄酒200毫升。将雪莲花浸泡于酒中，7天后即可饮用。本药酒具有补肾壮阳，调经的作用。适用于阳虚者的保健，也可用于调治肾阳不足而引起的畏寒肢冷、关节冷痛、阳痿、月经不调。每次饮用10毫升，每日两次。',
    shenghoujianyi: '尽量增加户外活动和社交，防止一人独处时心生凄凉。居室保持安静，宜宽敞、明亮。平日保持有规律的睡眠，睡前避免饮用茶、咖啡和可可等饮料。衣着宜柔软、透气、舒适。'
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
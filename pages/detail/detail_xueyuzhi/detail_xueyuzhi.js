
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
    name: '血瘀质',
    tizhi: false,
    yihuan: false,
    ziran: false,
    yinshi: false,
    sheshi: false,
    tiyu: false,
    yaoshang: false,
    shenghou: false,
    tishishouming: '如果把人体气血比喻成交通的话，一个地方堵车了，整条马路都会出现行驶缓慢，甚至走不动。再往前走，才发现是前面出了剐蹭，堵在那里了。血瘀质的人，面色、唇色偏暗，舌下的静脉淤紫，皮肤比较粗糙，有时在不知不觉中会出现皮肤淤青。眼睛里的红丝很多，刷牙时牙龈容易出血，容易烦躁健忘，性情急躁。',
    yihuanbingzheng: '目前认为，心脑血管疾病已经成为人类的“头号杀手”，包括冠心病、动脉粥样硬化、心绞痛、心肌梗死和猝死等等。在中医的范畴就是“胸痹”、“真心痛”，其实这些都是气滞血瘀所致。所以瘀血——才是身体的隐形杀手。',
    ziransheying: '不耐受寒邪。',
    yinshitiaoyang: '当归20g，生姜30g，冲洗干净，用清水浸软，切片备用。羊肉500g剔去筋膜，放入开水锅中略烫，除去血水后捞出，切片备用。当归、生姜、羊肉放入砂锅中，加清水、料酒、食盐，旺火烧沸后撇去浮沫，再改用小火炖至羊肉熟烂即成。胡桃仁50g开水浸泡去皮，沥干备用。韭菜200g择洗干净，切成寸段备用。麻油倒入炒锅，烧至七成热时，加入胡桃仁，炸至焦黄，再加入韭菜、食盐，翻炒至熟。将牛奶150ml放入锅中加热，煮沸前即兑入鹿角胶10g，用小火缓慢加热。并用筷子不停搅拌，促使胶体烊化。等到鹿角胶完全烊化停火晾温，最后加入30ml蜂蜜，搅拌均匀。上下午分两次服用。',
    shengshishiwu: '活血化瘀，根据季节，兼质灵活使用，多吃活血，散结，补气，养阴，行气，疏肝解郁的食物。',
    tiyuduanlian: '坚持经常性锻炼，促进气血运行。 保健功、按摩、太极拳、五禽戏，散步，慢跑、乒乓球，等。淤血质的人心血管功能较弱，不宜做大强度、大负荷的运动锻炼，应采取中小负荷多次的锻炼。',
    yanshanjianyi: '鹿茸酒 取鹿茸4.5克，白酒500毫升。将鹿茸用白酒浸泡20日以上即可服用。本药酒具有壮元阳、益精髓、补气血、强筋骨的功效。适用于精血不足、头晕眼花等肾阳虚者。口服，每次10毫升，每日两次。.雪莲酒 取雪莲花15克，白酒或黄酒200毫升。将雪莲花浸泡于酒中，7天后即可饮用。本药酒具有补肾壮阳，调经的作用。适用于阳虚者的保健，也可用于调治肾阳不足而引起的畏寒肢冷、关节冷痛、阳痿、月经不调。每次饮用10毫升，每日两次。',
    shenghoujianyi: '血瘀体质者具有血行不畅的潜在倾向,血得温则行，得寒则凝。血瘀体质者起居作息有规律，不要熬夜，保证良好睡眠,居室环境要温暖舒。'
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
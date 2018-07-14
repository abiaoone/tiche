
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
      name:'阳虚质',
      tizhi: false,
      yihuan:false,
      ziran:false,
      yinshi:false,
      sheshi:false,
      tiyu:false,
      yaoshang:false,
      shenghou:false,
    tishishouming: '阳在中医里面主要是指人体温暧、体格、运动方面的功能。阳虚即人体脏腑功能活力不足，温煦功能减退，出现的恶寒喜暖证状。因此这种人平时畏寒喜热或体温偏低，耐夏不耐冬，喜食温热食物。对外界的寒湿邪气反应也很敏感，冬天容易生冻疮。当受到病邪侵袭后多也化为寒症，病程中也不容易发热或热势低，等阴盛阳虚的证状表现，因此，补阳的食物或药物都有御寒的作用，尤其入冬后食用这类药物或食物对畏寒的阳虚体质者能提高其抵抗能力。',
    yihuanbingzheng:'减退、阳痿、早泄、滑精、前列腺',
    ziransheying:'耐夏不耐冬；易感风、寒、湿邪',
    yinshitiaoyang:'当归20g，生姜30g，冲洗干净，用清水浸软，切片备用。羊肉500g剔去筋膜，放入开水锅中略烫，除去血水后捞出，切片备用。当归、生姜、羊肉放入砂锅中，加清水、料酒、食盐，旺火烧沸后撇去浮沫，再改用小火炖至羊肉熟烂即成。胡桃仁50g开水浸泡去皮，沥干备用。韭菜200g择洗干净，切成寸段备用。麻油倒入炒锅，烧至七成热时，加入胡桃仁，炸至焦黄，再加入韭菜、食盐，翻炒至熟。将牛奶150ml放入锅中加热，煮沸前即兑入鹿角胶10g，用小火缓慢加热。并用筷子不停搅拌，促使胶体烊化。等到鹿角胶完全烊化停火晾温，最后加入30ml蜂蜜，搅拌均匀。上下午分两次服用。',
    shengshishiwu:'“恣食冷饮”。冰激凌、冰汽水、冰镇啤酒，直接降低了胃的温度。寒属阴，阴盛就会伤阳。反季节吃食物也会造成阳虚。比如说冬天吃西瓜，就会耗损阳气',
    tiyuduanlian:'慢跑、快步、跳绳、跳迪斯科、打太极拳等，都会让全身各个部位活动起来，促进血液循环，但不可运动过度，高强度的运动，大量的出汗，会“发泄阳气”，起到相反的作用',
    yanshanjianyi:'鹿茸酒 取鹿茸4.5克，白酒500毫升。将鹿茸用白酒浸泡20日以上即可服用。本药酒具有壮元阳、益精髓、补气血、强筋骨的功效。适用于精血不足、头晕眼花等肾阳虚者。口服，每次10毫升，每日两次。.雪莲酒 取雪莲花15克，白酒或黄酒200毫升。将雪莲花浸泡于酒中，7天后即可饮用。本药酒具有补肾壮阳，调经的作用。适用于阳虚者的保健，也可用于调治肾阳不足而引起的畏寒肢冷、关节冷痛、阳痿、月经不调。每次饮用10毫升，每日两次。',
    shenghoujianyi:'泡脚是最有效的方法。在较深的盆中加入40度左右的热水，让水漫过脚踝。浸泡20分钟左右，就会感觉到全身发热，这说明血液循环畅通后身体开始发热。如果在泡脚的同时再揉搓双脚，效果会更好。每天至少要保证6个小时的睡眠时间，充足的睡眠有利于储藏阳气，阴精蓄积。有时间的时候可以经常揉搓手脚心，以改善末端血管的微循环状况，并具有手脚温暖的效果。'
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
  onBack:function(){
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
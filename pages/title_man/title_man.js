// pages/title/title.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ageIndex:0,
    array:['28以下','28-35','35-45','45-60','60以上'],
    defaultSize: 'default',
    maxIndex: 0,      //最大分值的种类
    yangxuzhi: 0,     //阳虚质的初始分分
    yinxuzhi: 0,     //阴虚质的初始分分
    qixuzhi: 0,      //气虚质的初始分分
    tangshizhi: 0,   //痰湿质的初始分分
    shirezhi: 0,     //湿热质的初始分分
    xuyuzhi: 0,      //血瘀质的初始分分
    tebingzhi: 0,    //特禀质的初始分分
    quyuzhi: 0,      //气郁质的初始分分
    pinghezhi: 0,    //平和质的初始分分
    plain: false,
    loading: false,
    index: 1,
    count: 40,
    titleCount: 0,
    maxTitleCount: 10,
    propress: 0,
    title: ['您手脚发凉吗？', '您胃脘部、背部或腰膝部怕冷吗？', '您感到怕冷、衣服比别人穿得多吗？', '您比别人容易患感冒吗？', '您感觉身体、脸上发热吗？', '您口唇的颜色比一般人红吗？', '您容易便秘或大便干燥吗？', '您面部两颧潮红或偏红吗？', '您感到眼睛干涩吗？', '您容易疲乏吗?', '您容易心慌吗？', '您容易头晕或站起时晕眩吗？', '您比别人容易患感冒吗？', '您喜欢安静、懒得说话吗？', '您感到胸闷或腹部胀满吗?', '您腹部肥满松软吗？', '您有额部油脂分泌多的现象吗？', '您嘴里有黏黏的感觉吗？','您活动量稍在太容易出虚汗吗？', '您容易感到害怕或受到惊吓吗？', '您胁肋部或乳房胀痛吗？', '您无缘无故叹气吗', '您咽喉部有异物感, 且吐之不出、咽之不下吗？',  '您两颧部有细微红丝吗？', '您身体上哪里疼痛吗？', '您容易忘事(健忘)吗', '您口唇颜色偏黯吗？', '您没有感冒时也会打喷嚏吗?', '您没有感冒时也会鼻塞、流鼻涕吗？', '您有因季节变化、温度变化或异味等原因而咳喘的现象吗？', '您的皮肤一抓就红，并出现抓痕吗？', '您精力充沛吗?', '您容易疲乏吗？', '您说话声音低弱无力吗？', '您容易失眠吗？', '您容易忘事 (健忘)吗？', '您面部或鼻部有油腻感或者油亮发光吗?', '您小便明尿道有发热感、尿色浓(深)吗？', '您的阴囊部位潮湿吗？(阴男性回答)']
  },
  submitForm: function (e) {
    wx.request({
      url: 'http://localhost/tiche/index.php/Home/index/test',
      data: { 
        'maxIndex': this.data.maxIndex,
        'ageIndex': this.data.ageIndex,
        'yangxuzhi': this.data.yangxuzhi,
        'yinxuzhi': this.data.yinxuzhi,
        'qixuzhi': this.data.qixuzhi,
        'tangshizhi': this.data.tangshizhi,
        'shirezhi': this.data.shirezhi,
        'xuyuzhi': this.data.xuyuzhi,
        'tebingzhi': this.data.tebingzhi,
        'quyuzhi': this.data.quyuzhi,
        'pinghezhi': this.data.pinghezhi
        },
      method:'GET',
      success:function(res){
        console.log(res.data);
      },
      fail:function(res){
        console.log("失败了");
      }
    })
  },
  //===============年龄===============================
  bindPickerChange:function(e){
    console.log(e.detail.value)
     this.setData({
       ageIndex:e.detail.value
     })
  },
  tijiao: function (e) {
    var that = this;
    var index = this.data.index + 1
    var titleCount = this.data.titleCount + 1
    var propress = this.data.propress
    if (index == 41) {
      wx.navigateTo({
        url: '../result/result?maxIndex=' + this.data.maxIndex +'&sex=man'
      })
    }
    that.setData({
      index: index,
      titleCount: titleCount,
      propress: Math.round((index/40)*100)
    })
    //===============阳虚质的分数===============================
    if (index <= 4) {
      var value = e.currentTarget.dataset.value
      var yangxuzhi = this.data.yangxuzhi + parseInt(value);
      that.setData({
        yangxuzhi: yangxuzhi
      })
      console.log(yangxuzhi);
    }
    //===============阴虚质的分数===============================
    if (index >= 5 && index < 10) {
      var value = e.currentTarget.dataset.value
      var yinxuzhi = this.data.yinxuzhi + parseInt(value);
      that.setData({
        yinxuzhi: yinxuzhi
      })
      console.log(yinxuzhi)
    }
    //===============气虚质的分数===============================
    if (index >= 10 && index < 15) {
      var value = e.currentTarget.dataset.value
      var qixuzhi = this.data.qixuzhi + parseInt(value);
      that.setData({
        qixuzhi: qixuzhi
      })
      console.log("气虚质的分数" + qixuzhi)
    }
    //===============痰湿的分数===============================
    if (index >= 15 && index < 20) {
      var value = e.currentTarget.dataset.value
      var tangshizhi = this.data.tangshizhi + parseInt(value);
      that.setData({
        tangshizhi: tangshizhi
      })
      console.log("痰湿质的分数" + tangshizhi)
    }
    //===============气郁质的分数===============================
    if (index >= 20 && index < 24) {
      var value = e.currentTarget.dataset.value
      var quyuzhi = this.data.quyuzhi + parseInt(value);
      that.setData({
        quyuzhi: quyuzhi
      })
      console.log("气郁质的分数" + quyuzhi)
    }
    //===============血瘀质的分数===============================
    if (index >= 24 && index < 28) {
      var value = e.currentTarget.dataset.value
      var xuyuzhi = this.data.xuyuzhi + parseInt(value);
      that.setData({
        xuyuzhi: xuyuzhi
      })
      console.log("血瘀质的分数" + xuyuzhi)
    }
    //===============特禀质的分数===============================
    if (index >= 28 && index < 32) {
      var value = e.currentTarget.dataset.value
      var tebingzhi = this.data.tebingzhi + parseInt(value);
      that.setData({
        tebingzhi: tebingzhi
      })
      console.log("特禀质的分数" + tebingzhi)
    }
    //===============平和质的分数===============================
    if (index >= 32 && index < 37) {
      var value = e.currentTarget.dataset.value
      if (value == 1) {
        value = 5
      } else if (value == 2) {
        value = 4
      } else if (value == 3) {
        value = 3
      } else if (value == 4) {
        value = 2
      } else if (value == 5) {
        value = 1
      }
      var pinghezhi = this.data.pinghezhi + parseInt(value);
      that.setData({
        pinghezhi: pinghezhi
      })
      console.log("平和质的分数" + pinghezhi)
    }
    //===============湿热质的分数===============================
    if (index >= 37 && index < 40) {
      var value = e.currentTarget.dataset.value
      var shirezhi = this.data.shirezhi + parseInt(value);
      that.setData({
        shirezhi: shirezhi
      })
      console.log("湿热质的分数" + shirezhi)
    }
     //===============分数比较===============================
    var arr = [this.data.yangxuzhi, this.data.yinxuzhi, this.data.qixuzhi, this.data.tangshizhi, this.data.quyuzhi,        this.data.xuyuzhi, this.data.tebingzhi, this.data.pinghezhi, this.data.shirezhi];
    console.log(arr);
    var max = arr[0];
    var maxIndex = this.data.maxIndex;
    for (var i = 0; i < 9; i++) {
      if (max < arr[i]) {
        max =arr[i]
        maxIndex = i
      }
      
    }
    that.setData({
      maxIndex: maxIndex
    })
    console.log("最大的下标为:" + maxIndex)
  }
})
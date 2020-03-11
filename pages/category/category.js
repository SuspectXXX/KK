// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    leftMenuList: [],
    //右侧的商品数据
    rightContent: [],
    //被点击的左侧的菜单的索引
    currentIndex: 0,
    //右侧滚动条距离顶部的距离
    scrollTop: 0
  },
  //接口的返回数据
  Cates: [],
  /* 获取分类数据 */
  getCates() {
    var reqTask = wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
      success: (result) => {
        this.Cates = result.data.message;
        //把接口数据存到本地存储中
        wx.setStorageSync("cates", {time:Date.now(), data:this.Cates});
        //构造左侧的大菜单数据
        let leftMenuList = this.Cates.map(v=>v.cat_name);
        this.setData({
          leftMenuList
        });
        //构造右侧的商品数据
        let rightContent = this.Cates[0].children;
        this.setData({
          rightContent
        });
      }
    });
      
  },
  //左侧菜单的点击事件
  handleItemTap(e) {
    const {index} = e.currentTarget.dataset;
    
    //构造右侧的商品数据
    let rightContent = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightContent,
      //重置scrollTop
      scrollTop: 0
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* 
    1 先判断一下本地存储中有没有旧的数据
      {time:Date.now(),data:[...]}
    2 没有旧的数据 直接发送新请求
    3 有旧的数据 同时旧的数据未过期 就适用本地存储即可
    */
    //获取本地存储
    const Cates = wx.getStorageSync("cates");
    if(!Cates) {
      //不存在 发送请求数据
      this.getCates();
    } else {
      //有旧的数据 过期时间自定义 这里是5分钟
      if(Date.now()-Cates.time>1000*50*5) {
        this.getCates();
      } else {
        //可以使用旧的数据
        this.Cates = Cates.data;
        //构造左侧的大菜单数据
        let leftMenuList = this.Cates.map(v=>v.cat_name);
        //构造右侧的商品数据
        let rightContent = this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent
        });
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
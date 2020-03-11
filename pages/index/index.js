//Page Object
Page({
  data: {
    swiperList: [],
    catesList: [],
    floorList: []
  },
  getSwiperList() {
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (result) => {
       this.setData({
         swiperList: result.data.message
       }); 
      }
    });
  },
  getCatesList() {
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
      success: (result) => {
       this.setData({
         catesList: result.data.message
       }); 
      }
    });
  },
  getFloorList() {
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
      success: (result) => {
       this.setData({
         floorList: result.data.message
       }); 
      }
    });
  },
  //options(Object)
  onLoad: function(options) {
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  
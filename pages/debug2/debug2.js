// pages/debug2/debug2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataContent: [{ tag: 'hah', singleItems:[{ title:'我送草拟吗啊'}]}],
    marker: [{
      iconPath: "/image/1.png",
      id: 0,
      latitude: 34.115632, 
      longitude: 108.932280, 
      width: 50,
      height: 50, 
      alpha: 0, 
      callout: { content: '第一教学楼', color: '#f85f48', bgColor:'#F5F5F5',display:'ALWAYS'}
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  a: function () {
    console.log('hah');
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
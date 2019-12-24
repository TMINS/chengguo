// pages/address/address.js
/**
 * 地址：订单、地址管理、添加地址
 * 将地址模块变更为本地缓存
 * 所有的Id变为本地缓存的数组
 * 缓存还未同步到页面上
 * 
 * 
 */



const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    // 默认的id地址（后台额外需要传的参数）（估计到时候是和addrList的属性一起传过来的）
    addrList: [
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 如果页面跳转的参数order，则实现新的页面来供用户选择，但不能进行修改
    console.log(options)
    if (options.type === 'order') {
      this.setData({
        show: false,
        typeId: options.type
      })
    }
     // 获取用户地址列表
    const addrList = wx.getStorageSync('address')
    this.setData({ addrList })
  },
  onShow: function () {
    // 获取用户地址列表
    const addrList = wx.getStorageSync('address')
    this.setData({ addrList })   
  },

  // 点击选择默认地址
  // 当设置其他的地址为默认地址，向后台传id值
  handleAddress(e) {
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    // 样式和本地数据
    let { addrList } = this.data
    // 先让所有的is变为FALSE，再让选中的变为true
    addrList.forEach(v => v.isdefual = false)
    addrList[index].isdefual = true; 
    const address = addrList
    wx.setStorageSync('address',address)
    this.setData({ addrList })
  },

  // 跳转到添加地址页面
  goAddAddress(e) {
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/add/add?index=' + index,
    })
  },

  // 向订单页面，反传参一个被选择的地址id
  handleOrderAdrress(e) {
    console.log(e)
    // 就算是不区分大小写的，就算属性是大写，也会转化为小写
    var index = e.currentTarget.dataset.index
    var userName = e.currentTarget.dataset.username
    var userTell = e.currentTarget.dataset.usertell
    var userAddr = e.currentTarget.dataset.useraddr
    wx.navigateTo({
      url: '/pages/order-list/index?index=' + index + '&userName=' + userName + '&userTell=' + userTell + '&userAddr=' + userAddr,
    })
  }
})
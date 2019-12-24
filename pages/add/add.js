// pages/address/add/add.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 这里有疑问
    index:"",
    show: true,
    region: ['', '', ''],
    userName: "",
    userTell: "",
    userAddr: "",
    code:'',
    isdefual: false,
    // userAddr:
    userAddr:{
      region: ['', '', ''],
      userName: "",
      userTell: "",
      userAddr: "",
      code: '',
      isdefual: false,
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index: options.index
    })
    this.getUserAddress()
  },
  // 上级页面传值，当值不等于999时，则向后台获取数据
  getUserAddress() {
    if (this.data.index === "" || this.data.index === '123456') {
      console.log("新建地址")
      return
    } else {
      console.log("在原来的地址上修改")
      // 向本地缓存里获取该符合该Id值的地址
      // 将数据渲染到页面，当用户修改时，本地缓存一并修改
      let index = this.data.index
      const addrList = wx.getStorageSync('address')
      const userAddr = addrList[index]
      this.setData({
        userAddr,
        addrList,
        // show:false,
      })
      console.log(userAddr)
    }
  },

  // 获取姓名
  handleNameChange(e) {
    let { userAddr } = this.data
    userAddr.userName = e.detail.value
    this.setData({userAddr})
  },
  // 获取电话
  handleTellChange(e) {
    let { userAddr } = this.data
    userAddr.userTell = e.detail.value
    this.setData({ userAddr })
  },
  // 下拉组件之选择省市区(分解)
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let { userAddr } = this.data
    userAddr.region = e.detail.value
    this.setData({ userAddr, show: false})
    console.log(e.detail.value)
  },
  // 获取详细地址
  handleAddrChange(e) {
    let { userAddr } = this.data
    userAddr.userAddr = e.detail.value
    this.setData({ userAddr })
  },
  // 获取邮政编码
  handleCodeChange(e){
    let { userAddr } = this.data
    userAddr.code = e.detail.value
    this.setData({ userAddr })
  },
  // 获取开关值(具有排他性，添加到数组的底部)
  switch1Change(e) {
    const { userAddr } = this.data
    userAddr.isdefual = e.detail.value
    this.setData({
      userAddr
    })
  },
  // 判断信息是否正确并上传
  checkInfo() {
    const { addrList, userAddr } = this.data
    console.log(userAddr)
    // 判断姓名
    var reg2 = new RegExp("[\u4e00-\u9fa5]{2,7}")
    if (!reg2.test(userAddr.userName)) {
      wx.showToast({
        title: '填写真实姓名',
        duration: 200
      })
      return
    }
    // 判断电话
    var reg = new RegExp("^[1]{1}[3,4,5,8]{1}[0-9]{9}$")
    if (!reg.test(userAddr.userTell)) {
      // 如果电话错误，提示，然后retrun
      wx.showToast({
        title: '填写正确的电话',
        duration: 200
      })
      return
    }
    // 判断信息是否有空
    if (userAddr.userName == "" || userAddr.userTell == "" || userAddr.userAddr == "" || userAddr.region[0] == "") {
      wx.showToast({
        title: '请填写完整的信息',
        duration: 200
      })
      return
    }
    // 要先判断这是保存还是覆盖(就是找到本地缓存的地址index重新覆盖,还是在数组的最前面添加元素)
    // 将需要传到后台的信息打包成一个对象传到本地缓存
    // 先判断本地缓存中有几个地址
    if (this.data.index === "" || this.data.index === '123456') {
      console.log("新建地址")

      return
    } else {
      console.log("在原来的地址上修改")
      // 向本地缓存里获取该符合该Id值的地址
      // 将数据渲染到页面，当用户修改时，本地缓存一并修改
      // 判断里面的默认地址是否为true
      if (userAddr.isdefual === true) {
        let index = this.data.index
        addrList.forEach(v => v.isdefual = false)
        addrList[index].isdefual = true; 
      }
      console.log(userAddr)
      console.log(addrList)
      let address = addrList
      wx.setStorageSync('address', address)
      this.setData({
        userAddr,
      })
    }












  },
  // 请求成功回调函数
  handleSubmitButtomSucc() {
    // !!!要注意请求的状态码!!ret = true请求成功!!一定要判断
    if (res.data && res.data.ret) {
      console.log(res.data)
      wx.showToast({
        title: '保存成功',
        duration: 200
      })
    }
  },
})
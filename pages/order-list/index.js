// pages/order-list/index.js
Page({

    /**
     * 页面的初始数据
     * 默认地址信息  
     * 商品信息      上一页面传递
     */
    data: {
        roomNum:1, //商品数量
        remark:String, //备注信息
        liveList:{
            userName:'流沙包',
            phone: 18613241324,
            live:'北京市  北京市  朝阳区  花园路甲220号花园路 甲25号写字楼230室  '
        },
        shopList:{
            text:"文案文案文案文案文案文案文案文案",
            newPrice:19.9,
            oldPrice:39.9
        }
    },
    //更换地址信息
    changeLive(){
         wx.navigateTo({
             url: '/pages/address/address',
         })
    },
    //数量
    changeRoom(e) {
        let that = this
        const oper = e.currentTarget.dataset.oper
        if (oper === '+') {
            that.data.roomNum++
            this.setData({
                roomNum: that.data.roomNum
            })
        } else if (oper === '-' && that.data.roomNum > 1) {
            that.data.roomNum--
            this.setData({
                roomNum: that.data.roomNum
            })
        }
    },
    //获取备注
    watchVal(e){
        console.log(e)
        let that = this
        that.data.remark = e.detail.value
        this.setData({
            remark: that.data.remark
        })
        console.log(this.data.remark)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        //获取商品信息   选择地址
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
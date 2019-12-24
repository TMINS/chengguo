// pages/Collection/index.js
//点击收藏  存入缓存 或提交到数据库
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isActive:1,
        //收藏数组
        hotelList:[{}],
        shopList:[{}]
    },
    isActive(e){
        console.log(e)
        this.setData({
            isActive: parseInt(e.target.dataset.isactive)
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //向后台请求收藏数据         
        wx.request({
            url: '',
            success:function(res){
                console.log(res)
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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
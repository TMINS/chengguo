// pages/malls/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shopClass:[
            {
                title:'新鲜水果',
                img:'../../static/eg3.jpg'
            },
            {
                title: '海鲜水产',
                img: '/static/eg4.png'
            },
            {
                title: '坚果炒货',
                img: '/static/eg5.png'
            },
            {
                title: '茶叶礼盒',
                img: '/static/eg6.jpg'
            },
            {
                title: '方便速食',
                img: '/static/eg7.png'
            },
            {
                title: '礼品礼包',
                img: '/static/eg8.png'
            },
        ],
        item: [
            {
                id:1,
                title: '俄罗斯进口糖果巧克力零食黑美人系列芭槟娜礼',
                price: 256
            },
            {
                id:2,
                title: '俄罗斯进口糖果巧克力零食黑美人系列芭槟娜礼',
                price: 256
            }, 
            {
                id:3,
                title: '俄罗斯进口糖果巧克力零食黑美人系列芭槟娜礼',
                price: 256
            },
           {
               id:4,
                title: '俄罗斯进口糖果巧克力零食黑美人系列芭槟娜礼',
                price: 256
            },
        ]
    },
    toShopDetail: function (event) {
        console.log(event)
        //event.currentTarget.datest.index   中存放下标  
        const shopId = event.currentTarget.dataset.id
        console.log(shopId)
        //跳转至详情
        wx.navigateTo({
            url: `/pages/malls-detail/index?id=${shopId}`,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("aa")
        wx.setNavigationBarRightButton({

            hide: true

        });
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
    // onShareAppMessage: function () {

    // }
    
})
// pages/shop-cart/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cart:[],
        total:0,
        goodCount:0,
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let that = this
        let store_good = wx.getStorageSync('cart') || []
        console.log(store_good)
        if(store_good.length > 0){
            for(let i in store_good){
                store_good[i].checked = false
                //单个商品总价  
                store_good[i].shop_price = store_good[i].shop_number * store_good[i].unit_price
                //总金额    单击* 数量
                // that.data.total += store_good[i].shop_number * store_good[i].unit_price
                //总数量
            }
            this.setData({
                cart:store_good,
                // total:that.data.total
            })
        }
    },
    //是否选中 选中则计入总价
    // checkedTap(e){
    //     console.log(e)
    //     let that = this
    //     let checked = e.currentTarget.dataset.checked
    //     let currentId = e.currentTarget.dataset.shop_id
    //     let store_good = wx.getStorageSync('cart')
    //     for (let i in store_good) {
    //         if (currentId === store_good[i].shop_id ){
    //             console.log(currentId)
    //            store_good[i].checked = !store_good[i].checked
    //            that.data.total += store_good[i].shop_number * store_good[i].shop_price
    //         }else{
    //             store_good[i].checked = !store_good[i].checked
    //             that.data.total -= store_good[i].shop_number * store_good[i].shop_price
    //         }
    //     }
    //     try{
    //         wx.setStorageSync('cart', store_good)
    //     }catch(e){
    //         console.log(e)
    //     }
    //     this.setData({
    //         cart: store_good,
    //         total:that.data.total
    //     })
    // },
    //清空购物车
    allDelete(){
        let that  = this
        wx.showModal({
            title: '提示',
            content: '确定清除所有商品吗',
            success(res){
                if(res.confirm){
                    wx.setStorageSync('cart', [])
                    that.setData({
                        cart: [],
                        total: 0,
                    })
                }
            }
        })
    },
    //商品数量减
    deleteGood(e){
        let that = this
        let current_id =  e.currentTarget.dataset.id
        let store_good = wx.getStorageSync('cart')
        for(let i in store_good){
            if ( current_id === store_good[i].shop_id && store_good[i].shop_number > 1 ){
                store_good[i].shop_number  -- 
                //重新计算该商品总价
                store_good[i].shop_price = store_good[i].shop_number * store_good[i].unit_price
                //重新计算所有商品总价
                // that.data.total = that.data.total -store_good[i].unit_price
            }
        }
        this.setData({
            cart: store_good,
            // total:that.data.total
        })
        try{
            wx.setStorageSync('cart', store_good)
        }catch(e){
            console.log(e)
        }
    },
    //商品数量加
    addGood(e){
        let that = this
        let current_id = e.currentTarget.dataset.id
        let store_good = wx.getStorageSync('cart')
        for (let i in store_good) {
            if (current_id === store_good[i].shop_id && store_good[i].shop_number >= 1) {
                store_good[i].shop_number++
                //重新计算该商品总价
                store_good[i].shop_price = store_good[i].shop_number * store_good[i].unit_price
                //重新计算所有商品总价
                // that.data.total = that.data.total + store_good[i].unit_price
            }
        }
        this.setData({
            cart: store_good,
            // total: that.data.total
        })
        try {
            wx.setStorageSync('cart', store_good)
        } catch (e) {
            console.log(e)
        }
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
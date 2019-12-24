// pages/malls-detail/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        shop_id:0,
        shop_number:1, 
        shop_price:288,
        unit_price:288
    },
    //----------------- - 商品数量- ----------------------------------
    reduce(){      
        let num =  this.data.shop_number
        if(num === 1){
            
        }else{
            num --
            this.setData({
                shop_number:num,
                shop_price: this.data.unit_price * num
            })
        }
    },
    //---------------------商品数量 +-----------------------------
    plus(){
        let num = this.data.shop_number
        num++ 
        this.setData({
            shop_number: num,
            shop_price: this.data.unit_price * num
        })
    },
    //-----------------------加入购物车-------------------------
    addCart(event){
        let store_goods = wx.getStorageSync('cart') || []
        if (store_goods.length > 0){
            for(let i in store_goods){
                //通告商品id 查询缓存中的商品数组是否已有该商品  如有则商品数量+当前商品的数量    无则添加商品
                if (this.data.shop_id === store_goods[i].shop_id){
                    store_goods[i].shop_number = store_goods[i].shop_number  + this.data.shop_number
                    //最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可
                    wx.showToast({
                        title: '添加成功',
                        icon: 'success',
                        duration: 1500
                    })
                    try{
                        wx.setStorageSync('cart', store_goods)
                    }catch(e){
                        console.log(e)
                    }
                    return
                }
            }
            //遍历完 如果没有对应id的商品 则添加到商品数组
            store_goods.push({
                shop_id: this.data.shop_id,
                shop_number: this.data.shop_number,
                shop_price: this.data.shop_price,
                unit_price: this.data.unit_price
            })
            wx.showToast({
                title: '添加成功',
                icon: 'success',
                duration: 1500
            })
        }else{
            //如果数组长度为0 则添加数据（第一次存放）
            store_goods.push({
                shop_id: this.data.shop_id,
                shop_number: this.data.shop_number,
                shop_price: this.data.shop_price,
                unit_price: this.data.unit_price
            })
            wx.showToast({
                title: '添加成功',
                icon: 'success',
                duration: 1500
            })
        }
        try{
            wx.setStorageSync('cart', store_goods)
        }catch(e){
            console.log(e)
        }
        // console.log(store_goods)
    },
    //-----------------------立即购买---------------------------
    orderNow(){
        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        this.setData({
            shop_id: parseInt(options.id)
        })
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
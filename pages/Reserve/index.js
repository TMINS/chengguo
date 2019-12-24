// pages/Reserve/index.js
import request from '../../server/network.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        roomNum:1, //房间数量
        userName: String,  //用户名
        userPhone:'',  //用户手机号
        code:Number,  //用户输入的验证码
       getCode:Number, //后台返回的验证码
        codeTime:60, //验证码申请时间间隔
        vCode:'获取验证码'  //验证码提示信息
    },
    //房间数量
    changeRoom(e){
        let that = this
        const oper = e.currentTarget.dataset.oper
        if(oper === '+'){
            that.data.roomNum++
            this.setData({
                roomNum: that.data.roomNum
            })
        }else if(oper === '-' && that.data.roomNum >1){
            that.data.roomNum--
            this.setData({
                roomNum: that.data.roomNum
            })
        }
    },
    //获取用户输入的数据
    watchVal(e){
        console.log(e)
        let that =  this
        let text = e.currentTarget.dataset.text
        if(text === 'name'){
            this.setData({
                userName: e.detail.value
            })
        }else if(text === 'phone'){
            this.setData({
                userPhone: e.detail.value
            })
        }else if(text === 'code'){
            that.data.code = e.detail.value
            this.setData({
                code: e.detail.value
            })
        }
    },
    // 验证码验证
    obtainCode(){
        let that = this
        //验证手机号
        // that.data.userPhone
        if (that.data.userPhone.length === 11){
            let myreg = /^1\d{10}$/;
            if (myreg.test(that.data.userPhone)){
                //手机号正确 申请验证码
                this.getCode()
            }else{
                wx.showModal({
                    title: '请输入正确的手机号',
                    showCancel: false,
                    duration: 1000
                });
                return
            }
        }else{
            wx.showModal({
                title: '请输入完整手机号',
                showCancel:false,
                duration: 1000
            })
            return;
        }
    },
    //申请验证码
    getCode(){
        let that = this
        let timer 
        // //发起请求
        // request({
        //     url:'',
        //     methods:'',
        //     data:{}
        // }).then(res => {
        //     console.log(res)
            if(that.data.codeTime == 60){
                timer = setInterval(function () {
                    if (that.data.codeTime > 0) {
                        that.setData({
                            codeTime: that.data.codeTime - 1,
                            vCode: '剩余' + (that.data.codeTime - 1) + '秒'
                        })
                    } else {
                        clearInterval(timer);
                        that.setData({
                            codeTime: 60,
                            vCode: '获取验证码'
                        })
                    }
                }, 1000) 
            }
            //保存申请的验证码 
            // that.setData({
            //     getCode: 
            // })
        // }).catch(err => {
            // wx.showToast({
            //     title: '请求失败',
            //     icon: 'loading',
            //     duration: 1000
            // });
        // })
    },
    //跳转优惠券页面
    toDiscound(e){
        console.log(e)
        wx.navigateTo({
            url: '',
            events:{
                acceptDataFromOpenedPage:function(data){
                    //获取优惠券页面返回的数据
                }
            }
        })

    },
    //确认预订酒店
    subRoom(){
        
    },
    //拼团
    spell(){
        
    },
    onLoad:function(option){
        console.log(option)
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
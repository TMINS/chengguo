// pages/hotel-det/index.js
import tool from "../../utils/tool.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchVal: '',
        tabList: ['推荐', '商务出行', '情侣约会', '近景点', '学校周边'],
        currtIndex: 0,
        // selectTitle: ['位置区间', '价格区间', '智能排序'],
        selectShow: '',
        selectTitle:[{
            title:'位置区间',
            selectList: ['1km以内', '1-3km', '3-5km', '5km以外'],
        },
        {
            title: '价格区间',
            selectList: ['￥0-150', '￥150-500', '￥500-1000', '￥1000以上'],
        },
        {
            title: '智能排序',
            selectList: ['智能排序', '距离优先', '好评优先', '价格优先', '人气优先'],
        }],
        // selectList: {
        //     live: ['1km以内', '1-3km', '3-5km', '5km以外'],
        //     price: ['￥0-150', '￥150-500', '￥500-1000', '￥1000以上'],
        //     sort: ['智能排序', '距离优先', '好评优先', '价格优先', '人气优先'],
        // },
        hotelList: [{

        }]
    },
    //搜索
    //先获取 搜索框内的值 进行存储
    //处理输入框的值 防止xss攻击
    safeStr(str) {
        return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    },
    searchVal(e) {
        this.setData({
            searchVal: e.detail.value
        })
    },
    toSearch: tool.throttle(function() {
            //节流优化
            //查询searchVal相关信息
            //过滤用户输入信息中的空格  < >  
            let that = this
            let value = that.safeStr(that.data.searchVal)
            if (value.trim() === '') {
                wx.showToast({
                    title: '请重新输入',
                    icon: 'none',
                    duration: 1500
                })
            } else {
                wx.request({
                    url: '',
                    data: '',
                    success: res => {
                        console.log(res)
                        if (res.statusCode === 200) {
                            //请求成功 设置并处理酒店数据
                            
                        }   
                    },
                    fail: err => {
                        wx.showToast({
                            title: '搜索失败',
                            icon: 'none',
                            duration: 1500
                        })
                    }
                })
            }
        }),
    // 筛选切换 数据
    selectChange(e) {
        console.log(e)
        let that = this
        if (that.data.selectShow === e.currentTarget.dataset.message) {
            this.setData({
                selectShow: null
            })
        } else {
            this.setData({
                selectShow: e.currentTarget.dataset.message
            })
        }
    },
    optionTap(e) {
        console.log(e)
        let that = this
        //取出一层循环的下标
        let index = parseInt(e.currentTarget.dataset.index)
        //取出二层循环的下标
        let key = parseInt(e.currentTarget.dataset.key)
        let text = `selectTitle[${index}].title`
        //设置标题值
        that.setData({
            [text]: that.data.selectTitle[index].selectList[key],
            selectShow: ''
        })
        //发送关键字 请求对应数据
        wx.request({
            url:'',
            data:'',
            success:res => {
                console.log(res)
            }
        })
    },
    //tabbar
    onItemClick(e) {
        console.log(e)
        const index = e.currentTarget.dataset.index
        this.setData({
            currtIndex: index
        })
        //发送关键字 请求对应数据
        wx.request({
            url: '',
            data: '',
            success: res => {
                console.log(res)
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this
        //在缓存中取出用户当前位置的经纬度
        let location = wx.getStorageSync('location')
        wx.request({
            url: '',
            data: location,
            success: function(res) {
                console.log(res)
                //根据位置获取附近酒店
                that.setData({
                    hotelList: res.data.list
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
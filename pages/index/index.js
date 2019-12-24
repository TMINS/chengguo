//index.js
const promisify  = require('../../utils/promisify.js')
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
//获取应用实例
const app = getApp()
Page({
    data: {
        city:String,
        item: {
            show: {
                title: '俄罗斯进口糖果巧克力零食黑美人系列芭槟娜礼',
                price: 256
            }
        },
        hotelList:Array,
        latitude: Number,
        longitude: Number,
    },
    //事件处理函数    监听tab-control组件的函数  并接受组件传的值
    ItemClick: function(e) {
        console.log("--------页面")
        console.log(e.detail)
    },
    onLoad: function() {
        let that = this
        qqmapsdk = new QQMapWX({
            key: '72HBZ-I4DE6-5TWSZ-MRYDC-UF2IZ-MGF7X'
        });
        // let getLocation = promisify(wx.getLocation)
        // getLocation({
        //     type: 'gcj02',
        //     altitude: true,
        //     isHighAccuracy: true,
        // }).then(res =>{
        //     console.log(res)
        // })
        wx.getLocation({
            type: 'gcj02',
            altitude: true,
            isHighAccuracy: true,
            success(res) {
                console.log(res)
                that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude
                })
                qqmapsdk.reverseGeocoder({
                    location: {
                        latitude: that.data.latitude,
                        longitude: that.data.longitude
                    },
                    success: function (res) {
                        console.log(res)
                        that.setData({
                            city:res.result.address_component.city
                        })
                    },
                    fail: function (res) {
                        console.log(res)
                    }
                })
            }
        })
    },
    onShow: function() {
        let that = this
        let newHotelList = []
        qqmapsdk.search({
            keyword: '橙果酒店',
            success: function(res) {
                console.log(res);
                for(let i in res.data){
                    newHotelList.push({
                        id: res.data[i].id,
                        title: res.data[i].title,
                        address: res.data[i].address,
                        location: {
                            lat: res.data[i].location.lat,
                            lng: res.data[i].location.lng
                        }
                    })
                }
                console.log(newHotelList)
                that.setData({
                    hotelList: newHotelList
                })
            },
            fail: function(res) {
                //   console.log(res);
            },
            complete: function(res) {
                //   console.log(res);
            }
        });
    }
})
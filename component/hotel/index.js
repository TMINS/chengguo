// pages/hotel/index.js
Component({
    properties:{
        hotelList:Array,
        index:Number
    },
    methods:{
        toHotel(e){
            console.log(e)
            wx.navigateTo({
                url: '',
            })
        }
    }
})
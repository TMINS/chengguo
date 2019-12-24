Component({
    properters:{
        item:{
            type:Object,
            value:{}
        }
    },
    data: {
        star_list:[
            '/static/Star_dark.png',
            '/static/Star_dark.png',
            '/static/Star_dark.png',
            '/static/Star_dark.png',
            '/static/Star_dark.png'
        ]
    },
    methods:{
        Right_Star:function(){
            var stars = []
            var new_star = this.data.star_list
            let star = '3.6'
            if (String(star).indexOf(".") > 0){
                stars =   star.split('.')
                for(let i=0;i<parseInt(stars[0]);i++){
                    new_star[i] = '/static/Star_bright.png'
                }
                console.log(parseInt(stars[1]).toFixed(0) )
                if (parseInt(stars[1]) >= 5){
                    new_star[parseInt(stars[0])] = '/static/Star_half.png'
                }
            }else{
                for (let i = 0; i < parseInt(star); i++) {   
                    new_star[i] = '/static/Star_bright.png'
                }
            }
            this.setData({
                star_list: new_star
            })
        },
    },
    //组件生命周期
    lifetimes:{
        created:function(){
            //此时组件刚被创建  无数据   注：此时无法调用setdata
        },
        attached:function(){
            //组件初始化完毕  this.setdata可用  大部分初始化都可再次操作
            
        },
        ready:function(){
            //组件视图层布局完成时
            this.Right_Star()
        },
        detached:function(){
            //组件离开页面
        }
    }
})
// pages/tab-control/index.js
Component({
    properties:{
        titles:{
            type:Array,
            value:['新鲜水果','坚果炒货','海鲜水产','茶叶礼盒','方便速食','礼品礼包']
        }
    },
    data:{
        currtIndex:0
    },
    methods:{
        onItemClick(event){
            console.log(event)
            const index = event.currentTarget.dataset.index
            this.setData({
                currtIndex : index
            })
            //将组件的index 传给页面
            this.triggerEvent('onItemClick',{index})
            console.log('onItemClick',"-------")

        }
    
    }

})
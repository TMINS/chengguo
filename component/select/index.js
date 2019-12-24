// component/select/index.js
Component({
    properties:{
        title:{
            type:String,
            value:''
        },
        list:{
            type:Array,
            value:[]
        }
    },
    data:{
        select:false,
    },
    methods:{
        selectChange(e) {
            console.log(e)
            let that = this;
            this.setData({
                select: !that.data.select,
            })
        },
    }
})
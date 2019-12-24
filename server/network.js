//封装请求方法  利用promise 规避回调地狱
//方法接收一个对象  对象中有 传入的url    请求方式method  参数data 
export default function request(options) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: options.url,
            method: options.method || 'get',
            data: options.data || {},
            success: function (res) {
                resolve(res)
            },
            fail: function (err) {
                reject(err)
            }
        })
    })
}
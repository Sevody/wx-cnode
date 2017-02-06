function flatOptions(options) {
    var query
    if (typeof options == 'object') {
        query = Object.keys(options).reduce((arr, key) => {
            arr.push(`${key}=${options[key]}`)
            return arr
        },[]).join('&')
    }
    return query
}
function fetchTopic(options,cb) {
    var apiPrefix = "https://cnodejs.org/api/v1/topics"
    var url = apiPrefix+'?'+flatOptions(options)
    console.log(url)
    wx.request({
      url: url,
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        cb(res.data)
      }
    })
}
function fetchDetail(id, cb) {
    var apiPrefix = "https://cnodejs.org/api/v1/topic"
    var url = apiPrefix+'/'+id+'?mdrender=false'
    console.log(url)
    wx.request({
      url: url,
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        cb(res.data)
      }
    })
}

module.exports = {
    fetchTopic: fetchTopic,
    fetchDetail: fetchDetail
}
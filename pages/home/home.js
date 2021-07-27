const util = require('../../utils/wgsToGcj.js')
Page({
  data: {
    active:0,
    latitude: 34.329664,
    longitude: 108.836788,
    markers: [],
    polygons:[],
  },

  
  onChange(event) {
    this.setData({ active: event.detail });
  },

  // 事件处理函数
  onLoad() {
    wx.getLocation({
      type: 'gcj02',
      success: (res)=> {
        let latitude = res.latitude
        let longitude = res.longitude
        this.setData({ 
          latitudes: latitude, 
          longitudes: longitude
        })
      }
    })
    this.mapCtx = wx.createMapContext('myMap');
  },
  onShow: function () {
    this.getTabBar().init();
  },
})

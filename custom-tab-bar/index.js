Component({
  data: { 
    selected: 0,
    list: [
      {
        pagePath: "/pages/xcfx/xcfx",
        text: "巡查发现",
      },
      {
        pagePath: "/pages/myTask/myTask",
        text: "我的任务",
      }
    ]
  },
  methods: {
    onChange(e) {
       this.setData({ active: e.detail });
       wx.switchTab({
         url: this.data.list[e.detail].pagePath
       });
    },
    init() {
        const page = getCurrentPages().pop();
        this.setData({
       　  active: this.data.list.findIndex(item => item.pagePath === `/${page.route}`)
        });
       }
    }
})
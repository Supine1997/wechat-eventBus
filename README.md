# wechat-eventBus
这是一个关于小程序事件订阅的npm包  
引入js  
import EventBus from '@eventBus/eventBusjs';  
引入ts  
import EventBus from '@eventBus/eventBusts';  

使用方法  
---PageA---  
page({  
  onLoad(){  
    EventBus.on('eventName',this,(msg)=>{  
      console.log(msg);  
    })  
  },  
  onUnload(){  
    EventBus.remove('eventName',this);  
  }  
})  
  
---PageB---  
page({  
  onLoad(){  
    EventBus.send('eventName','Hello this is PageB')  
  },  
})  

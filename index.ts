let event:any = {};
/*
---订阅---
*/
export function on(name:string, self:any, calback:any) {
  let arr = [self, callback];
  let callbacks = event[name];
  if (Array.isArray(callbacks)) {//是数组意味着该事件曾经注册过
    callbacks.push(arr);
  } else {
    event[name] = [arr];
  }
}
/*
---移除订阅---
*/
export function remove(name: string, self:any) {
  let callbacks = event[name];
  if (Array.isArray(callbacks)) {
    event[name] = callbacks.filter((arr) => {
      return arr[0] != self;  //比较存储的self和传入的self是否相等，相等返回空数组，不相等返回原数组
    })
  }
}
/*
---发送消息---
*/
export function send(name: string, data:any) {
  let callbacks = event[name];
  if (Array.isArray(callbacks)) {
    callbacks.map((arr) => {
      let self = arr[0];
      let callback = arr[1];
      callback.call(self, data);
    })
  }
}
``
// app/instance-initializers/intl.js
export function initialize(appInstance) {
    const intlService = appInstance.lookup('service:intl');
    
    // 设置默认语言，比如简体中文
    intlService.setLocale(['zh-cn']);
  }
  
  export default {
    initialize
  };
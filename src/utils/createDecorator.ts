import {createDecorator } from 'vue-class-component'
export const Log = createDecorator((options,key)=>{
//     // Keep the original method for later.
//   const originalMethod = options.methods[key]

//   // Wrap the method with the logging logic.
//   options.methods[key] = function wrapperMethod(...args:any) {
//     // Print a log.
//     console.log(`Invoked: ${key}(`, ...args, ')')

//     // Invoke the original method.
//     originalMethod.apply(this, args)
//   }
})
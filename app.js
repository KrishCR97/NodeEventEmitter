var emitter = require('./emitter');
var emit = new emitter()
emit.on('Hello',function(){
    console.log("How are you");
})

emit.emit('Hello')
function eventFunc(){
    this.event = {}
}

eventFunc.prototype.on = function(type , listener){
    this.event[type] = event[type] || []
    this.event[type].push(listener)
}

eventFunc.prototype.emit = function(type){
    if(this.emit[type]){
        this.event[type].forEach(element => {
            element()
        });
    }
}

module.exports = eventFunc;
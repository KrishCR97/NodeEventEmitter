function eventFunc(){
    this.event = {}
}

eventFunc.prototype.on = function(type , listener){
    console.log(type)
    this.event[type] = this.event[type] || []
    this.event[type].push(listener)
}

eventFunc.prototype.emit = function(type){
    console.log(this.emit[type])
    if(this.emit[type]){
        this.event[type].forEach(element => {
            element()
        });
    }
}

module.exports = eventFunc;
function Device(name,switcher,power){
    this.switcher = switcher
    this.name = name
    this.power = power
    this.powerConsume = function(){
        console.log(`Power - ${this.power * Math.PI} Wh`)
    }
    this.deviceInfo = function(){
        console.group(`${this.name} group`)
        console.log(`Swith - ${this.switcher}`)
        console.log(`Name - ${this.name}`)
        console.groupEnd()
    }
    this.toggle = function(){
        if (this.switcher == 'On')
            console.log('Switch Off')
        else
            console.log('Switch On')

    }
}


const lamp = new Device('lamp','Off',15)
const computer = new Device('computer','On',110)

lamp.deviceInfo()
computer.deviceInfo()

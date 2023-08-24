class Device {
 constructor(name) {
   this.name = name
 }
 getInfo() {
   return `Our Device - ${this.name} is the best of the world ...But now its OFF`
 }
}

class Flatiron extends Device {
  constructor(name) {
         super(name);
         this.voltage = 220;
         this.amperage = 16;
  }
  power(on_off) {
     this.on_off = on_off
     if (this.on_off) {
         return `${this.name} is on and power consumption = ${this.voltage * this.amperage / 1000} (KW/hour)`
  } else {
    return super.getInfo();
  }
 }
}

class Hoover extends Device {
  constructor(name) {
         super(name);
         this.voltage = 110;
         this.amperage = 5;
  }
  power(on_off) {
     this.on_off = on_off
     if (this.on_off) {
         return `${this.name} is on and power consumption = ${this.voltage * this.amperage / 1000} (KW/hour)`
  } else {
    return super.getInfo();
  }
 }
}

const flatiron = new Flatiron('flatiron_dreame')
console.log(flatiron.power(false))
console.log(flatiron.power(true))

const hoover = new Hoover('hoover_hickey')
console.log(hoover.power(false))
console.log(hoover.power(true))
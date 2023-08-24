function Device(name) {
  this.name = name,
  this.isOn = function() {console.log(`${this.name} is on`)},
  this.isOff = function() {console.log(`Device is off`)}
}

function Flatiron(name) {
  this.name = name,
  this.voltage = 220,
  this.amperage = 16,
  this.power = function(on_off) {
    if (on_off == 'on') {
    console.log(`${this.name} is on and power consumption = ${this.voltage * this.amperage / 1000} (KW/hour)`)
    } else {flatiron.isOff()}
  }
}

function Hoover(name) {
  this.name = name,
  this.voltage = 110,
  this.amperage = 5,
  this.power = function(on_off) {
    if (on_off == 'on') {
    console.log(`${this.name} is on and power consumption = ${this.voltage * this.amperage / 1000} (KW/hour)`)
    } else {hoover.isOff()}
  }
}

Flatiron.prototype = new Device();  // делегирующую связь Flatiron-Device
Hoover.prototype = new Device();

const flatiron = new Flatiron('flatiron_dream');
const hoover = new Hoover('hoover_hickey');

flatiron.isOn()
flatiron.isOff()
flatiron.power('on')
hoover.power('on')
hoover.power('off')
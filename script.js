
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meter2feet  = 3.281
const liter2gallon = 0.264
const kilo2pound = 2.204

inputBtn.addEventListener("click", function() {
  let baseValue = inputEl.value 
   let meterValue = baseValue * meter2feet
   let feetValue  = baseValue / meter2feet

lengthEl.textContent = `
${baseValue} meters = ${meterValue.toFixed(3)}
 feet | ${baseValue} feet = ${feetValue.toFixed(3)} meters
`
let literValue = baseValue * liter2gallon
let gallonValue = baseValue / liter2gallon

volumeEl.textContent = `
${baseValue} liters = ${literValue.toFixed(3)}
 gallons | ${baseValue} gallons = ${gallonValue.toFixed(3)} liters
 `
 let kilogramValue = baseValue * kilo2pound
 let poundValue = baseValue / kilo2pound

 massEl.textContent = `
 ${baseValue} kilograms = ${kilogramValue.toFixed(3)}
  pounds | ${baseValue} pounds = ${poundValue.toFixed(3)} kilograms
  ` 
})
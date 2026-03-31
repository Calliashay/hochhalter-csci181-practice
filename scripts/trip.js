console.log('trip script connected');

// ------------------------------------------------------------
// Variables
// ------------------------------------------------------------
// Driver Info
const driver_name = 'John';

// Trip Info
const distance_miles = 200;
const mpg = 25;
const fuel_price = 4.75;
const fuel_capacity = 15;

const is_round_trip = true; // multiply * 2 
let total_distance;

// ------------------------------------------------------------
// Derived/Calculated Values
// ------------------------------------------------------------
if (is_round_trip == true) {total_distance = distance_miles * 2;}
else {total_distance = distance_miles;}

console.log(`Total distance: ${total_distance} miles.`)
// ------------------------------------------------------------
// Functions
// ------------------------------------------------------------
function calculateGallonsNeeded(distance, milesPerGallon)
{return distance / milesPerGallon;}

function calculateFuelCost(gallons, pricePerGallon)
{return gallons * pricePerGallon;}

// ------------------------------------------------------------
// Main Program Execution
// ------------------------------------------------------------
// Calculating Values
const gallonsNeeded = calculateGallonsNeeded(total_distance, mpg);
const fuelCost = calculateFuelCost(gallonsNeeded, fuel_price);

// Fuel Stop
const milesPerTank = fuel_capacity * mpg;

let stopNumber = 0;
let milesTraveled = 0;
let runningFuelTotal = 0;

// Loop for Fuel Stops while traveling toward the destination
while (milesTraveled < total_distance) {
    milesTraveled += milesPerTank;
    
// Only log the stop if the destination hasn't been reached yet
    if (milesTraveled < total_distance) {
        stopNumber++;

        // Add the cost of a full tank to the running total
        runningFuelTotal += calculateFuelCost(fuel_capacity, fuel_price);

        //Checkpoints
        console.log(`--- Fuel Stop #${stopNumber} ---`)
        console.log(`Miles traveled so far: ${milesTraveled}`)
        console.log(`Total cost of fuel so far: $${runningFuelTotal.toFixed(2)}`);
    }
}

// Final Road Trip Summary
console.log('--------------------------');
console.log('Final Road Trip Report');
console.log('--------------------------');
console.log(`Driver: ${driver_name}`);
console.log(`Total Distance Traveled: ${total_distance} miles`);
console.log('Estimated Gallons Needed: ' +Math.round(gallonsNeeded));
console.log('Estimated Total Cost: $' + fuelCost.toFixed(2));

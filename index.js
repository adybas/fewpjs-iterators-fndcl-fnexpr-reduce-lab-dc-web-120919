const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let adder = (current, total) => total += current
let totalBatteries = batteryBatches.reduce(adder, 0)

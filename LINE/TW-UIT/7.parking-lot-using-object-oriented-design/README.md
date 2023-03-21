# Parking Log Using Object Oriented Design

Design a parking log system with:
Must:

1. It can hold up to N cars and the fee is M per hour.
2. auto record: car registration number, color and allocate slot.
3. calculate the parking fee by car registration number.

Nice to have:

1. record in/out logs and provide query functions.
2. function show available parking lots.
3. function to return a list of cars bv X color.
4. function to show parking lot by car registration number and current fee.

Reminder: your code should be extendable for future use cases.

**Solution:**

```js
// solution.js

// Parking lot system

/**
 * class Parking {
 *    constructor(ParkingLotCount, feePerHour) {
 *    
 *    }
 *    
 *    enter(carNumber, color) {
 *    
 *    }
 * 
 *    exit(carNumber) {
 *      ...
 *      return fee
 *    }
 * }
 */

class Parking {
  constructor (ParkingLotCount, feePerHour) {
    this.feePerHour = feePerHour;
    this.availableLot = this.ParkingLotCount;
    this.parkingLot = {};
    this.slot = 1;
  }

  enter (carNumber, color) {
    // full
    if (Object.keys(this.parkingLots).length === this.availableLot) {
      return;
    }

    this.parkingLot[carNumber] = {
      color: color,
      slot: this.slot,
      enterTime: new Date().getTime()
    }
    this.slot += 1;
  }

  exit (carNumber) {
    let fee = 0;
    if (this.parkingLot[carNumber]) {
      const period = Math.floor(
        (new Date().getTime() - this.parkingLot[carNumber].enterTime) / (1000 * 60 * 60)
      );
      fee = period * this.feePerHour;
    }
    return fee;
  }

  getLots() {
    return this.slot;
  }

  getCarsbyColor(color) {
    let cars = [];
    for (const [carNo, values] of Object.entries(this.parkingLot)) {
      if (values[color] == color) {
        cars.push({
          carNumber: carNo,
          ...values
        })
      }
    }
    return cars;
  }
}

```

## References

<https://leetcode.com/discuss/interview-question/124739/Parking-Lot-Design-Using-OO-Design>

<https://www.geeksforgeeks.org/design-parking-lot-using-object-oriented-principles/>

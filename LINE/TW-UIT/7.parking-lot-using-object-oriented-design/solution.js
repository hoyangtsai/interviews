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

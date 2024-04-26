class UberPriceCalculator {
    constructor(peakTime, baseFare, minuteRate, kilometerRate) {
        this.peakTime = peakTime;
        this.baseFare = baseFare;
        this.minuteRate = minuteRate;
        this.kilometerRate = kilometerRate;
    }

    getPrice(rideDistance, rideDuration, isPeak) {
        let totalFare = this.baseFare;
        const distanceCost = rideDistance * this.kilometerRate;
        const timeCost = rideDuration * this.minuteRate;

        if (isPeak) {
            totalFare += (distanceCost + timeCost) * this.peakTime;
        } else {
            totalFare += distanceCost + timeCost;
        }

        return totalFare;
    }
}


const uber = new UberPriceCalculator(1.5, 2.5, 0.5, 1.0);
const price = uber.getPrice(3, 60, true);
console.log(price);

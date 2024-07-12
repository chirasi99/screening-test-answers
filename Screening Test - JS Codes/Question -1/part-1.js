Date.prototype.daysTo = function (d) {
    if (d < this) {
        throw new Error('Date must be greater than the current date')
    }
    
    const oneDay = 24 * 60 * 60 * 1000
    const diffDays = Math.floor(Math.abs((this - d) / oneDay))
    return diffDays
}

let d1 = new Date('2023-07-01')
let d2 = new Date('2023-07-04')
console.log(d1.daysTo(d2))
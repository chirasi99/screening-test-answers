function orderByTotal(sales) {
    return sales.map(sale => ({
        ...sale,
        Total: sale.amount * sale.quantity
    })).sort((a, b) => b.Total - a.Total)
}

const sales = [
    {amount: 10000, quantity: 10},
    {amount: 5000, quantity: 20},
    {amount: 2000, quantity: 30}
]

console.log(orderByTotal(sales))
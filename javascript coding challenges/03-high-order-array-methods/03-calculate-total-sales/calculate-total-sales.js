function calculateTotalSalesWithTax(products, taxPrecentage) {
  const totalSales = products.reduce(
    (total, value) => total + value.price * value.quantity,
    0
  );

  const withTax = totalSales + (totalSales * taxPrecentage) / 100;

  return withTax;
}

module.exports = calculateTotalSalesWithTax;

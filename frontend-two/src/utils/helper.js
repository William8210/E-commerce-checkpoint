//This is to help us introduce out currency in the amount section of our products
//This must  be properly studied

export function formatCurrency(amount) {
  return amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });
}

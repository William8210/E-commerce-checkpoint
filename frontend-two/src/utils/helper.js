//This is to help us introduce out currency in the amount section of our products
//This must  be properly studied

export function formatCurrency(amount) {
  return amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });
}

//This is to enable multiple files relying on this server url to be able to import it and use it
export const SEVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://ecom-backend-chud.onrender.com"
    : "http://localhost:3001"; //http because it is local

//imported in PaymentWithPaystack

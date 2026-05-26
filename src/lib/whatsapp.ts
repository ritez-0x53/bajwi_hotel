import {
  RESTAURANT,
  currency,
  DELIVERY_FEE,
  FREE_DELIVERY_ABOVE,
} from "./config";

import type { CartLine } from "./cart";

/* =========================
   TYPES
========================= */

export type OrderType =
  | "delivery"
  | "pickup";

export type CheckoutInfo = {
  name: string;
  phone: string;
  address: string;
  note?: string;
  orderType: OrderType;
};

/* =========================
   DELIVERY FEE
========================= */

export function deliveryFeeFor(
  orderType: OrderType,
  subtotal: number
): number {
  if (orderType === "pickup") {
    return 0;
  }

  if (subtotal >= FREE_DELIVERY_ABOVE) {
    return 0;
  }

  return DELIVERY_FEE;
}

/* =========================
   ORDER MESSAGE
========================= */

export function buildOrderMessage(
  lines: CartLine[],
  info: CheckoutInfo
): string {
  const subtotal = lines.reduce(
    (total, line) => {
      return (
        total +
        line.qty * line.item.price
      );
    },
    0
  );

  const deliveryFee =
    deliveryFeeFor(
      info.orderType,
      subtotal
    );

  const total =
    subtotal + deliveryFee;

  const orderId = `BH-${Date.now()
    .toString()
    .slice(-6)}`;

  const items = lines
    .map((line) => {
      return `• ${
        line.item.name
      } x${line.qty} - ${currency(
        line.qty * line.item.price
      )}`;
    })
    .join("\n");

  const address =
    info.orderType === "pickup"
      ? "Pickup Order"
      : info.address;

  const deliveryText =
    info.orderType === "pickup"
      ? "Pickup: FREE"
      : `Delivery: ${
          deliveryFee === 0
            ? "FREE"
            : currency(
                deliveryFee
              )
        }`;

  return `🍜 *NEW ORDER - ${RESTAURANT.name.toUpperCase()}*

🧾 *Order ID:* ${orderId}

📅 *Time:* ${new Date().toLocaleString(
    "en-IN"
  )}

👤 *Customer Details:*
Name: ${info.name}
Phone: ${info.phone}
📍 Address: ${address}

🛒 *Order Items:*
${items}

💰 *Bill Summary:*
Subtotal: ${currency(subtotal)}
${deliveryText}
*TOTAL: ${currency(total)}*

${
  info.note?.trim()
    ? `📝 *Note:* ${info.note}`
    : ""
}`;
}

/* =========================
   WHATSAPP URL
========================= */

function buildWhatsAppUrl(
  text: string
): string {
  const encodedText =
    encodeURIComponent(text);

  // Remove +, spaces, dashes etc.
  const phone =
    RESTAURANT.whatsappNumber.replace(
      /\D/g,
      ""
    );

  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
}

/* =========================
   ORDER URL
========================= */

export function whatsappOrderUrl(
  lines: CartLine[],
  info: CheckoutInfo
): string {
  const message =
    buildOrderMessage(
      lines,
      info
    );

  return buildWhatsAppUrl(
    message
  );
}

/* =========================
   QUICK CHAT URL
========================= */

export function whatsappQuickUrl(
  text = "Hello, I would like to know more."
): string {
  return buildWhatsAppUrl(text);
}
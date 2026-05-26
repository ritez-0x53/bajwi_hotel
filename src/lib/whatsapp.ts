import {
  RESTAURANT,
  currency,
  DELIVERY_FEE,
  FREE_DELIVERY_ABOVE,
} from "./config";

import type { CartLine } from "./cart";

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

/**
 * Calculate delivery fee
 */
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

/**
 * Build order message
 */
export function buildOrderMessage(
  lines: CartLine[],
  info: CheckoutInfo
): string {
  const subtotal = lines.reduce(
    (acc, line) =>
      acc + line.qty * line.item.price,
    0
  );

  const fee = deliveryFeeFor(
    info.orderType,
    subtotal
  );

  const total = subtotal + fee;

  const orderId = `BH-${Date.now()
    .toString()
    .slice(-6)}`;

  const items = lines
    .map(
      (line) =>
        `• ${line.item.name} x${line.qty} - ${currency(
          line.qty * line.item.price
        )}`
    )
    .join("\n");

  return `🍜 *NEW ORDER - ${RESTAURANT.name.toUpperCase()}*

🧾 *Order ID:* ${orderId}

📅 *Time:* ${new Date().toLocaleString(
    "en-IN"
  )}

👤 *Customer Details*
Name: ${info.name}
Phone: ${info.phone}

📍 *${
    info.orderType === "pickup"
      ? "Pickup Order"
      : "Delivery Address"
  }*
${
  info.orderType === "pickup"
    ? "Customer will pick up the order."
    : info.address
}

🛒 *Order Items*
${items}

💰 *Bill Summary*
Subtotal: ${currency(subtotal)}
${
  info.orderType === "pickup"
    ? "Pickup: FREE"
    : `Delivery Fee: ${
        fee === 0
          ? "FREE"
          : currency(fee)
      }`
}

🧾 *TOTAL: ${currency(total)}*

${
  info.note
    ? `📝 *Customer Note:* ${info.note}`
    : ""
}`;
}

/**
 * Build WhatsApp URL
 */
function buildWhatsAppUrl(
  text: string
): string {
  const encoded =
    encodeURIComponent(text);

  const number =
    RESTAURANT.whatsappNumber.replace(
      /\D/g,
      ""
    );

  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Get WhatsApp order URL
 */
export function whatsappOrderUrl(
  lines: CartLine[],
  info: CheckoutInfo
): string {
  const text = buildOrderMessage(
    lines,
    info
  );

  return buildWhatsAppUrl(text);
}

/**
 * Quick WhatsApp message URL
 */
export function whatsappQuickUrl(
  text = "Hello, I would like to know more."
): string {
  return buildWhatsAppUrl(text);
}

/**
 * Open WhatsApp
 */
export function sendOrderToWhatsApp(
  lines: CartLine[],
  info: CheckoutInfo
): void {
  const text = buildOrderMessage(
    lines,
    info
  );

  const whatsappUrl =
    buildWhatsAppUrl(text);

  window.open(
    whatsappUrl,
    "_blank"
  );
}
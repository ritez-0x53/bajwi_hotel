import {
  RESTAURANT,
  currency,
  DELIVERY_FEE,
  FREE_DELIVERY_ABOVE,
} from "./config";

import type { CartLine } from "./cart";

export type OrderType = "delivery" | "pickup";

export type CheckoutInfo = {
  name: string;
  phone: string;
  address: string;
  note?: string;
  orderType: OrderType;
};

export function deliveryFeeFor(
  orderType: OrderType,
  subtotal: number
) {
  if (orderType === "pickup") return 0;

  if (subtotal >= FREE_DELIVERY_ABOVE) return 0;

  return DELIVERY_FEE;
}

export function buildOrderMessage(
  lines: CartLine[],
  info: CheckoutInfo
) {
  const subtotal = lines.reduce(
    (a, l) => a + l.qty * l.item.price,
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
      (l) =>
        `• ${l.item.name} x${l.qty} - ${currency(
          l.qty * l.item.price
        )}`
    )
    .join("\n");

  return `🍜 *NEW ORDER - ${RESTAURANT.name.toUpperCase()}*

🧾 *Order ID:* ${orderId}

📅 *Time:* ${new Date().toLocaleString(
    "en-IN"
  )}

👤 *Customer Details:*
Name: ${info.name}
Phone: ${info.phone}
📍 Address: ${
    info.orderType === "pickup"
      ? "Pickup Order"
      : info.address || ""
  }

🛒 *Order Items:*
${items}

💰 *Bill Summary:*
Subtotal: ${currency(subtotal)}
${
  info.orderType === "pickup"
    ? "Pickup: FREE"
    : `Delivery: ${
        fee === 0
          ? "FREE"
          : currency(fee)
      }`
}
*TOTAL: ${currency(total)}*

${
  info.note
    ? `📝 Note: ${info.note}`
    : ""
}`;
}

/**
 * Detect mobile device
 */
function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(
    navigator.userAgent
  );
}

/**
 * Open WhatsApp app directly on mobile
 */
function buildWhatsAppLink(text: string) {
  const encoded = encodeURIComponent(text);
  const number = RESTAURANT.whatsappNumber;

  if (isMobile()) {
    return `whatsapp://send?phone=${number}&text=${encoded}`;
  }

  return `https://wa.me/${number}?text=${encoded}`;
}

export function whatsappOrderUrl(
  lines: CartLine[],
  info: CheckoutInfo
) {
  const text = buildOrderMessage(lines, info);

  return buildWhatsAppLink(text);
}

export function whatsappQuickUrl(
  text = "Hello, I would like to know more."
) {
  return buildWhatsAppLink(text);
}
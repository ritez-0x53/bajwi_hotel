import {
  RESTAURANT,
  currency,
  BASE_DELIVERY_FEE,
  BASE_DISTANCE_KM,
  EXTRA_PER_KM,
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
  area?: string;
  distanceKm?: number;
};

/* =========================
   DELIVERY FEE
========================= */

export function deliveryFeeFor(
  orderType: OrderType,
  distanceKm?: number
): number {
  if (orderType === "pickup") {
    return 0;
  }

  if (
    !distanceKm ||
    distanceKm <= BASE_DISTANCE_KM
  ) {
    return BASE_DELIVERY_FEE;
  }

  const extraKm = Math.ceil(
    distanceKm - BASE_DISTANCE_KM
  );

  return (
    BASE_DELIVERY_FEE +
    extraKm * EXTRA_PER_KM
  );
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
      info.distanceKm
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

  const isPickup =
    info.orderType === "pickup";

  return `🍜 *NEW ORDER - ${RESTAURANT.name.toUpperCase()}*

🧾 *Order ID:* ${orderId}

📅 *Time:* ${new Date().toLocaleString(
    "en-IN"
  )}

👤 *Customer Details:*
Name: ${info.name}
Phone: ${info.phone}

${
  isPickup
    ? `📍 Pickup: ${RESTAURANT.address}`
    : `📍 Delivery Address: ${
        info.address
      }`
}

${
  !isPickup && info.area
    ? `🌍 Area: ${info.area}`
    : ""
}

${
  !isPickup &&
  info.distanceKm
    ? `🚚 Distance: ~${info.distanceKm} km`
    : ""
}

🛒 *Order Items:*
${items}

💰 *Bill Summary:*
Subtotal: ${currency(subtotal)}
${
  isPickup
    ? "Pickup: FREE"
    : `Delivery: ${currency(
        deliveryFee
      )}`
}
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

  // Remove +, spaces, dashes
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
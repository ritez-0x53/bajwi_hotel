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

/* =========================
   DELIVERY FEE
========================= */

export function deliveryFeeFor(
  orderType: OrderType,
  subtotal: number
) {
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
) {
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

  const isPickup =
    info.orderType === "pickup";

  const items = lines
    .map(
      (line) =>
        `${line.qty}x ${
          line.item.name
        } - ${currency(
          line.qty * line.item.price
        )}`
    )
    .join("\n");

  return [
    `🍜 Hello ${RESTAURANT.name},`,

    `I would like to place a ${
      isPickup
        ? "PICKUP"
        : "DELIVERY"
    } order:`,

    ``,

    `🛒 Order Items`,
    items,

    ``,

    `💰 Bill Summary`,
    `Subtotal: ${currency(
      subtotal
    )}`,

    isPickup
      ? `Pickup: FREE`
      : `Delivery Fee: ${
          fee === 0
            ? "FREE"
            : currency(fee)
        }`,

    `Total: ${currency(total)}`,

    ``,

    `👤 Customer Details`,
    `Name: ${info.name}`,
    `Phone: ${info.phone}`,

    isPickup
      ? `Pickup From: ${RESTAURANT.address}`
      : `Delivery Address: ${info.address}`,

    info.note
      ? `Note: ${info.note}`
      : "",

    ``,

    `Please confirm my order.`,
  ]
    .filter(Boolean)
    .join("\n");
}

/* =========================
   WHATSAPP URL
========================= */

function buildWhatsAppUrl(
  text: string
) {
  const encoded =
    encodeURIComponent(text);

  // remove spaces, +, dashes
  const number =
    RESTAURANT.whatsappNumber.replace(
      /\D/g,
      ""
    );

  return `https://api.whatsapp.com/send?phone=${number}&text=${encoded}`;
}

/* =========================
   ORDER URL
========================= */

export function whatsappOrderUrl(
  lines: CartLine[],
  info: CheckoutInfo
) {
  return buildWhatsAppUrl(
    buildOrderMessage(
      lines,
      info
    )
  );
}

/* =========================
   QUICK CHAT URL
========================= */

export function whatsappQuickUrl(
  text = "Hello, I would like to know more."
) {
  return buildWhatsAppUrl(text);
}
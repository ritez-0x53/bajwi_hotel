import { RESTAURANT, currency } from "./config";
import type { CartLine } from "./cart";

export type CheckoutInfo = {
  name: string;
  phone: string;
  address: string;
  note?: string;
};

export function buildOrderMessage(lines: CartLine[], info: CheckoutInfo) {
  const items = lines
    .map((l) => `${l.qty}x ${l.item.name} - ${currency(l.qty * l.item.price)}`)
    .join("\n");
  const total = lines.reduce((a, l) => a + l.qty * l.item.price, 0);

  return [
    `Hello ${RESTAURANT.name},`,
    `I would like to place an order:`,
    ``,
    items,
    ``,
    `Total: ${currency(total)}`,
    ``,
    `Customer Name: ${info.name}`,
    `Phone: ${info.phone}`,
    `Address: ${info.address}`,
    info.note ? `Note: ${info.note}` : ``,
    ``,
    `Please confirm my order.`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function whatsappOrderUrl(lines: CartLine[], info: CheckoutInfo) {
  const text = encodeURIComponent(buildOrderMessage(lines, info));
  return `https://wa.me/${RESTAURANT.whatsappNumber}?text=${text}`;
}

export function whatsappQuickUrl(text = "Hello, I would like to know more.") {
  return `https://wa.me/${RESTAURANT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

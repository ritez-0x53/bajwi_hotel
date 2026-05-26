import { useState } from "react";
import { X, Plus, Minus, Trash2, MessageCircle, Check, Truck, Store, MapPin } from "lucide-react";
import { useCart } from "@/lib/cart";
import { currency, RESTAURANT, BASE_DELIVERY_FEE, BASE_DISTANCE_KM, EXTRA_PER_KM, DELIVERY_AREAS } from "@/lib/config";
import { whatsappOrderUrl, deliveryFeeFor, type CheckoutInfo, type OrderType } from "@/lib/whatsapp";

export default function CartDrawer() {
  const { lines, total, isOpen, close, setQty, remove, clear, count } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [info, setInfo] = useState<Omit<CheckoutInfo, "orderType">>({
    name: "",
    phone: "",
    address: "",
    note: "",
    area: "",
    distanceKm: undefined,
  });

  const fee = deliveryFeeFor(orderType, info.distanceKm);
  const grandTotal = total + fee;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!info.name.trim() || !info.phone.trim() || lines.length === 0) return;
    if (orderType === "delivery" && (!info.address.trim() || !info.distanceKm)) return;
    const url = whatsappOrderUrl(lines, { ...info, orderType });
    setConfirmed(true);
    window.location.href = url;
    setTimeout(() => {
      clear();
      setConfirmed(false);
      setCheckout(false);
      close();
    }, 1500);
  };

  return (
    <>
      {/* backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[70] bg-background/80 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* drawer */}
      <aside
        className={`fixed top-0 right-0 z-[71] h-full w-full sm:w-[440px] glass-strong border-l border-gold/10 flex flex-col transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-border/50">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-soft">Your Order</div>
            <h3 className="font-display text-2xl">{checkout ? "Checkout" : `Cart (${count})`}</h3>
          </div>
          <button onClick={close} className="h-10 w-10 rounded-full glass grid place-items-center" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="flex-1 grid place-items-center px-6 text-center">
            <div className="scale-in">
              <div className="mx-auto h-20 w-20 rounded-full gradient-gold grid place-items-center shadow-glow pulse-gold">
                <Check className="h-10 w-10 text-primary-foreground" />
              </div>
              <h4 className="mt-6 font-display text-2xl">Sending to WhatsApp…</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {RESTAURANT.name} will confirm your order shortly.
              </p>
            </div>
          </div>
        ) : !checkout ? (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {lines.length === 0 && (
                <div className="text-center text-muted-foreground py-20">
                  Your cart is empty.
                  <div className="mt-4">
                    <button onClick={close} className="px-5 py-2.5 rounded-full glass hover-lift text-sm">Browse Menu</button>
                  </div>
                </div>
              )}
              {lines.map((l) => (
                <div key={l.item.id} className="glass rounded-2xl p-3 flex gap-3 items-center">
                  <img src={l.item.image} alt={l.item.name} className="h-16 w-16 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{l.item.name}</div>
                    <div className="text-xs text-muted-foreground">{currency(l.item.price)} each</div>
                    <div className="mt-2 inline-flex items-center gap-2 glass rounded-full p-1">
                      <button onClick={() => setQty(l.item.id, l.qty - 1)} className="h-7 w-7 rounded-full grid place-items-center hover:bg-secondary"><Minus className="h-3.5 w-3.5" /></button>
                      <span className="text-sm w-5 text-center">{l.qty}</span>
                      <button onClick={() => setQty(l.item.id, l.qty + 1)} className="h-7 w-7 rounded-full grid place-items-center hover:bg-secondary"><Plus className="h-3.5 w-3.5" /></button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gradient-gold">{currency(l.item.price * l.qty)}</div>
                    <button onClick={() => remove(l.item.id)} className="mt-2 text-muted-foreground hover:text-destructive" aria-label="Remove">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-border/50 p-5 space-y-4">
                <OrderTypeToggle value={orderType} onChange={setOrderType} />

                {orderType === "delivery" && (
                  <div className="glass rounded-2xl p-3.5 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-gold-soft font-medium">
                      <MapPin className="h-3.5 w-3.5" />
                      Delivery Areas
                    </div>
                    <div className="text-muted-foreground">
                      Available for: {DELIVERY_AREAS.join(", ")}
                    </div>
                    <div className="text-muted-foreground">
                      {currency(BASE_DELIVERY_FEE)} for within {BASE_DISTANCE_KM} km • +{currency(EXTRA_PER_KM)} per extra km
                    </div>
                  </div>
                )}

                <div className="space-y-1.5 text-sm">
                  <Row label="Subtotal" value={currency(total)} />
                  <Row
                    label={orderType === "pickup" ? "Pickup" : "Delivery"}
                    value={fee === 0 ? "FREE" : currency(fee)}
                    accent={fee === 0}
                  />
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">Total</span>
                    <span className="font-display text-2xl text-gradient-gold">{currency(grandTotal)}</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  {orderType === "pickup"
                    ? `Ready in 20–30 min • Pickup from ${RESTAURANT.address}`
                    : `Delivery in 30–45 min • ${currency(BASE_DELIVERY_FEE)} within ${BASE_DISTANCE_KM} km`}
                </div>

                <button
                  onClick={() => setCheckout(true)}
                  className="w-full h-13 py-4 rounded-full gradient-gold text-primary-foreground font-semibold hover-lift shadow-glow inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        ) : (
          <form onSubmit={submit} className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
            <OrderTypeToggle value={orderType} onChange={setOrderType} />

            {orderType === "delivery" && (
              <div className="glass rounded-2xl p-3.5 text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-gold-soft font-medium">
                  <MapPin className="h-3.5 w-3.5" />
                  Delivery Areas
                </div>
                <div className="text-muted-foreground">
                  Available for: {DELIVERY_AREAS.join(", ")}
                </div>
                <div className="text-muted-foreground">
                  {currency(BASE_DELIVERY_FEE)} for within {BASE_DISTANCE_KM} km • +{currency(EXTRA_PER_KM)} per extra km
                </div>
              </div>
            )}

            <Field label="Full Name" required value={info.name} onChange={(v) => setInfo({ ...info, name: v })} placeholder="John Doe" />
            <Field label="Phone Number" required type="tel" value={info.phone} onChange={(v) => setInfo({ ...info, phone: v })} placeholder="9876543210" />

            {orderType === "delivery" ? (
              <>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Area / Location<span className="text-gold ml-1">*</span>
                  </span>
                  <div className="mt-1.5">
                    <select
                      required
                      value={info.area}
                      onChange={(e) => setInfo({ ...info, area: e.target.value })}
                      className="w-full glass rounded-2xl px-4 py-3 text-sm outline-none focus:border-gold/60 transition bg-transparent"
                    >
                      <option value="" disabled>Select your area</option>
                      {DELIVERY_AREAS.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </label>
                <Field
                  label="Approximate Distance (km)"
                  required
                  type="number"
                  min={1}
                  step={0.5}
                  value={info.distanceKm?.toString() ?? ""}
                  onChange={(v) => setInfo({ ...info, distanceKm: v ? parseFloat(v) : undefined })}
                  placeholder="e.g. 2.5"
                />
                <Field label="Delivery Address" required value={info.address} onChange={(v) => setInfo({ ...info, address: v })} placeholder="House no, street, area, landmark" textarea />
              </>
            ) : (
              <div className="glass rounded-2xl p-4 text-sm">
                <div className="text-[11px] uppercase tracking-[0.2em] text-gold-soft">Pickup From</div>
                <div className="mt-1 font-medium">{RESTAURANT.name}</div>
                <div className="text-muted-foreground">{RESTAURANT.address}, {RESTAURANT.city}</div>
              </div>
            )}

            <Field label="Note (optional)" value={info.note ?? ""} onChange={(v) => setInfo({ ...info, note: v })} placeholder="Less spicy, no onion, ring bell..." textarea />

            <div className="glass rounded-2xl p-4 text-sm space-y-1">
              {lines.map((l) => (
                <div key={l.item.id} className="flex justify-between text-muted-foreground">
                  <span>{l.qty}× {l.item.name}</span>
                  <span>{currency(l.qty * l.item.price)}</span>
                </div>
              ))}
              <div className="border-t border-border/60 pt-2 mt-2 space-y-1">
                <Row label="Subtotal" value={currency(total)} muted />
                <Row label={orderType === "pickup" ? "Pickup" : "Delivery"} value={fee === 0 ? "FREE" : currency(fee)} muted accent={fee === 0} />
                <div className="flex justify-between font-display text-lg pt-1">
                  <span>Total</span>
                  <span className="text-gradient-gold">{currency(grandTotal)}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setCheckout(false)} className="flex-1 h-12 rounded-full glass hover-lift text-sm">Back</button>
              <button type="submit" className="flex-[2] h-12 rounded-full gradient-gold text-primary-foreground font-semibold hover-lift shadow-glow inline-flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5" />
                {orderType === "pickup" ? "Place Pickup Order" : "Place Delivery Order"}
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground text-center pt-1">
              You'll be redirected to WhatsApp to confirm your order with {RESTAURANT.name}.
            </p>
          </form>
        )}
      </aside>
    </>
  );
}

function OrderTypeToggle({ value, onChange }: { value: OrderType; onChange: (v: OrderType) => void }) {
  const opts: { v: OrderType; label: string; sub: string; icon: React.ReactNode }[] = [
    { v: "delivery", label: "Delivery", sub: `${currency(BASE_DELIVERY_FEE)} + per km`, icon: <Truck className="h-4 w-4" /> },
    { v: "pickup", label: "Pickup", sub: "FREE • Ready in 20–30 min", icon: <Store className="h-4 w-4" /> },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 glass rounded-2xl p-1.5">
      {opts.map((o) => {
        const active = value === o.v;
        return (
          <button
            key={o.v}
            type="button"
            onClick={() => onChange(o.v)}
            className={`rounded-xl px-3 py-2.5 text-left transition ${
              active
                ? "gradient-gold text-primary-foreground shadow-glow"
                : "hover:bg-secondary/60"
            }`}
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              {o.icon}
              {o.label}
            </div>
            <div className={`text-[10px] mt-0.5 ${active ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {o.sub}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function Row({ label, value, muted, accent }: { label: string; value: string; muted?: boolean; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={muted ? "text-muted-foreground" : "text-sm text-muted-foreground"}>{label}</span>
      <span className={accent ? "text-emerald-400 font-semibold" : "font-medium"}>{value}</span>
    </div>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text", required, textarea, min, step,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
  type?: string; required?: boolean; textarea?: boolean; min?: number | string; step?: number | string;
}) {
  const cls = "w-full glass rounded-2xl px-4 py-3 text-sm outline-none focus:border-gold/60 transition";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </span>
      <div className="mt-1.5">
        {textarea ? (
          <textarea required={required} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={2} className={cls} />
        ) : (
          <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} min={min} step={step} className={cls} />
        )}
      </div>
    </label>
  );
}

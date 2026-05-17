import biryani from "@/assets/biryani.jpg";
import tandoori from "@/assets/tandoori.jpg";
import paneer from "@/assets/paneer.jpg";
import noodles from "@/assets/noodles.jpg";
import dessert from "@/assets/dessert.jpg";
import chai from "@/assets/chai.jpg";
import snacks from "@/assets/snacks.jpg";
import paratha from "@/assets/paratha.png";
import roti from "@/assets/roti.png";
import rotisabji from "@/assets/rotisabji.png";
import purisabji from "@/assets/purisabji.png";
import blacktea from "@/assets/blacktea.png";
import milktea from "@/assets/milktea.png";
import specialmilktea from "@/assets/specialmilktea.png";
import blackcoffee from "@/assets/blackcoffee.png";
import milkcoffee from "@/assets/milkcoffee.png";
import lassi from "@/assets/lassi.png";
import greentea from "@/assets/greentea.png";
import vegroll from "@/assets/vegroll.png";
import eggroll from "@/assets/eggroll.png";
import paneerroll from "@/assets/paneerroll.png";
import chickenroll from "@/assets/chickenroll.png";
import porkroll from "@/assets/porkroll.png";
import vegchowmein from "@/assets/vegchowmein.png";
import eggchowmein from "@/assets/eggchowmein.png";
import chickenchowmein from "@/assets/chickenchowmein.png";
import porkchowmein from "@/assets/porkchowmein.png";
import chickenbiryani from "@/assets/chickenbiryani.png";
import eggbiryani from "@/assets/eggbiryani.png";
import muttonbiryani from "@/assets/muttonbiryani.png";
import porkbiryani from "@/assets/porkbiryani.png";
import vegbiryani from "@/assets/vegbiryani.png";
import paneerbiryani from "@/assets/paneerbiryani.png";
import localfish from "@/assets/localfish.png";
import fishfry from "@/assets/fishfry.png";
import smallfishfry from "@/assets/smallfishfry.png";






export type Category =
  | "Breakfast"
  | "Beverage"
  | "Roll"
  | "Chowmein"
  | "Biryani"
  | "Veg"
  | "Non-Veg"
  | "Dry Fry"
  | "Rice"
  | "Egg"
  | "Fish"
  | "Salad"
  | "Pakora";

export const CATEGORIES: Category[] = [
  "Breakfast",
  "Beverage",
  "Roll",
  "Chowmein",
  "Biryani",
  "Veg",
  "Non-Veg",
  "Dry Fry",
  "Rice",
  "Egg",
  "Fish",
  "Salad",
  "Pakora",
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  veg: boolean;
  spice: 0 | 1 | 2 | 3;
  featured?: boolean;
  signature?: boolean;
};

export const MENU: MenuItem[] = [
  // Breakfast
  {
    id: "bf1",
    name: "Paratha",
    description: "Traditional layered paratha served hot with authentic dhaba flavor.",
    price: 80,
    category: "Breakfast",
    image: paratha,
    veg: true,
    spice: 1,
  },
  {
    id: "bf2",
    name: "Roti",
    description: "Fresh tandoor-style roti served per piece.",
    price: 20,
    category: "Breakfast",
    image: roti,
    veg: true,
    spice: 0,
  },
  {
    id: "bf3",
    name: "Roti Sabji",
    description: "Soft rotis served with flavorful seasonal vegetable curry.",
    price: 60,
    category: "Breakfast",
    image: rotisabji,
    veg: true,
    spice: 1,
  },
  {
    id: "bf4",
    name: "Puri Sabji",
    description: "Crispy puris paired with spicy potato sabji.",
    price: 80,
    category: "Breakfast",
    image: purisabji,
    veg: true,
    spice: 1,
  },

  // Beverage
  {
    id: "bev1",
    name: "Black Tea",
    description: "Classic Assamese-style black tea served fresh.",
    price: 10,
    category: "Beverage",
    image: blacktea,
    veg: true,
    spice: 0,
  },
  {
    id: "bev2",
    name: "Milk Tea",
    description: "Traditional milk tea with rich aroma and smooth taste.",
    price: 20,
    category: "Beverage",
    image: milktea,
    veg: true,
    spice: 0,
  },
  {
    id: "bev3",
    name: "Special Milk Tea",
    description: "Premium creamy milk tea brewed with signature spices.",
    price: 50,
    category: "Beverage",
    image: specialmilktea,
    veg: true,
    spice: 0,
    featured: true,
  },
  {
    id: "bev4",
    name: "Black Coffee",
    description: "Freshly brewed strong black coffee.",
    price: 30,
    category: "Beverage",
    image: blackcoffee,
    veg: true,
    spice: 0,
  },
  {
    id: "bev5",
    name: "Milk Coffee",
    description: "Smooth milk coffee with rich roasted flavor.",
    price: 50,
    category: "Beverage",
    image: milkcoffee,
    veg: true,
    spice: 0,
  },
  {
    id: "bev6",
    name: "Lassi",
    description: "Refreshing chilled yogurt drink served traditional style.",
    price: 80,
    category: "Beverage",
    image: lassi,
    veg: true,
    spice: 0,
  },
  {
    id: "bev7",
    name: "Green Tea",
    description: "Light and refreshing green tea for a healthy sip.",
    price: 50,
    category: "Beverage",
    image: greentea,
    veg: true,
    spice: 0,
  },

  // Roll
  {
    id: "r1",
    name: "Veg Roll",
    description: "Stuffed vegetable roll wrapped in soft paratha.",
    price: 60,
    category: "Roll",
    image: vegroll,
    veg: true,
    spice: 1,
  },
  {
    id: "r2",
    name: "Egg Roll",
    description: "Classic egg roll with onion and sauces.",
    price: 80,
    category: "Roll",
    image: eggroll,
    veg: false,
    spice: 1,
  },
  {
    id: "r3",
    name: "Chicken Roll",
    description: "Juicy chicken filling wrapped in flaky paratha.",
    price: 130,
    category: "Roll",
    image: chickenroll,
    veg: false,
    spice: 2,
  },
  {
    id: "r4",
    name: "Paneer Roll",
    description: "Soft paneer stuffing with fresh vegetables and sauces.",
    price: 120,
    category: "Roll",
    image: paneerroll,
    veg: true,
    spice: 1,
  },
  {
    id: "r5",
    name: "Pork Roll",
    description: "Smoky pork filling wrapped in freshly cooked roll.",
    price: 140,
    category: "Roll",
    image: porkroll,
    veg: false,
    spice: 2,
  },

  // Chowmein
  {
    id: "c1",
    name: "Veg Chowmein",
    description: "Wok-tossed noodles with fresh vegetables and sauces.",
    price: 80,
    category: "Chowmein",
    image: vegchowmein,
    veg: true,
    spice: 1,
  },
  {
    id: "c2",
    name: "Egg Chowmein",
    description: "Classic stir-fried noodles with scrambled egg.",
    price: 100,
    category: "Chowmein",
    image: eggchowmein,
    veg: false,
    spice: 1,
  },
  {
    id: "c3",
    name: "Chicken Chowmein",
    description: "Street-style noodles tossed with tender chicken strips.",
    price: 140,
    category: "Chowmein",
    image: chickenchowmein,
    veg: false,
    spice: 2,
  },
  {
    id: "c4",
    name: "Pork Chowmein",
    description: "Flavor-packed chowmein with smoky pork pieces.",
    price: 150,
    category: "Chowmein",
    image: porkchowmein,
    veg: false,
    spice: 2,
  },

  // Biryani
  {
    id: "b1",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice layered with spiced chicken and herbs.",
    price: 260,
    category: "Biryani",
    image: chickenbiryani,
    veg: false,
    spice: 2,
  },
  {
    id: "b2",
    name: "Egg Biryani",
    description: "Flavorful biryani cooked with boiled eggs and aromatic spices.",
    price: 180,
    category: "Biryani",
    image: eggbiryani,
    veg: false,
    spice: 1,
  },
  {
    id: "b3",
    name: "Mutton Biryani",
    description: "Rich and aromatic biryani layered with tender mutton pieces.",
    price: 350,
    category: "Biryani",
    image: muttonbiryani,
    veg: false,
    spice: 2,
  },
  {
    id: "b4",
    name: "Pork Biryani",
    description: "Unique Assamese-style pork biryani with bold spices.",
    price: 280,
    category: "Biryani",
    image: porkbiryani,
    veg: false,
    spice: 2,
  },
  {
    id: "b5",
    name: "Veg Biryani",
    description: "Garden-fresh vegetables layered with aromatic rice.",
    price: 150,
    category: "Biryani",
    image: vegbiryani,
    veg: true,
    spice: 1,
  },
  {
    id: "b6",
    name: "Paneer Biryani",
    description: "Delicious paneer cubes cooked with saffron rice and spices.",
    price: 230,
    category: "Biryani",
    image: paneerbiryani,
    veg: true,
    spice: 1,
  },

  // Fish
  {
    id: "f1",
    name: "Local Fish",
    description: "Fresh local river fish cooked in traditional style.",
    price: 120,
    category: "Fish",
    image: localfish,
    veg: false,
    spice: 2,
  },
  {
    id: "f2",
    name: "Fish Fry",
    description: "Golden crispy fish fry with local spices.",
    price: 190,
    category: "Fish",
    image: fishfry,
    veg: false,
    spice: 2,
  },
  {
    id: "f3",
    name: "Small Fish Fry",
    description: "Crispy fried small fish packed with flavor.",
    price: 180,
    category: "Fish",
    image: smallfishfry,
    veg: false,
    spice: 2,
  },

  // // Salad
  // {
  //   id: "s1",
  //   name: "Green Salad",
  //   description: "Fresh garden salad with crunchy vegetables.",
  //   price: 80,
  //   category: "Salad",
  //   image: salad,
  //   veg: true,
  //   spice: 0,
  // },

  // // Egg
  // {
  //   id: "e1",
  //   name: "Egg Poach",
  //   description: "Soft poached eggs served fresh.",
  //   price: 60,
  //   category: "Egg",
  //   image: egg,
  //   veg: false,
  //   spice: 0,
  // },
  // {
  //   id: "e2",
  //   name: "Masala Omelette",
  //   description: "Spicy masala omelette with onions and herbs.",
  //   price: 70,
  //   category: "Egg",
  //   image: egg,
  //   veg: false,
  //   spice: 1,
  // },
  // {
  //   id: "e3",
  //   name: "Plain Omelette",
  //   description: "Classic fluffy plain omelette.",
  //   price: 50,
  //   category: "Egg",
  //   image: egg,
  //   veg: false,
  //   spice: 0,
  // },
  // {
  //   id: "e4",
  //   name: "Egg Masala",
  //   description: "Boiled eggs cooked in rich masala gravy.",
  //   price: 180,
  //   category: "Egg",
  //   image: egg,
  //   veg: false,
  //   spice: 2,
  // },
  // {
  //   id: "e5",
  //   name: "Egg Tarka",
  //   description: "Dal tarka topped with egg preparation.",
  //   price: 180,
  //   category: "Egg",
  //   image: egg,
  //   veg: false,
  //   spice: 1,
  // },
  // {
  //   id: "e6",
  //   name: "Egg Bhujia",
  //   description: "Scrambled egg bhujia with onions and spices.",
  //   price: 60,
  //   category: "Egg",
  //   image: egg,
  //   veg: false,
  //   spice: 1,
  // },

  // // Rice
  // {
  //   id: "fr1",
  //   name: "Plain Rice",
  //   description: "Steamed plain rice served fresh.",
  //   price: 60,
  //   category: "Rice",
  //   image: rice,
  //   veg: true,
  //   spice: 0,
  // },
  // {
  //   id: "fr2",
  //   name: "Jeera Rice",
  //   description: "Aromatic cumin flavored rice.",
  //   price: 100,
  //   category: "Rice",
  //   image: rice,
  //   veg: true,
  //   spice: 0,
  // },
  // {
  //   id: "fr3",
  //   name: "Pork Fried Rice",
  //   description: "Fried rice tossed with smoky pork pieces.",
  //   price: 170,
  //   category: "Rice",
  //   image: rice,
  //   veg: false,
  //   spice: 2,
  // },
  // {
  //   id: "fr4",
  //   name: "Veg Fried Rice",
  //   description: "Classic vegetable fried rice with sauces.",
  //   price: 130,
  //   category: "Rice",
  //   image: rice,
  //   veg: true,
  //   spice: 1,
  // },
  // {
  //   id: "fr5",
  //   name: "Egg Fried Rice",
  //   description: "Egg fried rice cooked in wok style.",
  //   price: 150,
  //   category: "Rice",
  //   image: rice,
  //   veg: false,
  //   spice: 1,
  // },
  // {
  //   id: "fr6",
  //   name: "Chicken Fried Rice",
  //   description: "Flavorful fried rice with juicy chicken.",
  //   price: 170,
  //   category: "Rice",
  //   image: rice,
  //   veg: false,
  //   spice: 2,
  // },
  // {
  //   id: "fr7",
  //   name: "Mixed Fried Rice",
  //   description: "Special mixed fried rice loaded with flavors.",
  //   price: 200,
  //   category: "Rice",
  //   image: rice,
  //   veg: false,
  //   spice: 2,
  // },
  // {
  //   id: "fr8",
  //   name: "Paneer Fried Rice",
  //   description: "Paneer tossed fried rice with Indian spices.",
  //   price: 170,
  //   category: "Rice",
  //   image: rice,
  //   veg: true,
  //   spice: 1,
  // },

  // // Pakora
  // {
  //   id: "pk1",
  //   name: "Veg Pakora",
  //   description: "Crispy mixed vegetable pakoras.",
  //   price: 150,
  //   category: "Pakora",
  //   image: pakora,
  //   veg: true,
  //   spice: 1,
  // },
  // {
  //   id: "pk2",
  //   name: "Onion Pakora",
  //   description: "Crunchy onion fritters served hot.",
  //   price: 150,
  //   category: "Pakora",
  //   image: pakora,
  //   veg: true,
  //   spice: 1,
  // },
  // {
  //   id: "pk3",
  //   name: "Paneer Pakora",
  //   description: "Crispy paneer fritters with spicy coating.",
  //   price: 180,
  //   category: "Pakora",
  //   image: pakora,
  //   veg: true,
  //   spice: 1,
  // },
];
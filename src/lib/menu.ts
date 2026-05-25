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
import pakora1 from "@/assets/pakora1.png";
import pakora2 from "@/assets/pakora2.png";
import pakora3 from "@/assets/pakora3.png";
import paneerbuttermasala from "@/assets/paneerbuttermasala.png";
import matarpaneer from "@/assets/matarpaneer.png";
import paneermasala from "@/assets/paneermasala.png";
import chillipaneer from "@/assets/chillipaneer.png";
import dalfry from "@/assets/dalfry.png";
import plaindal from "@/assets/plaindal.png";
import plaintarka from "@/assets/plaintarka.png";
import chickenbuttermasala from "@/assets/chickenbuttermasala.png";
import chicken from "@/assets/chicken.png";
import muttoncurry from "@/assets/muttoncurry.png";
import duckcurry from "@/assets/duckcurry.png";
import porkcurry from "@/assets/porkcurry.png";
import pigeoncurry from "@/assets/pigeoncurry.png";
import chickendryfry from "@/assets/chickendryfry.png";
import chillichicken from "@/assets/chillichicken.png";
import porkdryfry from "@/assets/porkdryfry.png";
import greensalad from "@/assets/greensalad.png";
import eggpoach from "@/assets/eggpoach.png";
import masalaomelette from "@/assets/masalaomelette.png";
import plainomelette from "@/assets/plainomelette.png";
import eggmasala from "@/assets/eggmasala.png";
import eggtarka from "@/assets/eggtarka.png";
import eggbhujia from "@/assets/eggbhujia.png";
import plainrice from "@/assets/plainrice.png";
import jeerarice from "@/assets/jeerarice.png";
import porkfriedrice from "@/assets/porkfriedrice.png";
import vegfriedrice from "@/assets/vegfriedrice.png";
import eggfriedrice from "@/assets/eggfriedrice.png";
import chickenfriedrice from "@/assets/chickenfriedrice.png";
import mixedfriedrice from "@/assets/mixedfriedrice.png";
import paneerfriedrice from "@/assets/paneerfriedrice.png"; 

export type Category =
  | "Breakfast"
  | "Beverage"
  | "Roll"
  | "Chowmein"
  | "Biryani"
  | "Pakora"
  | "Veg"
  | "Non-Veg"
  | "Dry Fry"
  | "Rice"
  | "Egg"
  | "Fish"
  | "Salad"
  | "Pulao";

export const CATEGORIES: Category[] = [
  "Breakfast",
  "Beverage",
  "Roll",
  "Chowmein",
  "Pakora",
  "Biryani",
  "Veg",
  "Non-Veg",
  "Dry Fry",
  "Pulao",
  "Rice",
  "Egg",
  "Fish",
  "Salad",
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

   // Pakora
  {
    id: "pk1",
    name: "Veg Pakora",
    description: "Crispy mixed vegetable pakoras.",
    price: 150,
    category: "Pakora",
    image: pakora1,
    veg: true,
    spice: 1,
  },
  {
    id: "pk2",
    name: "Onion Pakora",
    description: "Crunchy onion fritters served hot.",
    price: 150,
    category: "Pakora",
    image: pakora2,
    veg: true,
    spice: 1,
  },
  {
    id: "pk3",
    name: "Paneer Pakora",
    description: "Crispy paneer fritters with spicy coating.",
    price: 180,
    category: "Pakora",
    image: pakora3,
    veg: true,
    spice: 1,
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


  {
  id: "iv1",
  name: "Paneer Butter Masala",
  description: "Creamy paneer curry cooked in rich butter masala gravy.",
  price: 280,
  category: "Veg",
  image: paneerbuttermasala,
  veg: true,
  spice: 2,
},
{
  id: "iv2",
  name: "Matar Paneer",
  description: "Paneer and green peas cooked in flavorful curry.",
  price: 260,
  category: "Veg",
  image: matarpaneer,
  veg: true,
  spice: 2,
},
{
  id: "iv3",
  name: "Paneer Masala",
  description: "Soft paneer cubes cooked in spicy masala gravy.",
  price: 220,
  category: "Veg",
  image: paneermasala,
  veg: true,
  spice: 2,
},
{
  id: "iv4",
  name: "Chilli Paneer",
  description: "Spicy Indo-Chinese paneer tossed with vegetables.",
  price: 300,
  category: "Veg",
  image: chillipaneer,
  veg: true,
  spice: 3,
},
{
  id: "iv5",
  name: "Dal Fry",
  description: "Yellow lentils tempered with aromatic Indian spices.",
  price: 120,
  category: "Veg",
  image: dalfry,  
  veg: true,
  spice: 1,
},
{
  id: "iv6",
  name: "Plain Dal",
  description: "Simple and comforting traditional lentil curry.",
  price: 50,
  category: "Veg",
  image: plaindal,
  veg: true,
  spice: 1,
},
{
  id: "iv7",
  name: "Plain Tarka",
  description: "Dal tarka cooked with garlic and Indian seasoning.",
  price: 150,
  category: "Veg",
  image: plaintarka,
  veg: true,
  spice: 2,
},

// non veg items

{
  id: "inv1",
  name: "Chicken Butter Masala",
  description: "Creamy chicken curry cooked in rich butter masala gravy.",
  price: 300,
  category: "Non-Veg",
  image : chickenbuttermasala,
  veg: false,
  spice: 2,
},
{
  id: "inv2",
  name: "Chicken Handi",
  description: "Traditional chicken curry cooked in handi style.",
  price: 280,
  category: "Non-Veg",
  image : chicken,
  veg: false,
  spice: 2,
},
{
  id: "inv3",
  name: "Kadai Chicken",
  description: "Spicy kadai chicken cooked with capsicum and onions.",
  price: 280,
  category: "Non-Veg",
  image : chicken,
  veg: false,
  spice: 3,
},
{
  id: "inv4",
  name: "Chicken Masala",
  description: "Classic chicken curry cooked with Indian spices.",
  price: 250,
  category: "Non-Veg",
  image : chicken,
  veg: false,
  spice: 2,
},
{
  id: "inv5",
  name: "Chicken Do Pyaza",
  description: "Chicken cooked with double onion and aromatic spices.",
  price: 240,
  category: "Non-Veg",
  image : chicken,
  veg: false,
  spice: 2,
},
{
  id: "inv6",
  name: "Chicken Bharta",
  description: "Shredded chicken cooked in rich spicy gravy.",
  price: 360,
  category: "Non-Veg",
  image : chicken,    
  veg: false,
  spice: 3,
},
{
  id: "inv7",
  name: "Local Chicken Curry",
  description: "Traditional local-style chicken curry with spices.",
  price: 300,
  category: "Non-Veg",
  image : chicken,
  veg: false,
  spice: 2,
},
{
  id: "inv8",
  name: "Mutton Curry",
  description: "Tender mutton cooked in flavorful curry gravy.",
  price: 350,
  category: "Non-Veg",
  image : muttoncurry,
  veg: false,
  spice: 3,
},
{
  id: "inv9",
  name: "Duck Curry",
  description: "Rich and flavorful duck curry with local spices.",
  price: 350,
  category: "Non-Veg",
  image : duckcurry,  
  veg: false,
  spice: 3,
},
{
  id: "inv10",
  name: "Pork Curry",
  description: "Traditional pork curry slow-cooked with spices.",
  price: 150,
  category: "Non-Veg",
  image : porkcurry,
  veg: false,
  spice: 2,
},
{
  id: "inv11",
  name: "Pigeon Curry",
  description: "Authentic pigeon curry cooked with aromatic spices.",
  price: 280,
  category: "Non-Veg",
  image : pigeoncurry,
  veg: false,
  spice: 3,
},
{
  id: "inv12",
  name: "Chicken Curry",
  description: "Homestyle chicken curry with rich Indian flavors.",
  price: 150,
  category: "Non-Veg",
  image : chicken,
  veg: false,
  spice: 2,
},

// dry fry items
{
  id: "df1",
  name: "Chicken Dry Fry",
  description: "Crispy chicken dry fry tossed with spicy masala.",
  price: 280,
  category: "Dry Fry",
  image : chickendryfry,
  veg: false,
  spice: 3,
},
{
  id: "df2",
  name: "Chilly Chicken",
  description: "Spicy chilly chicken cooked in Indo-Chinese style.",
  price: 300,
  category: "Dry Fry",
  image : chillichicken,
  veg: false,
  spice: 3,
},
{
  id: "df3",
  name: "Pork Dry Fry",
  description: "Flavorful pork dry fry with smoky spices.",
  price: 260,
  category: "Dry Fry",
  image : porkdryfry,
  veg: false,
  spice: 2,
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
  
  {
  id: "s1",
  name: "Green Salad",
  description: "Fresh cucumber, onion, carrot, and tomato salad.",
  price: 80,
  category: "Salad",
  image: greensalad,
  veg: true,
  spice: 0,
},

{
  id: "p4",
  name: "Chicken Pulao",
  description: "Flavorful chicken pulao with aromatic spices.",
  price: 280,
  category: "Pulao",
  image : chickenbiryani,
  veg: false,
  spice: 2,
},
{
  id: "p3",
  name: "Paneer Pulao",
  description: "Delicious pulao cooked with soft paneer cubes.",
  price: 240,
  category: "Pulao",
  image : paneerbiryani,
  veg: true,
  spice: 1,
},
{
  id: "p1",
  name: "Veg Pulao",
  description: "Fragrant basmati rice cooked with fresh vegetables.",
  price: 160,
  category: "Pulao",
  image : vegbiryani,
  veg: true,
  spice: 1,
},

{
  id: "e1",
  name: "Egg Poach",
  description: "Soft and perfectly cooked egg poach served hot.",
  price: 60,
  category: "Egg",
  image: eggpoach,
  veg: false,
  spice: 0,
},
{
  id: "e2",
  name: "Masala Omelette",
  description: "Spicy masala omelette with onions and herbs.",
  price: 70,
  category: "Egg",
  image: masalaomelette,
  veg: false,
  spice: 2,
},
{
  id: "e3",
  name: "Plain Omelette",
  description: "Classic fluffy plain omelette cooked fresh.",
  price: 50,
  category: "Egg",
  image: plainomelette,
  veg: false,
  spice: 0,
},
{
  id: "e4",
  name: "Egg Masala",
  description: "Boiled eggs cooked in rich spicy masala gravy.",
  price: 180,
  category: "Egg",
  image: eggmasala,
  veg: false,
  spice: 2,
},
{
  id: "e5",
  name: "Egg Tarka",
  description: "Egg tarka cooked with dal and aromatic spices.",
  price: 180,
  category: "Egg",
  image: eggtarka,
  veg: false,
  spice: 2,
},
{
  id: "e6",
  name: "Egg Bhujia",
  description: "Scrambled egg bhujia cooked with onions and spices.",
  price: 60,
  category: "Egg",
  image: eggbhujia,
  veg: false,
  spice: 1,
},

{
  id: "fr1",
  name: "Plain Rice",
  description: "Steamed plain rice served fresh and hot.",
  price: 60,
  category: "Rice",
  image: plainrice,
  veg: true,
  spice: 0,
},
{
  id: "fr2",
  name: "Jeera Rice",
  description: "Aromatic rice tempered with cumin and spices.",
  price: 100,
  category: "Rice",
  image: jeerarice,
  veg: true,
  spice: 0,
},
{
  id: "fr3",
  name: "Pork Fried Rice",
  description: "Flavorful fried rice tossed with juicy pork pieces.",
  price: 170,
  category: "Rice",
  image: porkfriedrice,
  veg: false,
  spice: 2,
},
{
  id: "fr4",
  name: "Veg Fried Rice",
  description: "Classic vegetable fried rice with fresh veggies.",
  price: 130,
  category: "Rice",
  image: vegfriedrice,
  veg: true,
  spice: 1,
},
{
  id: "fr5",
  name: "Egg Fried Rice",
  description: "Fried rice mixed with scrambled egg and spices.",
  price: 150,
  category: "Rice",
  image: eggfriedrice,
  veg: false,
  spice: 1,
},
{
  id: "fr6",
  name: "Chicken Fried Rice",
  description: "Delicious fried rice cooked with chicken pieces.",
  price: 170,
  category: "Rice",
  image: chickenfriedrice,
  veg: false,
  spice: 2,
},
{
  id: "fr7",
  name: "Mixed Fried Rice",
  description: "Special mixed fried rice loaded with meats and veggies.",
  price: 200,
  category: "Rice",
  image: mixedfriedrice,
  veg: false,
  spice: 2,
},
{
  id: "fr8",
  name: "Paneer Fried Rice",
  description: "Paneer fried rice tossed with spices and vegetables.",
  price: 170,
  category: "Rice",
  image: mixedfriedrice,
  veg: true,
  spice: 1,
},

];
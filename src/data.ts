/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  price?: string;
  description?: string;
  image?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    title: "Nos Sandwichs (~9€)",
    items: [
      { id: "s1", name: "Kebab", description: "100% veau fait maison" },
      { id: "s2", name: "Tacos", price: "10€", description: "Avec tranches de cheddar" },
      { id: "s3", name: "Galette", description: "Fine et croustillante" },
      { id: "s4", name: "Kofte", description: "Recette traditionnelle" },
      { id: "s5", name: "Merguez", description: "Épicées juste ce qu'il faut" },
      { id: "s6", name: "Américain", description: "Le classique" },
      { id: "s7", name: "Steak", description: "Bœuf grillé" },
      { id: "s8", name: "Sucuk", description: "Saucisson turc ailé" },
    ]
  },
  {
    title: "Nos Menus (~13€)",
    items: [
      { id: "m1", name: "Menu Kebab" },
      { id: "m2", name: "Menu Kofte" },
      { id: "m3", name: "Menu Steak" },
      { id: "m4", name: "Menu Tacos", price: "14€" },
      { id: "m5", name: "Menu Merguez" },
      { id: "m6", name: "Menu Sucuk" },
      { id: "m7", name: "Menu Galette" },
      { id: "m8", name: "Menu Américain" },
    ]
  },
  {
   title: "Nos Assiettes",
      items: [
        { id: "a1", name: "Assiette Kebab", price: "15€ / 13€", description: "Sur place / Emporter" },
        { id: "a2", name: "Assiette Kofte", price: "15€ / 13€", description: "Sur place / Emporter" },
        { id: "a3", name: "Assiette Steak", price: "15€ / 13€", description: "Sur place / Emporter" },
        { id: "a4", name: "Assiette Mixte", price: "15€ / 13€", description: "Sur place / Emporter" },
        { id: "a5", name: "Assiette Patron", price: "20€", description: "La spéciale du chef" }
      ],
  },
  {
    title: "Menu Enfant (9€)",
    items: [
      { id: "me1", name: "Le P'tit Devran", description: "4 Nuggets ou 2 Tenders + Petite frite + Capri-Sun + Jouet" },
    ]
  },
  {
    title: "Nos Barquettes",
    items: [
      { id: "b1", name: "Barquette de viande (Petite)", price: "12€" },
      { id: "b2", name: "Barquette de viande (Grande)", price: "15€" },
    ]
  },
  {
    title: "Desserts (3€)",
    items: [
      { id: "d1", name: "Tiramisu" },
    ]
  }
];

export const DRINKS = [
  "Coca-Cola", "Fanta", "Sprite", "Oasis", "Ice Tea", "Capri-Sun", "Ayran", "Orangina", "Perrier", "Eau", "Café", "Thé turc (offert)", "Et bien d'autres..."
];

export const SAUCES = [
  "Blanche maison", "Samouraï", "Algérienne", "Harissa", "Ketchup", "Mayonnaise", "Andalouse"
];

export const navItemsLeft = [
  { id: 1, href: "/catalog", name: "catalog", categories: [
    {
      id: 1,
      category: "All Clothes",
      href: "/catalog/all-clothing"
    },
    {
      id: 2,
      category: "dresses",
      href: "catalog/dresses",  
      categoryItems: [
        {
          id: 1,
          name: "Evening Dresses",
          href: "/catalog/evening-dresses"
        },
        {
          id: 2,
          name: "Casual Dresses",
          href: "/catalog/casual-dresses"
        },
        {
          id: 3,
          name: "Cocktail Dresses",
          href: "/catalog/cocktail-dresses"
        },
        {
          id: 4,
          name: "Maxi Dresses",
          href: "/catalog/maxi-dresses"
        },
        {
          id: 5,
          name: "Midi Dresses",
          href: "/catalog/midi-dresses"
        },
        {
          id: 6,
          name: "Mini Dresses",
          href: "/catalog/mini-dresses"
        },
      ]
    },
    {
      id: 3,
      category: "tops",
      href: "catalog/tops",
      categoryItems: [
        {
          id: 1,
          name: "Blouses & Shirts",
          href: "/catalog/blouses-shirts"
        },
        {
          id: 2,
          name: "T-Shirts & Tank Tops",
          href: "/catalog/t-shirts-tank-tops"
        },
        {
          id: 3,
          name: "Sweaters & Knits",
          href: "/catalog/sweaters-knits"
        },
        {
          id: 4,
          name: "Hoodies & Sweatshirts",
          href: "/catalog/hoodies-sweatshirts"
        },
      ]
    },
    {
      id: 4,
      category: "Bottoms",
      href: "catalog/bottoms",
      categoryItems: [
        {
          id: 1,
          name: "Pants & Jeans",
          href: "/catalog/pants-jeans"
        },
        {
          id: 2,
          name: "Skirts",
          href: "/catalog/skirts"
        },
        {
          id: 3,
          name: "Shorts",
          href: "/catalog/shorts"
        },
      ]
    },
    {
      id: 5,
      category: "Outerwear",
      href: "catalog/outerwear",
      categoryItems: [
        {
          id: 1,
          name: "Coats & Jackets",
          href: "/catalog/coats-jackets"
        },
        {
          id: 2,
          name: "Blazers",
          href: "/catalog/blazers"
        },
        {
          id: 3,
          name: "Trench Coats",
          href: "/catalog/trench-coats"
        },
      ]
    },
    {
      id: 6,
      category: "Accessories",
      href: "catalog/accessories",
      categoryItems: [
        {
          id: 1,
          name: "Bags",
          href: "/catalog/bags"
        },
        {
          id: 2,
          name: "Belts",
          href: "/catalog/belts"
        },
        {
          id: 3,
          name: "Scarves",
          href: "/catalog/scarves"
        },
      ]
    },
  ] },
  { id: 2, href: "/new in", name: "new in", categories: [] },
  { id: 3, href: "/trends", name: "trends"},
  { id: 4, href: "/blog", name: "blog"},
];

export const navItemsRight = [
  { id: 1, href: "/search", name: "search"},
  { id: 2, href: "/login", name: "login" },
  { id: 3, href: "/favorite", name: "favorite"},
  { id: 4, href: "/cart", name: "cart"},
];

interface RollItem {
    name: string;
    price: string;
    description: string;
    image: string;
    alt: string; // Add alt for accessibility
    leaf: boolean; // Add leaf tag
}

// Maki Category
export const maki: RollItem[] = [
    {
        name: "Spicy Tuna Maki",
        price: "$5",
        description: "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
        image: "/menu/spicy_tuna_maki.png",
        alt: "Spicy Tuna Maki roll with avocado and cucumber.",
        leaf: false // Leaf tag
    },
    {
        name: "Mango Maki",
        price: "$5",
        description: "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
        image: "/menu/mango_maki.png",
        alt: "Mango Maki roll with tempura shrimp, avocado, and cream cheese.",
        leaf: true // Leaf tag
    },
    {
        name: "Salmon Maki",
        price: "$5",
        description: "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
        image: "/menu/salmon_maki.png",
        alt: "Salmon Maki roll with mushrooms and avocado.",
        leaf: false // Leaf tag
    },
    {
        name: "Tuna Maki",
        price: "$5",
        description: "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
        image: "/menu/tuna_maki.png",
        alt: "Tuna Maki roll with julienned vegetables.",
        leaf: false // Leaf tag
    }
];

// UraMaki Category
export const uramaki: RollItem[] = [
    {
        name: "Volcano Delight",
        price: "$12",
        description: "Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.",
        image: "/menu/volcano_delight.png",
        alt: "Volcano Delight roll topped with spicy tuna and sriracha sauce.",
        leaf: false // Leaf tag
    },
    {
        name: "Rainbow Fusion",
        price: "$12",
        description: "A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.",
        image: "/menu/rainbow_fusion.png",
        alt: "Rainbow Fusion roll with tuna, salmon, yellowtail, and avocado.",
        leaf: false // Leaf tag
    },
    {
        name: "Dragon Elegance",
        price: "$12",
        description: "Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.",
        image: "/menu/dragon_elegance.png",
        alt: "Dragon Elegance roll with grilled eel and avocado.",
        leaf: false // Leaf tag
    },
    {
        name: "Sunset Serenity",
        price: "$12",
        description: "Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.",
        image: "/menu/sunset_serenity.png",
        alt: "Sunset Serenity roll with tempura shrimp and mango.",
        leaf: false // Leaf tag
    },
    {
        name: "Mystic Garden",
        price: "$12",
        description: "Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.",
        image: "/menu/mystic_garden.png",
        alt: "Mystic Garden roll with mushrooms, asparagus, and sesame seeds.",
        leaf: false // Leaf tag
    },
    {
        name: "Ocean Breeze",
        price: "$12",
        description: "A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.",
        image: "/menu/ocean_breeze.png",
        alt: "Ocean Breeze roll with shrimp, crab stick, and avocado.",
        leaf: false // Leaf tag
    },
    {
        name: "Tokyo Blossom",
        price: "$12",
        description: "Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.",
        image: "/menu/tokyo_blossom.png",
        alt: "Tokyo Blossom roll with tuna and edible flower petals.",
        leaf: false // Leaf tag
    }
];

// Special Rolls Category
export const specialRolls: RollItem[] = [
    {
        name: "Sunrise Bliss",
        price: "$16",
        description: "A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.",
        image: "/menu/sunrise_bliss.png",
        alt: "Sunrise Bliss roll with salmon, cream cheese, and tobiko.",
        leaf: true // Leaf tag
    },
    {
        name: "Mango Tango",
        price: "$16",
        description: "Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.",
        image: "/menu/mango_tango.png",
        alt: "Mango Tango roll with tempura shrimp, avocado, and mango slices.",
        leaf: false // Leaf tag
    },
    {
        name: "Truffle Indulgence",
        price: "$16",
        description: "Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.",
        image: "/menu/truffle_indulgence.png",
        alt: "Truffle Indulgence roll with black truffle, wagyu beef, and microgreens.",
        leaf: true // Leaf tag
    },
    {
        name: "Pacific Firecracker",
        price: "$16",
        description: "Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.",
        image: "/menu/pacific_firecracker.png",
        alt: "Pacific Firecracker roll with spicy crab, shrimp, and jalapeño.",
        leaf: true // Leaf tag
    },
    {
        name: "Eternal Eel",
        price: "$16",
        description: "An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.",
        image: "/menu/eternal_eel.png",
        alt: "Eternal Eel roll with eel tempura, foie gras, and truffle oil.",
        leaf: false // Leaf tag
    }
];

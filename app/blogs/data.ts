import { StaticImageData } from "next/image";
import Blog1 from "@/public/blogs/blog1.png";
import Blog2 from "@/public/blogs/blog2.png";
import Blog3 from "@/public/blogs/blog3.png";
import Blog4 from "@/public/blogs/blog4.png";
import Blog5 from "@/public/blogs/blog5.png";

import Blog1Bg from "@/public/blogs/blog1_bg.png";
import Blog2Bg from "@/public/blogs/blog2_bg.png";
import Blog3Bg from "@/public/blogs/blog3_bg.png";
import Blog4Bg from "@/public/blogs/blog4_bg.png";
import Blog5Bg from "@/public/blogs/blog5_bg.png";

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    cardImage: StaticImageData;
    pageImage: StaticImageData,
    date: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'How Qitchen Redefines Flavor Harmony in Every Bite',
        description: "Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors.",
        cardImage: Blog1,
        pageImage: Blog1Bg,
        date: 'Aug 31, 2023',
        content: `
        <h2>Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
        <p>In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you're not merely entering an eatery; you're immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.</p>

        <h2>Crafting a Feast for the Senses</h2>
        <p>The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchen's passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece.</p>
        <p>The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; it's a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.</p>

        <h2>Beyond Sushi: Nurturing Connections</h2>
        <p>While the gastronomic delights are undoubtedly the centerpiece, Qitchen goes beyond being a culinary haven. It's a place that fosters connections, where conversations flow as smoothly as the sake, and moments turn into cherished memories. The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter, and stories over a beautifully laid table.</p>
        <p>The Qitchen experience transcends the physical walls of the restaurant. It's an invitation to step out of the ordinary and into a world where passion for food is an art, and every guest is a cherished canvas. Through the symphony of flavors, the artistry of presentation, and the warmth of connection, Qitchen invites you to witness passion personified in every aspect of your dining journey.</p>
      `,
    },
    {
        id: '2',
        title: 'Unveiling the Mastery Behind Our Culinary Craftsmanship',
        description: "Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection.",
        cardImage: Blog2,
        pageImage: Blog2Bg,
        date: 'Jun 7, 2023',
        content: `
        <h2>Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
        <p>Another paragraph for blog 1...</p>
      `,
    },
    {
        id: '3',
        title: 'Journey through Freshness Exquisite Sushi Selection',
        description: "Embark on a seafood adventure, guided by Qitchen's fresh and exquisite sushi creations from the sea.",
        cardImage: Blog3,
        pageImage: Blog3Bg,
        date: 'April 15, 2023',
        content: `
        <h2>Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
        <p>Another paragraph for blog 1...</p>
      `,
    },
    {
        id: '4',
        title: "Palate with Qitchen's Unsurpassed Sushi Delicacies",
        description: "Discover the heights of gastronomic delight as Qitchen's sushi transports you to a new culinary realm.",
        cardImage: Blog4,
        pageImage: Blog4Bg,
        date: 'Mar 19, 2023',
        content: `
        <h2>Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
        <p>Another paragraph for blog 1...</p>
      `,
    },
    {
        id: '5',
        title: "The Qitchen Experience Beyond Sushi",
        description: "Immerse in Qitchen's passion for culinary excellence, where sushi is more than a dish—it's an experience.",
        cardImage: Blog5,
        pageImage: Blog5Bg,
        date: 'Dec 28, 2022',
        content: `
        <h2>Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
        <p>Another paragraph for blog 1...</p>
      `,
    },

];
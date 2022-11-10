import { images } from "../assets";

import {AiOutlineVerticalLeft} from 'react-icons/ai';


export const CategoryData = [
    {
        id: 1,
        Title: "Electronics",
        Price: 49.99,
        Img: images.modelHeadsetI,
        icon: <AiOutlineVerticalLeft/>,
        
    },
    {
        id: 2,
        Title: "Travel",
        Price: 15.99,
        Img: images.travelI,
        icon: <AiOutlineVerticalLeft/>,
        
    },
    {
        id: 3,
        Title: "I am a Gamer",
        Price: 59.99,
        Img: images.Speaker,
        icon: <AiOutlineVerticalLeft/>,
        
    },
    {
        id: 4,
        Title: "Speakers",
        Price: 19.99,
        Img: images.GamePad,
        icon: <AiOutlineVerticalLeft/>,
        
    }
];

export const ProductData = [
    {
        id: "1",
        name: 'Toy Car',
        category: 'Kids choice',
        product: images.product1,
        price: "$10",
    },
    {
        id: "2",
        name: 'Dark Sun Glasses',
        category: 'Clothing Assesories',
        product: images.product2,
        price: "$12",
    },
    {
        id: "3",
        name: 'Classic Wrist Watch',
        category: 'Clothing Assesories',
        product: images.product3,
        price: "$57.99",
    },
    {
        id: "4",
        name: 'Nike AIR',
        product: images.product4,
        category: 'Clothing Assesories',
        price: "$98.99",
    },
]

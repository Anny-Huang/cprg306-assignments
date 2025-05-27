"use client";
import useState from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let currentQuantity = quantity.valueof();
        if (currentQuantity < 20 ) {
            setQuantity(currentQuantity + 1);
        }        
    }

    const decrement = () => {
        let currentQuantity = quantity.valueof();
        if (currentQuantity > 1) {
            setQuantity(currentQuantity - 1);
        }
    }
 
}
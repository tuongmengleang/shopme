import { useState, createContext } from "react";
import Child1 from "./Child1";

export const UserContext = createContext();
// export const ProductContext = createContext();

export default function Parent() {
    const [user] = useState('John Deo')
    const [product] = useState([
        { id: '0001', name: 'Coca Cola', price: 25 },
        { id: '0002', name: 'Sting', price: 25 },
    ])

    return (
        <UserContext.Provider value={{ user, product }}>
            <Child1 />
        </UserContext.Provider>
    );
}
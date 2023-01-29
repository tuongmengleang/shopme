import Child3 from "./Child3";
import { useContext } from 'react'
import { UserContext } from './Parent';

export default function Child2() {
    const { user, product } = useContext(UserContext)
    return (
        <>
            <h1>Child 2</h1>
            <h1>{ user }</h1>
            {
                product.map((item, index) => {
                    return <h3 key={index}>{ item.name }</h3>
                })
            }
            <Child3 />
        </>
    );
}
import Child2 from "./Child2";
// import { useContext } from 'react'
// import { ProductContext } from './Parent'

export default function Child1() {
    // const p = useContext(ProductContext)

    return (
        <>
            <h1>Child 1</h1>
            {/* {
                p.map((item, index) => {
                    return <h3 key={index}>{ item.name }</h3>
                })
            } */}
            <Child2 />
        </>
    );
}
import { useContext } from 'react'
import { UserContext } from './Parent'

export default function Child3() {
    const { user } = useContext(UserContext)

    return (
        <>
            <h1>Child 3</h1>
            <h2>{user}</h2>
        </>
    );
}
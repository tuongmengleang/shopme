import { useEffect, useState } from 'react'
import axios from 'axios'
import CardProduct from '../components/CardProduct/CardProduct'

export default function NewArrival() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(process.env.REACT_APP_API_URL + '/products')
            .then((data) => {
                setData(data.data)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <div className="container" style={{ marginTop: '20px' }}>
                {
                    isLoading 
                    ? 
                        <h1>Loading Fetch Data</h1> 
                    :
                        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: '15px', }}>
                            { 
                                data.map((item) => {
                                    return <CardProduct key={item.id} name={item.title} image={item.image} />
                                })
                            }
                        </div>
                }
            </div>
        </>
    )
}
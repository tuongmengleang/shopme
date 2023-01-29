import useFetch from "../hooks/useFetch";
import CardProduct from "../components/CardProduct/CardProduct";

export default function Collection() {
    const [data] = useFetch(`${process.env.REACT_APP_API_URL}/products?limit=12`)

    return (
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: '15px', marginTop: '20px' }}>
                { 
                    data && data.map((item) => {
                        return <CardProduct key={item.id} name={item.title} image={item.image} />
                    })
                }
            </div>
        </div>
    );
}
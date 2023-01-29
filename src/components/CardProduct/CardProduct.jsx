import './index.scss';

export default function CardProduct({ name, image }) {
    return (
        <div className="card">
            <div className="card-cover">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h6 className="title">
                    { name }
                </h6>
            </div>
        </div>
    );
}
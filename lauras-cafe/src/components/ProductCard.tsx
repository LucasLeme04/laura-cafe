import '../components/components-style.css';
import '../App.css';


function ProductCard(props: { img: string; titulo: string; descricao: string; sabor: string }) {
    const { img, titulo, descricao, sabor } = props;

    return (
        <div className="product-card h-100">
            <div className="product-card-image-container">
                <img src={img} alt={titulo} className="product-card-img" />
            </div>

            <div className="product-card-body">
                <p className="text-muted lato-regular mb-1">Cafés</p>
                <h3 className="playfair-display-regular">{titulo}</h3>
                <p className="product-description-text lato-regular">{descricao}</p>
                <p className="lato-regular fw-bold card-sabor">Sabor: <span className="fw-normal">{sabor}</span></p>
            </div>
        </div>
    );
}

export default ProductCard;
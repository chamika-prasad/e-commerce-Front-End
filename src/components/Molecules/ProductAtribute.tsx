import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import formatCurrency from "../../utilities/formatCurrency"

type ProductAtributeProps = {
    productId: number
    name: string
    categoryId: number
    description: string
    stock:number
    categoryName:string
    price:number
}

export default function ProductAtribute({productId,name,categoryId,description,stock,categoryName,price} : ProductAtributeProps){

    return (
        
            <Card>
            <Link to={`/ProductDetail/${productId}`}><Card.Img 
                variant="top" 
                src='https://picsum.photos/1000/667'
                height="200px"
                style={{objectFit:"cover"}}
                /></Link>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2">{name}</span>
                        <span className="ms-2 text-muted">{formatCurrency (price)}</span>
                    </Card.Title>
                    <Card.Text>{categoryName}</Card.Text>
                </Card.Body>
            </Card>
        
    )
}

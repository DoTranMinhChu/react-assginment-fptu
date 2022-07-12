import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export default function Detail({ data }) {
    return (
        <Card>
            <CardImg
                alt="Card image cap"
                src={`assets/${data.image}`}
                top
                width="100%"
            />
            <CardBody>
                <CardSubtitle
                    className="mb-2 text-muted text-center  "
                    tag="h6"
                >
                    {data.category}
                </CardSubtitle>
                <CardTitle tag="h5" className="text-center">
                    {data.name}
                </CardTitle>

                <CardText className='text-center'>
                    Price : {data.price}
                </CardText>
            </CardBody>
        </Card>
    )
}
import { Card , CardImg , CardBody , CardTitle , CardSubtitle ,CardText,Button} from 'reactstrap';

export default function Detail({data}) {
    return (
        <Card>
            <CardImg
                alt="Card image cap"
                src={`assets/${data.image}`}
                top
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">
                    {data.name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                     {data.category}
                </CardSubtitle>
                <CardText>
                   Price : {data.price}
                </CardText>
                <Button>
                    Buy
                </Button>
            </CardBody>
        </Card>
    )
}
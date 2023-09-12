import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  const handleSelect = () => {
    props.setSelectBook(props.book.asin);
  };

  let cardClass = props.book.asin === props.id ? "border-2 border-danger " : "border-2 border-secondary";
  return (
    <>
      <Card
        className={cardClass}
        // style={{ border: this.props.book.asin === this.props.id ? "3px solid red " : "3px solid grey" }}
      >
        <Card.Img
          className="card-img-fluid"
          style={{ height: " 200px", objectFit: "contain" }}
          variant="top"
          src={props.book.img}
          onClick={() => {
            handleSelect();
          }}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{props.book.title}</Card.Title>
          <Card.Text>${props.book.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;

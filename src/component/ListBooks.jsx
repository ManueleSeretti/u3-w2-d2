import { Alert, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const ListBooks = (props) => {
  // state = {
  //   name: "",
  //   bookSearch: this.props.books,
  //   selectBook: { id: null, selected: false },
  // };

  const [name, setName] = useState("");
  const [bookSearch, setBookSearch] = useState(props.books);
  const [selectID, setSelectID] = useState(null);

  const setSelectBook = (id) => {
    setSelectID(id);
  };

  const filterBookList = (valore) => {
    const bookFilter = props.books.filter((book) => book.title.toLowerCase().includes(valore));
    setBookSearch(bookFilter);
  };

  const HandleChange = (valore) => {
    setName({ valore });
    filterBookList(valore);
  };

  return (
    <>
      <Container fluid className=" bg-warning bg-opacity-25 pt-3">
        <InputGroup className="my-3">
          <InputGroup.Text>Find a book</InputGroup.Text>
          <Form.Control
            value={name}
            type="text"
            placeholder="Inserisci il titolo"
            onChange={(e) => {
              HandleChange(e.target.value);
            }}
          />
        </InputGroup>
        <Row className="g-3">
          <Col className="col-6 col-md-8">
            <Row className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-3">
              {bookSearch.map((book, index) => (
                <Col key={index}>
                  <SingleBook book={book} id={selectID} setSelectBook={setSelectBook} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col className="col-6 col-md-4">
            {selectID ? (
              <CommentArea id={selectID} setSelectBook={setSelectBook} />
            ) : (
              <Alert variant="info">clicca su un libro per visualizzare i commenti</Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListBooks;

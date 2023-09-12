import { Alert, Button, ListGroup } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentList = (props) => {
  const handleDelete = async (event, id) => {
    event.preventDefault();
    try {
      const resp = await fetch(URL + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTgwZGMwMzRmZjAwMTQwM2Y0ZjMiLCJpYXQiOjE2OTQwODgzNTcsImV4cCI6MTY5NTI5Nzk1N30.vrJTCqAqY2RHrfENaHsCahiSPiXPbIGG0RZTWaBGmrQ",
        },
      });
    } catch (error) {
      console.log(error);
    }
    props.fetchComment();
  };

  return (
    <ListGroup className="p-2 bg-secondary">
      <h5 className="text-info">Lista dei commenti:</h5>
      {props.list.length === 0 && <Alert variant="info">Non ci sono commenti al momento</Alert>}
      {props.list.map((comm, index) => (
        <ListGroup.Item className="text-start" key={index}>
          Autore : {comm.author} <br />
          Commento : {comm.comment} <br />
          Rate : {comm.rate}
          <Button
            className="ms-5"
            variant="danger"
            onClick={(event) => {
              handleDelete(event, comm._id);
            }}
          >
            delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;

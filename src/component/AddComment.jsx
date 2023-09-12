import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = (props) => {
  // state = {
  //   comment: "",
  //   rate: "",
  //   elementId: this.props.id,
  // };
  const [comm, setComm] = useState({ comment: "", rate: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({ ...comm, elementId: props.id }),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTgwZGMwMzRmZjAwMTQwM2Y0ZjMiLCJpYXQiOjE2OTQwODgzNTcsImV4cCI6MTY5NTI5Nzk1N30.vrJTCqAqY2RHrfENaHsCahiSPiXPbIGG0RZTWaBGmrQ",
        },
      });
      if (resp.ok) {
        setComm({ comment: "", rate: "" });
      }
    } catch (error) {
      console.log(error);
    }
    props.fetchComment();
  };

  return (
    <Form className="mt-2 border bg-dark p-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label className="text-white">Aggiungi un Commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="commenta"
          required
          value={comm.comment}
          onChange={(e) => {
            setComm({ ...comm, comment: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select
          aria-label="Default select example"
          required
          value={comm.rate}
          onChange={(e) => {
            setComm({ ...comm, rate: e.target.value });
          }}
        >
          <option>Seleziona un voto da 1 a 5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;

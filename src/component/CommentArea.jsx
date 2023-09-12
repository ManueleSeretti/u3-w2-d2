import { useEffect, useState } from "react";

import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Spinner } from "react-bootstrap";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTgwZGMwMzRmZjAwMTQwM2Y0ZjMiLCJpYXQiOjE2OTQwODgzNTcsImV4cCI6MTY5NTI5Nzk1N30.vrJTCqAqY2RHrfENaHsCahiSPiXPbIGG0RZTWaBGmrQ",
  },
};
const CommentArea = (props) => {
  // state = {
  //   listComment: [],
  //   working: false,
  // };
  const [listComment, setListComment] = useState([]);
  const [working, setWorking] = useState(false);

  const fetchComment = async () => {
    setWorking(true);
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/books/" + props.id + "/comments/", options);
      const comment = await resp.json();
      // const commentOK = comment.filter((c) => c.elementId === props.id);
      setListComment(comment);
      setWorking(false);
    } catch (error) {}
  };

  // const componentDidMount = () => {
  //   this.fetchComment();
  // };

  // const componentDidUpdate = (prevProps) => {
  //   if (prevProps.id !== this.props.id) {
  //     this.fetchComment();
  //   }
  // };
  useEffect(() => {
    fetchComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  return (
    <>
      {working ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <>
          <CommentList list={listComment} fetchComment={fetchComment} />
          <AddComment id={props.id} fetchComment={fetchComment} />
        </>
      )}
    </>
  );
};

export default CommentArea;

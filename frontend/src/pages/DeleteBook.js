import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import "./deleteBook.css";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:8080/books/${id}`)
      .then(() => {
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
        console.log('Book deleted succesfully')
        navigate("/");
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="container">
      <BackButton />
      <div className="delete-container">
        <h3 className="confirmation-message">
          Are you sure you want to delete this book?
        </h3>
        <button className="delete-button" onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;

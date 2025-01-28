import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalComponent } from "../components/Card";

const Guard = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!token) {
      setShowModal(true);
    }
  }, [token]);

  const closeModal = () => {
    setShowModal(false);
    navigate("/"); // Redirecting to login page after closing the modal
  };

  return (
    <>
      {showModal && <ModalComponent setTest={closeModal} />}
      {!showModal && children}
    </>
  );
};

export default Guard;

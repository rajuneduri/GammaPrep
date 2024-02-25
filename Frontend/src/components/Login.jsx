import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import "../Stylesheet/Login.css"
import { useNavigate } from "react-router-dom";
function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/gamma/login/${formData.username}/${formData.password}`);
      if (response.data === 'exist') {
        console.log('Login successful');
        navigate("/login");
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    
    handleClose();
  };

  return (
    <>
      <Button className="btn-login" variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Email</label>
              <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <Button variant="primary" type="submit">Log In</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    const userData = { fullName, email, password };

    try {
      const response = await axios.post('http://localhost:8080/gamma/add', userData);
      console.log(response);

      if (response.status === 200) {
        console.log('Signup successful');
        handleClose();
        toast.success('Signup successful', { theme: 'dark' });
        console.log(userData);
        // Attempt to close the tab
        
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      console.log(userData);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Signup;

import "./App.css";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap Nav Bar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Acerca de</Nav.Link>
            <NavDropdown title="Lista de servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Servicio 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Servicio 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Servicio 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1>App con Bootstrap</h1>

      <Button variant="danger" className="m-2">
        Botón
      </Button>
      <>
        <Button variant="primary" onClick={handleShow}>
          Ver modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Título de la ventana modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Texto dentro de la ventana modal </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <div className="divForm">
        <h2>Formulario:</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese su nombre"
            />
            <Form.Control.Feedback type="invalid">
              Proporciona tu nombre
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formApellidos">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" placeholder="Ingrese sus apellidos" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />
          </Form.Group>

          <Form.Group controlId="formDireccion">
            <Form.Label>Dirección Postal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su dirección postal"
            />
          </Form.Group>

          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ingrese su número de teléfono"
            />
          </Form.Group>

          <Form.Group controlId="formFechaNacimiento">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;

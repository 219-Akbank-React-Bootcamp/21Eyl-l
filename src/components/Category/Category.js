import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap/';
import { useState } from 'react';

//düzenle, silme butonu eklenip statuler gelecek
const Category = ({ category }) => {
    const [show, setShow] = useState(false);
    const [newStatus, setNewStatus] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    function handleAddStatus(){
        category.status.push(newStatus)
        console.log(category)
    }

    return (

        <div>
            {category.name}
            <>
                <Button variant="primary" onClick={handleShow}>
                    Statü Belirle
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kategori Statüsü Ekle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={(e) => {
                                    setNewStatus(e.target.value);
                                }}
                                value={newStatus} type="text" placeholder="name@example.com" />
                        </Form.Group>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Kapat
                        </Button>
                        <Button variant="primary" onClick={handleAddStatus}>
                            Ekle
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        </div>
    )
}

export default Category
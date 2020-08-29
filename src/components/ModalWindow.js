import React, {useState} from "react";
import {Row, Button, Modal, Col, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import * as axios from "axios";


const ModalWindow = () => {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {register, handleSubmit} = useForm();


    const onSubmit = data => {
        let file = data.file
        for (let key in file) {
            console.log(file[key].name)
        }
        axios.post('https://jsonplaceholder.typicode.com/users', data)
            .then(res => console.log(res))
    }

    return (
        <>
            <Button className="modal_btn" variant="primary" onClick={handleShow}>
                Відкрити модальне вікно
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Заповніть форму</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={7}>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group controlId="Name_Input">
                                    <Form.Label>Введіть ім'я</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Ваше ім'я:"
                                                  ref={register({required: true})}/>
                                </Form.Group>

                                <Form.Group controlId="Email_Input">
                                    <Form.Label>Введіть Email:</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="name@example.com"
                                                  ref={register({required: true})}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.File id="file" name="file" multiple={true}
                                               label="Виберіть файли для відправки:" ref={register}/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Відправити
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalWindow;
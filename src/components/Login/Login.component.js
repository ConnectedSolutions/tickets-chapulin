import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'


export const LoginForm = ({handleOnChange, handleOnSubmit, username, password }) => {
    return (
        <Container className="cardy">
            <Row>
                <Col>
                    <h3 className="text-center">Login</h3>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnSubmit} >
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleOnChange}
                                placeholder="Enter your username"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleOnChange}
                                placeholder="Enter your password"
                                required
                            />
                        </Form.Group>
                        <Button className="btn-success mt-3"  type="submit">Login</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!">Forgot Password?</a>
                </Col>
            </Row>
        </Container>
    );
};

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

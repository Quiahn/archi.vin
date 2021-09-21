import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SignUp ({ setMsgAlerts, history, setUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    useEffect(() => {
        setEmail('')
        setPassword('')
        setPasswordConfirmation('')
    }, [])

    const onSignUp = (event) => {
        event.preventDefault()

        signUp({ email, password, passwordConfirmation })
            .then(() => signIn({ email: email, password: password, passwordConfirmation: passwordConfirmation }))
            .then((res) => setUser(res.data.user))
            .then(() =>
                setMsgAlerts(prev => [...prev, {
                    heading: 'Sign Up Success',
                    message: signUpSuccess,
                    variant: 'success'
                }])
            )
            .then(() => history.push('/'))
            .catch((error) => {
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
                setMsgAlerts(prev => [...prev, {
                    heading: 'Sign Up Failed with error: ' + error.message,
                    message: signUpFailure,
                    variant: 'danger'
                }])
            })
    }

    return (
        <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Sign Up</h3>
                <Form onSubmit={onSignUp}>
                    <Form.Group controlId='email' className="my-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId='password' className="my-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </Form.Group>
                    <Form.Group controlId='passwordConfirmation' className="my-4">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            required
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={(e) => { setPasswordConfirmation(e.target.value) }}
                        />
                    </Form.Group>
                    <Button variant='dark' type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default withRouter(SignUp)

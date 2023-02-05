import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory();

    const [message, setMessage] = useState('');
    const [pass, setPass] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const passChange = event =>{    
        setPass(event.target.value);
    }

    const openDashboard = (e) => {
        if ((message == "Swamibapa" || message == "swamibapa") && pass == "Guruhari") {
        history.push('/dashboard')
        }
        else{
            alert("enter valid Id and Password")
        }
    }

    return (
        <div className='bg-login'>
            <div className='position-absolute top-0 left-0 w-100 h-100 bg-layer'></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <img src="img/logo.png" alt="" className='w-50 mx-auto' />
                    </div>

                    <div className='col-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-4 text-center'>
                                <img src="img/boy-2.png" alt="" className='w-100' />
                            </div>
                            <div className='col-md-8'>
                                <div className='login-form '>
                                    <form>
                                        <div className='login-inner-form'>
                                            <h3 className='mb-4'>Login</h3>
                                            <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlInput1">
                                                <label>Username</label>
                                                <input type="text" placeholder="User Name" onChange={handleChange}
                                                    value={message} id='username' className='mb-3 py-3 text-xl' />
                                            </Form.Group>
                                            <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlInput1">
                                                <label>Password</label>
                                                <input type="password" onChange={passChange}
                                                    value={pass} placeholder="Password" id="pass" className='mb-3 py-3 text-xl' />
                                            </Form.Group>
                                            <button onClick={openDashboard}>Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

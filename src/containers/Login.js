import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SignUp = () => {
    const [formData, setFormData] = useState({
        email: "",
        full_name: "",
        password: "",
        password_confirmation: "",
      });
      const [responseMessage, setResponseMessage] = useState("");

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
const signup= async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(
          "http://ec2-52-89-2-154.us-west-2.compute.amazonaws.com:8400/api/v1/user/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        )
        if (response.ok) {
          const data = "Registered Successfully"
          setResponseMessage(data); 
        } else {
          setResponseMessage("Registration failed!"); 
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }


return (
    <>
        <div className="containers ml-4">
            <section className="d-flex justify-content-between">
                <div className="left_data " style={{ width: "100%" }}>
                    <div className="sign_img ">
                        <img src="crypto2.jpg" style={{ maxWidth: 680, height: 690 }} alt="" />
                        <div className="image-logo">
                            <img src="logo.png" alt="Logo" width="50" height="50" />
                            <text>GND CRYP</text>
                        </div>
                        <div className="image-text">
                            <p>One simple way to <br /> crypto exchange</p>
                        </div>
                    </div>
                </div>

                <div className="right_data " style={{ width: "100%" }}>
                    <h2>Sign Up</h2>
                    <Form onSubmit={signup}> 
                        <Form.Text className="text-muted">
                            Register with the right details to start  using the platform.
                        </Form.Text>
                        <Form.Group className="mb-4 col-lg-6" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>

                            <Form.Control name="full_Name" type="text" placeholder="Enter full name" value={formData.full_Name} onChange={handleChange} />

                        </Form.Group>
                        <Form.Group className="mb-4 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control  name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />

                        </Form.Group>

                        <Form.Group className="mb-4 col-lg-6" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-4 col-lg-6" controlId="formBasicPassword2">
                            <Form.Label> Confirmed Password</Form.Label>
                            <Form.Control name="password_confirmation" type="password" placeholder="confirmed Password" value={formData.password_confirmation} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Sign Up
                        </Button>
                    </Form>
                    {responseMessage && <p>{responseMessage}</p>}
                </div>
                
            </section>
           
        </div>
    </>
)

}
export default SignUp;
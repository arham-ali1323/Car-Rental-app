import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import Logo from '../assets/image/logo.svg';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate login API call
    try {
      // Replace with actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For demo purposes, accept any email/password
      if (formData.email && formData.password) {
        // Handle successful login (e.g., redirect to dashboard)
        console.log('Login successful');
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Handle social login
    console.log(`Login with ${provider}`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg border-0" style={{ borderRadius: '15px' }}>
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <motion.img
                      src={Logo}
                      alt="Car Rental Logo"
                      height="60"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <h2 className="mt-3 mb-1" style={{ color: '#333' }}>Welcome Back</h2>
                    <p className="text-muted">Sign in to your account</p>
                  </div>

                  {error && (
                    <Alert variant="danger" className="mb-3">
                      {error}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Form.Check
                        type="checkbox"
                        label="Remember me"
                        className="text-muted"
                      />
                      <a href="#" className="text-decoration-none" style={{ color: '#667eea' }}>
                        Forgot password?
                      </a>
                    </div>

                    <div className="mb-4 d-flex justify-content-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key - replace with your actual site key
                        onChange={(value) => setCaptchaValue(value)}
                        onExpired={() => setCaptchaValue(null)}
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 py-3"
                        disabled={loading || !captchaValue}
                        style={{
                          borderRadius: '10px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          border: 'none'
                        }}
                      >
                        {loading ? 'Signing In...' : 'Sign In'}
                      </Button>
                    </motion.div>
                  </Form>

                  <div className="text-center my-4">
                    <span className="text-muted">or continue with</span>
                  </div>

                  <Row className="g-2">
                    <Col xs={6}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline-primary"
                          className="w-100 d-flex align-items-center justify-content-center py-2"
                          onClick={() => handleSocialLogin('Facebook')}
                          style={{ borderRadius: '10px' }}
                        >
                          <FaFacebook className="me-2" />
                          Facebook
                        </Button>
                      </motion.div>
                    </Col>
                    <Col xs={6}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline-danger"
                          className="w-100 d-flex align-items-center justify-content-center py-2"
                          onClick={() => handleSocialLogin('Google')}
                          style={{ borderRadius: '10px' }}
                        >
                          <FaGoogle className="me-2" />
                          Google
                        </Button>
                      </motion.div>
                    </Col>
                    <Col xs={6}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline-warning"
                          className="w-100 d-flex align-items-center justify-content-center py-2"
                          onClick={() => handleSocialLogin('Instagram')}
                          style={{ borderRadius: '10px' }}
                        >
                          <FaInstagram className="me-2" />
                          Instagram
                        </Button>
                      </motion.div>
                    </Col>
                    <Col xs={6}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline-info"
                          className="w-100 d-flex align-items-center justify-content-center py-2"
                          onClick={() => handleSocialLogin('Twitter')}
                          style={{ borderRadius: '10px' }}
                        >
                          <FaTwitter className="me-2" />
                          Twitter
                        </Button>
                      </motion.div>
                    </Col>
                  </Row>

                  <div className="text-center mt-4">
                    <span className="text-muted">Don't have an account? </span>
                    <a href="#" className="text-decoration-none fw-bold" style={{ color: '#667eea' }}>
                      Sign up
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;

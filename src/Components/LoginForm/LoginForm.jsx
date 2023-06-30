import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/login`,
      data: values,
    })
      .then(function (response) {
        //handle success
        const { token } = response.data;
        localStorage.setItem("token", token);
        message.success("Inicio de sesión exitoso");
        window.location = "/profile";
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        message.error("Error al iniciar sesión");
      });
    setLoading(false);
  };

  return (
    <div className='container-center-items'>
      <h1>Inicio de Sesion</h1>
      <Form onFinish={handleLogin} onSubmit={(e) => e.preventDefault()}>
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu correo electrónico",
            },
            {
              type: "email",
              message: "Por favor ingresa un correo electrónico válido",
            },
          ]}>
          <Input placeholder='Correo electrónico' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            { required: true, message: "Por favor ingresa tu contraseña" },
          ]}>
          <Input.Password placeholder='Contraseña' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' loading={loading}>
            Iniciar sesión
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;

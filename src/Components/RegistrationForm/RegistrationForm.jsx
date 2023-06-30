import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (values) => {
    setLoading(true);

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/register`,
      data: values,
    })
      .then(function (response) {
        //handle success
        const { token } = response.data;
        localStorage.setItem("token", token);
        message.success("Registro exitoso");
        setTimeout(() => {
          window.location = "/login";
        }, "3000");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        message.error("Error al registrar");
      });
    setLoading(false);
  };

  return (
    <div className='container-center-items'>
      <Form onFinish={handleRegistration} onSubmit={(e) => e.preventDefault()}>
        <Form.Item
          name='fullName'
          rules={[
            { required: true, message: "Por favor ingresa tu nombre completo" },
          ]}>
          <Input placeholder='Nombre completo' />
        </Form.Item>
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
            {
              min: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          ]}>
          <Input.Password placeholder='Contraseña' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' loading={loading}>
            Registrarse
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;

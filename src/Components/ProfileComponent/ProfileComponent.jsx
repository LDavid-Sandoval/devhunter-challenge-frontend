import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileComponent = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/profile`,
        headers: {
          Authorization: "JWT " + token,
        },
      })
        .then(function (response) {
          //handle success
          setUserData(response.data);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      setLoading(false);
    };

    fetchProfileData();
  }, [token]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!userData) {
    return <div>Error al cargar los datos del perfil</div>;
  }

  return (
    <div className='container-center-items'>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: {userData.fullName}</p>
      <p>Email: {userData.email}</p>
      {/* Aquí puedes mostrar otros datos del perfil */}
    </div>
  );
};

export default ProfileComponent;

import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBInput,
} from "mdb-react-ui-kit";

import { useLocation } from "react-router-dom";
import { BASE_URL } from "../helpers/BaseUrl";
import SurveysService from "../services/SurveysService";

export default function CardRecomended(props) {
  const IMAGE_API_BASE_URL = `${BASE_URL}/images`;

  const [name, setName] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [email, setEmail] = useState(null);

  const {
    state: { surveyCreated, product },
  } = useLocation();

  const handleChangeName = (name) => {
    setName(name);
  };

  const handleChangeTelephone = (telephone) => {
    setTelephone(telephone);
  };

  const handleChangeEmail = (email) => {
    setEmail(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = { name: name, telephone: telephone, email: email };

      await SurveysService.update(surveyCreated.id, body);

      setName(null);
      setTelephone(null);
      window.location.href = "https://www.vitalcan.com/";
    } catch (error) {
      console.error(error);
    }
  };

  return (

      <MDBContainer breakpoint="sm">
        <div className="d-flex justify-content-center" style={{'marginTop':'70px'}} >
          <MDBCol size="12">
            <MDBCard className="scroll-container">
              <form onSubmit={handleSubmit} className="" action="">
                <MDBCardBody>
                  <p className="text-center">
                    <strong>El producto recomendado para tu mascota es:</strong>
                  </p>
                  <hr />
                  <h3
                    className="text-center"
                    style={{
                      fontSize: "min(5vw, 32px)",
                      maxWidth: "90%",
                      margin: "0 auto",
                    }}
                  >
                    <strong>{product.name}</strong>
                  </h3>
                  <div>
                    <img
                      src={`${IMAGE_API_BASE_URL}/${product.image_name}`}
                      className="img-fluid hover-shadow mx-auto d-block"
                      alt="image_name"
                    />
                  </div>
                  <div style={{ position: "relative", margin: "0 auto" }}>
                    <hr />
                    <p className="text-center">
                      <strong>
                        Infórmate de las ultimas novedades y los mejores
                        cuidados para tu mascota con nosotros
                      </strong>
                    </p>
                    <hr />
                    <MDBInput
                      label="Nombre"
                      id="formControlLg"
                      type="text"
                      size="lg"
                      onChange={(e) => handleChangeName(e.target.value)} className="mt-1"
                    />
                  
                    <MDBInput
                      label="Email"
                      id="formControlLg"
                      type="email"
                      size="lg"
                      onChange={(e) => handleChangeEmail(e.target.value)} className="mt-1"
                    />
                  
                    <MDBInput
                      label="Telefono"
                      id="formControlLg"
                      type="number"
                      size="lg"
                      onChange={(e) => handleChangeTelephone(e.target.value)} className="mt-1"
                    />
                  </div>
                </MDBCardBody>
                <MDBCardFooter>
                  <div className="text-end">
                    <MDBBtn
                      style={{
                        borderColor: "#8C6DEF",
                        backgroundColor: "#8C6DEF",
                        boxShadow: "0 4px 9px -4px #8C6DEF",
                      }}
                      type="submit"
                    >
                      Finalizar
                    </MDBBtn>
                  </div>
                </MDBCardFooter>
              </form>
            </MDBCard>
          </MDBCol>
        </div>
      </MDBContainer>
  );
}

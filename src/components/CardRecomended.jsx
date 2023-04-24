import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

import { useLocation } from "react-router-dom";
import { BASE_URL } from "../helpers/BaseUrl";
import { useNavigate } from 'react-router-dom';
import SurveysService from "../services/SurveysService";

export default function CardRecomended(props) {
  const IMAGE_API_BASE_URL = `${BASE_URL}/images`;
  const navigate = useNavigate();


  const [name,setName] = useState(null)
  const [telephone,setTelephone] = useState(null)

  const {
    state: { surveyCreated, product },
  } = useLocation();

  const handleChangeName = (name) => {
    setName(name)
  };

  const handleChangeTelephone = (telephone) => {
    setTelephone(telephone)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();



    try {

        const body = {name: name, telephone: telephone}

      
        await SurveysService.update(surveyCreated.id,body);
        
        setName(null);
        setTelephone(null);
        navigate('/end');


    } catch (error) {
      

      console.error(error)
    
    }
};


  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="12">
          <MDBCard>
          <form  onSubmit={handleSubmit} className="" action="">
            <MDBCardBody>
                {/* <div className="text-center">
                  <MDBIcon far icon="file-alt mb-3 text-primary" size="4x" />
                </div>

                <hr /> */}

                <p className="text-center">
                  <strong>Producto recomendado</strong>
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
                      <strong>Nombre y número de contacto</strong>
                    </p>
                  <hr />
                  <MDBInput
                    label="Nombre"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    onChange={(e) => handleChangeName(e.target.value)}

                  />
                  <br />
                  <MDBInput
                    label="Telefono"
                    id="formControlLg"
                    type="number"
                    size="lg"
                    onChange={(e) => handleChangeTelephone(e.target.value)}

                  />
                  </div>
              </MDBCardBody>
              <MDBCardFooter>
                <div className="text-end">
                  <MDBBtn style={{borderColor: '#8C6DEF',backgroundColor: '#8C6DEF',boxShadow: '0 4px 9px -4px #8C6DEF'}} type="submit">Finalizar</MDBBtn>
                </div>
              </MDBCardFooter>
            </form>
            
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

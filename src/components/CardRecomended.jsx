import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../helpers/BaseUrl";

export default function CardRecomended(props) {
  const IMAGE_API_BASE_URL = `${BASE_URL}/images`;

  const {
    state: { surveyCreated, product },
  } = useLocation();

  console.log("image", product);

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="12">
          <MDBCard>
            <form className="" action="">
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
                  src={`${IMAGE_API_BASE_URL}/${product.image_id}`}
                  className="img-fluid hover-shadow mx-auto d-block"
                  alt="image_id"
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
                  />
                  <br />
                  <MDBInput
                    label="Telefono"
                    id="formControlLg"
                    type="number"
                    size="lg"
                  />
                  </div>
              </MDBCardBody>
              <MDBCardFooter>
                <div className="text-end">
                  <MDBBtn type="submit">Aceptar</MDBBtn>
                </div>
              </MDBCardFooter>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

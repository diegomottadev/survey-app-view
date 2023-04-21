import React from "react";
import {

  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";



export default function CardRecomended(props) {
 


   
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="12">
          <MDBCard>
            <MDBCardBody>
                <div className="text-center">
                  <MDBIcon far icon="file-alt mb-3 text-primary" size="4x" />
                </div>

                <hr /> 

                <p className="text-center">
                  <strong>Encuesta Finalizada!</strong>
                </p>
                <hr />
              </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

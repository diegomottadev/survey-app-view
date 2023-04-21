import React from "react";
import {

  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";



export default function PageNotExist(props) {
 
   
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="12">
          <MDBCard>
            <MDBCardBody>
            

                <h1 className="text-center">
                  <strong>Pagina no encontrada</strong>
                </h1>
        
              </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

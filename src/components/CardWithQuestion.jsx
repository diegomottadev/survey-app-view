import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,

} from "mdb-react-ui-kit";
import PetsService from "../services/PetsService";
import AgesService from "../services/AgesService";
import NecessitiesService from "../services/NecessitiesService";
import SizesServices from "../services/SizesServices";
import Swal from "sweetalert2";
import SurveysService from "../services/SurveysService";
import FormsService from "../services/FormsService";
import { useNavigate, useParams } from "react-router-dom";
import "./CardRecomended.css";
export default function CardWithQuestion() {
  const navigate = useNavigate();
  const { code } = useParams();
  const [pets, setPets] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [ages, setAges] = useState([]);
  const [necessities, setNecessities] = useState([]);

  const [pet, setPet] = useState(1);
  const [size, setSize] = useState(1);
  const [age, setAge] = useState(1);
  const [necessity, setNecessity] = useState(1);
  // const [product,setProduct] = useState(1)

  const [petName, setPetName] = useState("Perro");
  const [sizeName, setSizeName] = useState(null);
  const [ageName, setAgeName] = useState(null);
  const [necessityName, setNecessityName] = useState(null);

  useEffect(() => {
    async function loadPets() {
      try {
        const {
          data: { data: result },
        } = await PetsService.all();
        setPets(result);
      } catch (err) {
        console.log(err);
        console.warn("Hubo un problema con la carga del listado de mascotas");
      }
    }
    loadPets();
  }, []);

  useEffect(() => {
    async function loadAges() {
      try {
        const {
          data: { data: result },
        } = await AgesService.all(pet);

        setAges(result);
      } catch (err) {
        console.log(err);
        console.warn("Hubo un problema con la carga del listado de edades");
      }
    }

    if (pet) {
      loadAges();
    }
  }, [pet]);

  useEffect(() => {
    async function loadSizes() {
      try {
        const {
          data: { data: result },
        } = await SizesServices.all(pet);
        setSizes(result);
      } catch (err) {
        console.log(err);
        console.warn("Hubo un problema con la carga del listado de tamaños");
      }
    }

    if (pet) {
      loadSizes();
    }
  }, [pet]);

  useEffect(() => {
    async function loadNecessities() {
      try {
        const {
          data: { data: result },
        } = await NecessitiesService.all(pet);
        setNecessities(result);
      } catch (err) {
        console.log(err);
        console.warn(
          "Hubo un problema con la carga del listado de necesidades"
        );
      }
    }

    if (pet) {
      loadNecessities();
    }
  }, [pet]);

  const handleChangePet = (petId, petName) => {
    setPet(petId);
    setPetName(petName);
  };

  const handleChangeSize = (sizeId, sizeName) => {
    setSize(sizeId);
    setSizeName(sizeName);
  };

  const handleChangeAge = (ageId, ageName) => {
    setAge(ageId);
    setAgeName(ageName);
  };

  const handleChangeNecessity = (necessityId, necessityName) => {
    setNecessity(necessityId);
    setNecessityName(necessityName);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!pet || !size || !age || !necessity) {
      Swal.fire({
        title: "Error!",
        text: "No ha ingresado todas las respuestas",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      const dataGet = `pet=${petName}&size=${sizeName}&age=${ageName}&necessity=${necessityName}`;

      let {
        data: { data: responseForm },
      } = await FormsService.get(dataGet);

      let producRecommended = {
        name: responseForm.answer,
        image_name: responseForm.image_name,
      };

      const dataPost = {
        pet: petName,
        size: sizeName,
        age: ageName,
        necessity: necessityName,
        answer: responseForm.answer,
        client_code: code,
        image_name: parseInt(responseForm.image_name),
      };

      let {
        data: { data: response },
      } = await SurveysService.create(dataPost);

      setPet(1);
      setSize(1);
      setAge(1);
      setNecessity(1);
      setPetName("Perro");
      setSizeName(null);
      setAgeName(null);
      setNecessityName(null);

      navigate("/product", {
        replace: true,
        state: { surveyCreated: response, product: producRecommended },
      });
    } catch (error) {
      if (error.response.status === 404) {
        Swal.fire({
          title: "Lo sentimos.",
          text: error.response.data.message,
          icon: "warning",
          confirmButtonText: "Aceptar",
        });
      }

      console.error(error);
    }
  };

  if (pets && pets.length === 0) {
    return <div>Cargando...</div>;
  }

  /**
   *
   * Controlar que el codigo de cliente ingresado exista
   */

  if (!code) {
    navigate("/");
  }

  return (
    <MDBContainer breakpoint="sm " style={{'marginTop':'70px'}} >
        <div className="d-flex justify-content-center">
          <MDBCol size="12">
            <MDBCard className="scroll-container">
              <form onSubmit={handleSubmit}  action="" >
                <MDBCardBody>
                  <div className="text-center">
                    {/* <MDBIcon
                      far
                      icon="file-alt mb-3 text-primary"
                      size="4x"
                      style={{ color: "#8C6DEF" }}
                    /> */}

                    <p>
                      Te guiamos para que encuentres el producto ideal para tu
                      mascota 😊
                    </p>
                  </div>

                  <hr />

                  <p className="text-center">
                    <strong>Mascota:</strong>
                  </p>
                  {pets.map((pet) => (
                    <MDBRadio
                      key={pet.id} // Se recomienda asignar un key único para cada elemento en la lista
                      name="petRating"
                      id={`petRating-${pet.id}`}
                      label={pet.name}
                      className="mb-2"
                      defaultChecked={pet.name === "Perro"}
                      onChange={() => handleChangePet(pet.id, pet.name)}
                      style={{ borderColor: "#8C6DEF" }}
                    />
                  ))}
                  <p className="text-center">
                    <strong>Edad:</strong>
                  </p>
                  {ages.map((age) => (
                    <MDBRadio
                      key={age.id}
                      name="ageRating"
                      id={`ageRating-${age.id}`}
                      label={age.name}
                      className="mb-2"
                      onChange={() => handleChangeAge(age.id, age.name)}
                      style={{ borderColor: "#8C6DEF" }}
                    />
                  ))}
                  {sizes.length > 0 && (
                    <p className="text-center">
                      <strong>Tamaño:</strong>
                    </p>
                  )}
                  {sizes.length > 0 &&
                    sizes.map((size) => (
                      <MDBRadio
                        key={size.id}
                        name="sizeRating"
                        id={`sizeRating-${size.id}`}
                        label={size.name}
                        className="mb-2"
                        onChange={() => handleChangeSize(size.id, size.name)}
                        style={{ borderColor: "#8C6DEF" }}
                      />
                    ))}
                  <p className="text-center">
                    <strong>Necesidad:</strong>
                  </p>
                  {necessities.map((necessity) => (
                    <MDBRadio
                      key={necessity.id}
                      name="necessityRating"
                      id={`necessityRating-${necessity.id}`}
                      label={necessity.name}
                      className="mb-2"
                      onChange={() => {
                        handleChangeNecessity(necessity.id, necessity.name);
                      }}
                      style={{ borderColor: "#8C6DEF" }}
                    />
                  ))}

                  {/* <p className="text-center">
                  <strong>What could we improve?</strong>
                </p>
                <MDBTextArea className="mb-4" label='Message' id='textAreaExample' rows={4} /> */}
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
                      Siguiente
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

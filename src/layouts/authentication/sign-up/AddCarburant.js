import React, { useState } from "react";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";  // Importez Link depuis react-router-dom
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

import CoverLayout from "../components/CoverLayout";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg";

function AddCarburant() {
  const [CarburantValue, setCarburantValue] = useState("");

  const handleCarburantChange = (event) => {
    setCarburantValue(event.target.value);
  };

  const handleAjouterCarburant = async () => {
    try {
      // ... Votre code existant pour ajouter le carburant
    } catch (error) {
      console.error("Erreur inattendue :", error);
      // Ajoutez ici le code pour gérer l'échec de l'ajout
    }
  };

  return (
    <CoverLayout title="Welcome!" image={bgImage} imgPosition="top">
      <Card>
        <ArgonBox p={3} mb={1} textAlign="center">
          <Link to="/dashboard"> {/* Redirection vers le tableau de bord */}
            <IconButton color="primary">
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <ArgonTypography variant="h5" fontWeight="medium">
            Ajouter une Carburant
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox pt={2} pb={3} px={3}>
          <ArgonBox component="form" role="form">
            <ArgonBox mb={2}>
              <ArgonInput
                type="text"
                placeholder="Nom de la Carburant"
                value={CarburantValue}
                onChange={handleCarburantChange}
              />
            </ArgonBox>
            <ArgonBox mt={4} mb={1}>
              <ArgonButton variant="gradient" color="dark" fullWidth onClick={handleAjouterCarburant}>
                Ajouter
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </CoverLayout>
  );
}

export default AddCarburant;

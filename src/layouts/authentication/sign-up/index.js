import React, { useState } from "react";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import { Link } from "react-router-dom"; 
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

import CoverLayout from "../components/CoverLayout";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg";

function AddMarque() {
  const [marqueValue, setMarqueValue] = useState("");

  const handleMarqueChange = (event) => {
    setMarqueValue(event.target.value);
  };

  const handleAjouterMarque = async () => {
    try {
      const token = sessionStorage.getItem('token');
      console.log("Token récupéré :", token);

      const cleanedToken = token ? token.replace(/"/g, '') : '';
      console.log("Token nettoyé :", cleanedToken);
      
      console.log("Token:", cleanedToken);
  
      const response = await fetch("https://0801241705-production.up.railway.app/marque", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cleanedToken}`,
        },
        body: JSON.stringify({
          nom: marqueValue,
        }),
      });
  
      // console.log("Response:", response);
  
      // Reste du code...
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
            Ajouter une marque
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox pt={2} pb={3} px={3}>
          <ArgonBox component="form" role="form">
            <ArgonBox mb={2}>
              <ArgonInput
                type="text"
                placeholder="Nom de la marque"
                value={marqueValue}
                onChange={handleMarqueChange}
              />
            </ArgonBox>
            <ArgonBox mt={4} mb={1}>
              <ArgonButton variant="gradient" color="dark" fullWidth onClick={handleAjouterMarque}>
                Ajouter
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </CoverLayout>
  );
}

export default AddMarque;

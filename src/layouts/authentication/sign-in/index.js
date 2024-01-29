import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("123456789");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("https://0801241705-production.up.railway.app/login", {
        username: email,
        password: password,
      });
  
      console.log("Full response:", response);
      
      const token = response.data.access_token; 
      
      console.log("Token récupéré :", token);
      
      sessionStorage.setItem('token', token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error", error);
      console.log("Full response:", error.response);
      alert(`Login error: ${error.message}`);
    }
  };
  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        description:
          "Un bon vendeur de voitures ne vend pas seulement des véhicules, " +
          "il crée des expériences mémorables et des relations durables."
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput
            type="email"
            name="username"
            size="large"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput
            type="password"
            placeholder="password"
            name="password"
            size="large"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" fullWidth onClick={handleSignIn}>
            Sign In
          </ArgonButton>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;

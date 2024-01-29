
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";


// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";


function Default() {
  const { size } = typography;
  return (
    <DashboardLayout>
      <ArgonBox py={3}>
       
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="Voitures vendues"
             
              chart={gradientLineChartData}
            />
          </Grid>
        </Grid>
       
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;

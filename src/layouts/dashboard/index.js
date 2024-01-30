// Default.js
//index ao anaty dashboard


import React from "react";
import Grid from "@mui/material/Grid";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import CategoriesList from "examples/Lists/CategoriesList";
import SalesTable from "examples/Tables/SalesTable";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";
import SalesTableData from "layouts/dashboard/data/salesTableData";

function Default() {
  const salesData = SalesTableData();

  return (
    <DashboardLayout>
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <GradientLineChart title="Voitures vendues" chart={gradientLineChartData} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SalesTable rows={salesData} />
          </Grid>
          <Grid item xs={12} md={4}>
            {/*<CategoriesList title="categories" categories={categoriesListData} />*/}
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;

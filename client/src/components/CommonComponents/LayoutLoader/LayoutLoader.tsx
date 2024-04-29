import { Grid , Skeleton , Stack } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Title from "../Title/Title";

const LayoutLoader = () => {
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"} spacing="1rem">
          <Grid
            item
            height={"100%"}
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Skeleton variant="rectangular" height={"100vh"}/>
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <Stack spacing = {"1rem"} >
              {Array.from({length:9}).map((_,index)=>(
                 <Skeleton key={index} variant="rounded" height={"3rem"} />
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{ display: { xs: "none", md: "block" }}}
          >
            <Skeleton variant="rectangular" height={"100vh"}/>
          </Grid>
        </Grid>
        <Footer />
      </>
    );
  };

export default LayoutLoader;

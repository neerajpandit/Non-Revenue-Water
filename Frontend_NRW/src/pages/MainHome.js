import { Grid } from "@mui/material";
import Home from "./home/Home";
import ProjectOverview from './home/ProjectOverview'
import HomePage3 from "./home/Features";
import WorkingProcess from './consumerDashboard/aboutus/WorkingProcess'
import Gallery from "./home/Gallery";
import Footer from "./home/Footer";
const MainHome = () => {
  return <>
    <Home/>
    <ProjectOverview/>
    <HomePage3/>
    <WorkingProcess/>
    <Gallery/>
    <Footer/>
    {/* <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page</h1>
        <hr />
        <p>Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum officiis debitis vel tenetur quos animi vero voluptates reiciendis, omnis sed in libero temporibus deleniti pariatur expedita corporis officia. Odit enim, quasi facere magnam earum officiis ipsa aliquid impedit velit quibusdam dolor ex esse ratione explicabo quod, culpa temporibus? Dolorem deleniti doloremque maxime quas deserunt. Ex aspernatur saepe illo eaque corrupti placeat, aperiam nulla adipisci itaque quos necessitatibus iure at minus non delectus ratione quod ad. Alias dolore perferendis est expedita iure! Nostrum laborum tempore amet commodi voluptas accusamus enim repudiandae, quia odio cumque, laboriosam architecto illo! Aliquid, fuga quis.</p>
      </Grid>
    </Grid> */}
  </>;
};

export default MainHome;

// import { Bio } from "../data/Bio"
import { Container, Box, Typography } from "@mui/material";
const Skills = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ height: "100vh", border: "2px solid green" }}
    >
      <Box height={"100vh"} mt={8}>
        <Typography variant="h1" sx={{ letterSpacing: 2, mb: 3, textAlign: "center"}} color="inherit">Skills</Typography>
        <Typography variant="h6"sx={{fontWeight: "bold", textAlign: "center"}} color="secondary">Here are the skills I have learned through Projects, Coursework and Experience</Typography>

      </Box>
    </Container>
  );
}

export default Skills
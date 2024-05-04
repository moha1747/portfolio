// import { Bio } from "../data/Bio"
import { Container, Box, Typography, Card } from "@mui/material";
import { ThemeProviderWrapper } from "../utils/ThemeProviderWrapper";

const Skills = () => {
  return (
    <ThemeProviderWrapper>
      <Container
        maxWidth="lg"
        sx={{ height: "100vh", border: "2px solid green" }}
      >
        <Box height={"100vh"} mt={8}>
          <Typography
            variant="h1"
            sx={{ letterSpacing: 2, mb: 3, textAlign: "center" }}
            color="inherit"
          >
            Skills
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", textAlign: "center" }}
            color="secondary"
          >
            Here are the skills I have learned through Projects, Coursework and
            Experience
          </Typography>

          <Card
            variant="outlined"
            sx={{
              height: 400,
              width: 500,
              boxShadow: 3,
              backgroundColor: "inherit",
            }}
          >
            <Typography variant="h3" color="primary">
              Frontend
            </Typography>
          </Card>
        </Box>
      </Container>
    </ThemeProviderWrapper>
  );
      

}

export default Skills
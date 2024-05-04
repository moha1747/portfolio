// import { Bio } from "../data/Bio"
import {skills} from '../data/data'
import { Box, Card, Container, Typography, useTheme } from "@mui/material";
import SkillsCard from "./styles/SkillsCards";
const Skills = () => {
  const theme = useTheme();
  return (
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginTop: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                height: 400,
                width: "calc(50% - 16px)", // Adjust width to fit two cards per row, minus margin
                boxShadow: `0 4px 8px 0 ${theme.palette.secondary.main}`,
                backgroundColor: theme.palette.primary.main,
                margin: "8px",
              }}
            >
              <SkillsCard skills={skills[1].skills} />
            </Card>
            <Card
              variant="outlined"
              sx={{
                height: 400,
                width: "calc(50% - 16px)",
                boxShadow: `0 4px 8px 0 ${theme.palette.secondary.main}`,
                backgroundColor: theme.palette.primary.main,
                margin: "8px",
              }}
            >
              <Typography variant="h3" color="inherit">
                Backend
              </Typography>
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                height: 400,
                width: "calc(50% - 16px)",
                boxShadow: `0 4px 8px 0 ${theme.palette.secondary.main}`,
                backgroundColor: theme.palette.primary.main,
                margin: "8px",
              }}
            >
              <Typography variant="h3" color="inherit">
                Database
              </Typography>
            </Card>
            <Card
              variant="outlined"
              sx={{
                height: 400,
                width: "calc(50% - 16px)",
                boxShadow: `0 4px 8px 0 ${theme.palette.secondary.main}`,
                backgroundColor: theme.palette.primary.main,
                margin: "8px",
              }}
            >
              <Typography variant="h3" color="inherit">
                DevOps
              </Typography>
            </Card>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Skills;

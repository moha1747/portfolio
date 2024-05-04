import { Box, Button, Container, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { Bio } from "../data/data";
import hero from "../images/hero.png";
import { useTheme } from "@mui/material";

// TODO:
  //Fix later 
// const TestComponent = () => {
//   const theme = useTheme();
//   return (
//     <Typography variant="h4" style={{ color: theme.palette.primary.main }}>
//       Test Primary Color
//     </Typography>
//   );
// };


const Home = () => {
  const theme = useTheme()
  console.log(theme.palette.primary.main);
  return (
    <>
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          component="section"
          height={400}
          width={500}
          sx={{
            mt: 12,
            // border: "2px solid red",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* <TestComponent /> */}
          <Typography variant="h1">
            Hi, I am <br /> Abbaas Mohamud
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Typography variant="h4">I am a </Typography>
            <Typography variant="h4" sx={{color: theme.palette.primary.main}}>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
          </Box>
          <Typography variant="content" color="secondary">
            {" "}
            {Bio.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              textDecoration: "none",
              width: "95%",
              maxWidth: 300,
              height: 200,
              textAlign: "center",
              padding: "12px 0px",
              background:
                "linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)",
              //   boxShadow:
              //     "20px 20px 60px rgb(31, 38, 52), -20px -20px 60px rgb(31, 38, 52)",
              borderRadius: 50,
              fontWeight: 600,
              fontSize: 20,
              color: "inherit",
              mt: 3,
            }}
          >
            Check Resume
          </Button>
        </Box>
        <Box sx={{ ml: 24, mt: 6 }}>
          <img
            src={hero}
            alt=""
            height={500}
            style={{ background: "transparent" }}
          />
        </Box>
      </Container>

    </>
  );
};

export default Home;

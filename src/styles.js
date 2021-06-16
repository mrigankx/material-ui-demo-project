import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  buttons: {
    marginTop: "40px",
  },
  icons: {
    marginRight: "20px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardmedia: {
    paddingTop: "56.25%", //16:9
  },
  cardcontent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
}));
export default useStyles;

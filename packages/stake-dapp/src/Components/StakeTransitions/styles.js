import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(MUITheme => ({
  stakeTransactionContainer: {
    width: 845,
    paddingBottom: 33,
    borderRadius: 4,
    margin: "0 auto",
    background: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    "@media(max-width: 900px)": {
      width: "auto",
      margin: "0 25px",
    },
  },
  header: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    "& h6": {
      padding: "0 22px",
      fontWeight: 400,
      lineHeight: "50px",
    },
  },
  pageTitle: {
    padding: "19px 19px 5px",
    opacity: 0.53,
    color: MUITheme.palette.text.lightGrey,
    fontSize: 14,
    lineHeight: "18px",
    textTransform: "uppercase",
  },
  tableRow: {
    padding: "6px 15px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    margin: "0 7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    "& svg": {
      "@media(max-width: 800px)": {
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translate(-50%)",
      },
    },
    "&:hover": {
      backgroundColor: "#F6F6F7",
      boxShadow: "0 2px 19px 0 rgba(227,227,227,0.32)",
      "& svg": {
        color: MUITheme.palette.primary.main,
      },
    },
    "& > div": {
      "&:not(first-of-type)": {
        "@media(max-width: 800px)": {
          display: "flex",
          alignItems: "center",
        },
      },
    },
    "@media(max-width: 800px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
    },
  },
  id: {
    color: MUITheme.palette.primary.main,
    fontSize: 14,
    lineHeight: "18px",
    "@media(max-width: 800px)": { paddingLeft: 20 },
  },
  title: {
    color: MUITheme.palette.text.lightGrey,
    fontSize: 14,
    lineHeight: "18px",
  },
  value: {
    display: "inline-block",
    color: MUITheme.palette.text.darkGrey,
    fontSize: 28,
    lineHeight: "35px",
    "@media(max-width: 800px)": { paddingLeft: 20 },
  },
  unit: {
    paddingLeft: 10,
    display: "inline-block",
    color: MUITheme.palette.text.lightGrey,
    fontSize: 16,
    lineHeight: "18px",
  },
  expandedTable: {
    width: "auto",
    padding: "0 14px",
    borderRadius: 2,
    margin: "0 7px",
    backgroundColor: "#F5F5F5",
  },
  expandedTableCol: {
    padding: "9px 0",
    borderBottom: "1px solid #D8D8D8",
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      color: MUITheme.palette.text.darkGrey,
      fontSize: 14,
      letterSpacing: 0.17,
      lineHeight: "18px",
    },
    "@media(max-width: 800px)": { display: "none" },
  },
  expandedTableRow: {
    padding: "6px 0",
    borderBottom: "1px solid #D8D8D8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& p": {
      color: MUITheme.palette.text.primary,
      fontSize: 14,
      lineHeight: "18px",
    },
    "& > div": {
      "@media(max-width: 800px)": { display: "flex" },
    },
    "@media(max-width: 800px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  mobileTitle: {
    paddingRight: 10,
    display: "none",
    color: `${MUITheme.palette.text.darkGrey} !important`,
    letterSpacing: 0.17,
    "@media(max-width: 800px)": { display: "inline-block" },
  },
  pagination: { padding: "125px 56px 0 9px" },
}));

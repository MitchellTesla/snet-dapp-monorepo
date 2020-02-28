export const useStyles = MUITheme => ({
  statusBannerContainer: {
    padding: "14px 14px 14px 0",
    marginTop: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F1F1F1",
    borderRadius: 4,
    display: "flex",
    backgroundColor: MUITheme.palette.text.secondary,
  },
  statusBannerMedia: {
    "& img": {
      width: "100%",
      [MUITheme.breakpoints.down("xs")]: { width: 302 },
    },
    [MUITheme.breakpoints.down("xs")]: {
      marginBottom: 25,
      textAlign: "center",
    },
  },
  statusBannerContent: {
    paddingTop: 20,
    paddingLeft: 24,
    "& p": {
      paddingRight: 50,
      margin: "24px 0 0",
      color: MUITheme.palette.text.primary,
      fontSize: 14,
      lineHeight: "21px",
    },
    "& button": {
      marginTop: 24,
      "&:first-of-type": {
        padding: "13px 18px 11px",
        marginRight: 22,
      },
      "&:last-of-type": { padding: "13px 23px 11px" },
    },
  },
  PENDING: { color: MUITheme.palette.warning.main },
  REJECTED: { color: MUITheme.palette.text.red },
});
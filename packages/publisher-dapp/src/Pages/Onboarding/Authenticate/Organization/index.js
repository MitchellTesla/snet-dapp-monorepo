import React, { Fragment, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import BasicDetails from "./BasicDetails";
import CompanyAddress from "./CompanyAddress";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { OnboardingRoutes } from "../../OnboardingRouter/Routes";
import { useSelector, useDispatch } from "react-redux";
import { organizationActions } from "../../../../Services/Redux/actionCreators";
import validator from "shared/dist/utils/validator";
import { orgOnboardingConstraints } from "./validationConstraints";
import ValidationError from "shared/dist/utils/validationError";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { GlobalRoutes } from "../../../../GlobalRouter/Routes";
import { organizationSetupStatuses } from "../../../../Utils/organizationSetup";

const Organization = props => {
  const classes = useStyles();
  const { history } = props;
  const [alert, setAlert] = useState({});
  const organization = useSelector(state => state.organization);
  const dispatch = useDispatch();

  useEffect(() => {
    if (organization.state.state === organizationSetupStatuses.APPROVAL_PENDING) {
      history.push(GlobalRoutes.ORG_SETUP_STATUS.path.replace("orgUuid", organization.uuid));
    }
  });

  useEffect(() => {
    if (organization.state.state === organizationSetupStatuses.ONBOARDING_REJECTED && !Boolean(alert.type)) {
      setAlert({
        type: alertTypes.ERROR,
        message:
          "Your organization has been rejected. Please validate the details provided and submit again for approval",
      });
    }
  }, [organization.state.state, setAlert, alert]);

  const handleNavigateBack = () => {
    history.push(OnboardingRoutes.ACCEPT_SERVICE_AGREEMENT.path);
  };

  const handleFinish = async () => {
    setAlert({});
    try {
      const isNotValid = validator(organization, orgOnboardingConstraints);
      if (isNotValid) {
        throw new ValidationError(isNotValid[0]);
      }
      let orgUuid;
      if (organization.state.state === organizationSetupStatuses.ONBOARDING_REJECTED) {
        const data = dispatch(organizationActions.finishLater(organization, "ONBOARDING"));
        orgUuid = data.org_uuid;
      } else {
        const data = await dispatch(organizationActions.createOrganization(organization));
        orgUuid = data.org_uuid;
      }
      history.push(GlobalRoutes.ORG_SETUP_STATUS.path.replace(":orgUuid", orgUuid));
      dispatch(organizationActions.initializeOrg);
      dispatch(organizationActions.setOrganizationStatus(organizationSetupStatuses.ONBOARDING));
    } catch (error) {
      if (error instanceof ValidationError) {
        return setAlert({ type: alertTypes.ERROR, message: error.message });
      }
      return setAlert({
        type: alertTypes.ERROR,
        message: "Unable to finish organization authentication. Please try later",
      });
    }
  };

  const handleCancel = () => {
    dispatch(organizationActions.resetOrganizationData());
    history.push(OnboardingRoutes.SINGULARITY_ACCOUNT.path);
  };

  return (
    <Fragment>
      <div className={classes.box}>
        <Typography variant="h6">Organization Verification Required</Typography>
        <Typography>
          You need to provide your company organization details and your DUNS number for the verification process.
        </Typography>
        <BasicDetails />
        <CompanyAddress />
        <AlertBox type={alert.type} message={alert.message} />
      </div>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="cancel" onClick={handleCancel} />
        <SNETButton color="primary" children="back" onClick={handleNavigateBack} />
        <SNETButton color="primary" variant="contained" children="finish" onClick={handleFinish} />
      </div>
    </Fragment>
  );
};

export default Organization;

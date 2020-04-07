import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SNETButton from "shared/dist/components/SNETButton";
import { ServiceCreationRoutes } from "../ServiceCreationRouter/Routes";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";

import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";

const Actions = ({ classes }) => {
  const history = useHistory();
  const serviceDetails = useSelector(state => state.aiServiceDetails);
  const { orgUuid, serviceUuid } = useParams();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState({});

  const handleBack = () => {
    history.push(ServiceCreationRoutes.PROFILE.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid));
  };

  const handleSave = async () => {
    await dispatch(aiServiceDetailsActions.saveServiceDetails(orgUuid, serviceUuid, serviceDetails));
  };

  const handleContinue = async () => {
    if (serviceDetails.assets.demoFiles.url) {
      await handleSave();
      history.push(
        ServiceCreationRoutes.PRICING_AND_DISTRIBUTION.path
          .replace(":orgUuid", orgUuid)
          .replace(":serviceUuid", serviceUuid)
      );
    } else {
      return setAlert({ type: alertTypes.ERROR, message: "Please upload Demo Files" });
    }
  };

  const handleFinishLater = async () => {
    await handleSave();
    history.push(GlobalRoutes.SERVICES.path.replace(":orgUuid", orgUuid));
  };

  return (
    <div>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
        <SNETButton color="primary" children="previous step" onClick={handleBack} />
        <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
      </div>
      <span>
        {" "}
        <AlertBox type={alert.type} message={alert.message} children={alert.children} />
      </span>
    </div>
  );
};

export default Actions;

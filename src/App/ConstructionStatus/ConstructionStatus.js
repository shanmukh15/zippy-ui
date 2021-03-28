import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import StyledSelectBox from "../FormComponents/StyledSelectBox";
import {
  COMMUNITY_LIST,
  LOT_LIST,
  CITY_LIST,
  DOC_LIST,
  USER_TYPE,
} from "../constants";

const statusGraphicGenerator = (stepper, currentStep) => {
  if (docList.length < 1) {
    return null;
  }

  return docList.map((item) => (
    <div
      key={item}
      className="flex border justify-end border-neutral-2 rounded-l-md"
    >
      <div className="px-2 py-3">
        <span className="text-justify">{item}</span>
      </div>
      {userType == USER_TYPE.BUILDER && (
        <>
          <div className="fa fa-eye p-3 w-12 bg-primary-dark-3 text-white border-l"></div>
          <div className="fa fa-upload p-3 w-12 bg-primary-dark-3 text-white border-l"></div>
        </>
      )}
      {userType == USER_TYPE.BUYER && (
        <div className="fa fa-download p-3 w-12 bg-primary-dark-3 text-white"></div>
      )}
    </div>
  ));
};

const ConstructionStatus = (props) => {
  const userType = props.userType();
  const [showProjectDetails, setShowProjectDetails] = useState(true);
  const [errorProject, setErrorProject] = useState();
  const [accordianState, setAccordianState] = useState(true);
  const [city, setCity] = useState();
  const [community, setCommunity] = useState();
  const [lot, setLot] = useState();

  return (
    <>
      <div className="px-2 py-1 md:px-8 md:py-8">
        <div className="border border-neutral-1 rounded-md mb-4">
          <div
            className={`flex ${
              accordianState ? "rounded-t-md" : "rounded-md"
            } justify-between align-content-center bg-primary-dark-3 text-white py-2.5 px-4`}
            onClick={() => {
              setAccordianState(!accordianState);
            }}
          >
            <span className="">Search Projects</span>
            <span
              className={`fa ${accordianState ? "fa-minus" : "fa-plus"}`}
            ></span>
          </div>
          {accordianState && (
            <>
              <div className="m-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="">
                  <StyledSelectBox
                    label={"City"}
                    value={city}
                    required={true}
                    onChange={setCity}
                    options={CITY_LIST}
                  />
                </div>
                <div className="">
                  <StyledSelectBox
                    label={"Community"}
                    value={community}
                    required={true}
                    onChange={setCommunity}
                    options={COMMUNITY_LIST}
                  />
                </div>
                <div className="">
                  <StyledSelectBox
                    label={"LOT"}
                    value={lot}
                    required={true}
                    onChange={setLot}
                    options={LOT_LIST}
                  />
                </div>
              </div>
              <button className="ml-4 mb-4 rounded-lg px-4 py-2 text-center bg-primary-dark-3 text-white">
                <i className="fa fa-search"></i>
                {"  Search"}
              </button>
            </>
          )}
        </div>
        {showProjectDetails && (
          <>
            <div className="border rounded-md mb-4">
              <div
                className={`rounded-t-md justify-between align-content-center bg-primary-dark-3 text-white py-2.5 px-4`}
              >
                <span className="">Construction Status</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                <div className="w-20 h-20">
                  <svg viewBox="0 0 10 8">
                    <path
                      d="M 0 0 L 8 0 L 10 3 L 8 6 L 0 6 L 2 3 L 0 0"
                      fill="#002e40"
                    />
                    <text fill="white" fontSize="1" dx="25%" dy="40%">
                      213
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default withRouter(ConstructionStatus);

import React, { useState } from "react";
import StyledTextBox from "../FormComponents/StyledTextBox";
import StyledSelectBox from "../FormComponents/StyledSelectBox";
import StyledMultiSelect from "../FormComponents/StyledMultiSelect";
import { withRouter } from "react-router-dom";

import {
  USER_TYPE,
  COMMUNITY_LIST,
  CITY_LIST,
  LOT_LIST,
  COUNTRY_LIST,
  STATE_LIST,ß
} from "../constants";

const USER_TYPE_LIST = Object.values(USER_TYPE);

const UserForm = ({match, location, history}) => {
  console.log('location', location.state);
  const user = location.state?.user?.user || {};
  const [userType, setUserType] = useState(location.state?.user?.type || "");
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [middleName, setMiddleName] = useState(user.middleName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [address1, setAddress1] = useState(user.address1 || "");
  const [address2, setAddress2] = useState(user.address2 || "");
  const [country, setCountry] = useState(user.country || "");
  const [city, setCity] = useState(user.city || "");
  const [stateValue, setStateValue] = useState(user.stateValue || "");
  const [zip, setZip] = useState(user.zip || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [email, setEmail] = useState(user.email || "");
  const [communities, setCommunities] = useState(user.communities || []);
  const [lots, setLots] = useState(user.lots || []);
  const [formError, setFormError] = useState();

  const validator = () => {
    return (
      userType &&
      firstName &&
      lastName &&
      address1 &&
      city &&
      state &&
      country &&
      zip &&
      phone &&
      email
    );
  };

  const onSubmit = () => {
    if (true && validator) {
      setFormError("");
      const userObject = {
        firstName,
        userType,
        lastName,
        address1,
        address2,
        middleName,
        country,
        stateValue,
        zip,
        phone,
        email,
        communities,
        lots,
      };
      history.goBack();
    } else {
      setFormError("Please fill all mandatory fields");
    }
  };

  return (
    <>
      <div className="py-6 text-center">
        <span className="shadow text-lg text-primary-dark-3 uppercase">
          {" Add new user "}
        </span>
      </div>
      <div
        className={`${
          formError ? "" : "hidden"
        } py-3 px-3 mx-3 mt-6 text-sm border-2 rounded-md bg-red-50 border-secondary-2 text-secondary-2`}
      >
        <span className="p-1 fa fa-exclamation-circle"></span>
        {`Request failed : ${formError}`}
      </div>
      <div className="grid gap-6 px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <StyledSelectBox
              label={"User Type"}
              value={userType}
              required={true}
              onChange={setUserType}
              options={USER_TYPE_LIST}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <StyledTextBox
              label={"First Name"}
              value={firstName}
              required={true}
              type={"text"}
              onChange={setFirstName}
            />
          </div>
          <div>
            <StyledTextBox
              label={"Middle Name"}
              value={middleName}
              required={false}
              type={"text"}
              onChange={setMiddleName}
            />
          </div>
          <div>
            <StyledTextBox
              label={"Last Name"}
              value={lastName}
              required={true}
              type={"text"}
              onChange={setLastName}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <StyledTextBox
              label={"Address Line 1"}
              value={address1}
              required={true}
              type={"text"}
              onChange={setAddress1}
            />
          </div>
          <div>
            <StyledTextBox
              label={"Address Line 2"}
              value={address2}
              required={false}
              type={"text"}
              onChange={setAddress2}
            />
          </div>
          <div>
            <StyledSelectBox
              label={"City"}
              value={city}
              required={true}
              onChange={setCity}
              options={CITY_LIST}
            />
          </div>
          <div>
            <StyledSelectBox
              label={"State"}
              value={stateValue}
              required={true}
              onChange={setStateValue}
              options={STATE_LIST}
            />
          </div>
          <div>
            <StyledSelectBox
              label={"Country"}
              value={country}
              required={true}
              onChange={setCountry}
              options={COUNTRY_LIST}
            />
          </div>
          <div>
            <StyledTextBox
              label={"Zip Code"}
              value={zip}
              required={true}
              type={"text"}
              onChange={setZip}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <StyledTextBox
              label={"Contact Number"}
              value={phone}
              required={true}
              type={"text"}
              onChange={setPhone}
            />
          </div>
          <div>
            <StyledTextBox
              label={"Email ID"}
              value={email}
              required={true}
              type={"text"}
              onChange={setEmail}
            />
          </div>
        </div>
        {userType === USER_TYPE.EMLOYEE && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <StyledMultiSelect
                label={"Community"}
                value={communities}
                required={true}
                onChange={setCommunities}
                options={COMMUNITY_LIST}
              />
            </div>
            <div>
              <StyledMultiSelect
                label={"LOT"}
                value={lots}
                required={true}
                onChange={setLots}
                options={LOT_LIST}
              />
            </div>
          </div>
        )}
        <div className="flex justify-around">
          <button
            className="border text-sm bg-primary-dark-3 text-white rounded-full px-4 py-2"
            onClick={onSubmit}
          >
            <span className="fa fa-save"></span>
            <span className="">{`  ${user ? "UPDATE" : "SAVE"} ${
              userType || "USER"
            }`}</span>
          </button>
        </div>

        <div className="h-6"></div>
      </div>
    </>
  );
};

export default withRouter(UserForm);

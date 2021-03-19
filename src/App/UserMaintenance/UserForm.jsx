import React, { useState } from "react";
import StyledTextBox from "../FormComponents/StyledTextBox";
import StyledSelectBox from "../FormComponents/StyledSelectBox";
import StyledMultiSelect from "../FormComponents/StyledMultiSelect";

const COUNTRY_LIST = [];
const STATE_LIST = [];
const CITY_LIST = ['1', '2','4','67'];
const USER_TYPE_LIST = [];

const UserForm = (props) => {
  const [userType, setUserType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
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
            <StyledMultiSelect
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
      </div>
    </>
  );
};

export default UserForm;

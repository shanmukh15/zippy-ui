import React, { useState } from "react";
import StyledTextBox from "../FormComponents/StyledTextBox";
import StyledSelectBox from "../FormComponents/StyledSelectBox";
import StyledMultiSelect from "../FormComponents/StyledMultiSelect";
import { USER_TYPE } from "../constants";

const COMMUNITY_LIST = ["cert", "erter", "rhfghj", "eyfdb"];
const LOT_LIST = ["l1", "l2", "l3", "l4"];
const COUNTRY_LIST = [
  "12",
  "121",
  "1212",
  "1ert2",
  "f",
  "1g2",
  "2w1",
  "1k2",
  "1/2",
  "1",
  "2",
  "1sd2",
  "1sdgq2",
];
const STATE_LIST = [
  "12",
  "121",
  "1212",
  "1ert2",
  "f",
  "1g2",
  "2w1",
  "1k2",
  "1/2",
  "1",
  "2",
  "1sd2",
  "1sdgq2",
];
const CITY_LIST = ["1", "2", "4", "67"];
const USER_TYPE_LIST = Object.values(USER_TYPE);

const UserForm = (props) => {
  const {user} = props;
  const [userType, setUserType] = useState(props.role);
  const [firstName, setFirstName] = useState(user.firstName);
  const [middleName, setMiddleName] = useState(user.middleName);
  const [lastName, setLastName] = useState(user.lastName);
  const [address1, setAddress1] = useState(user.address1);
  const [address2, setAddress2] = useState(user.address2);
  const [country, setCountry] = useState(user.country);
  const [city, setCity] = useState(user.city);
  const [stateValue, setStateValue] = useState(user.stateValue);
  const [zip, setZip] = useState(user.zip);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [communities, setCommunities] = useState(user.communities || []);
  const [lots, setLots] = useState(user.lots || []);

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
        {props.role === USER_TYPE.EMLOYEE && (
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
      </div>
    </>
  );
};

export default UserForm;

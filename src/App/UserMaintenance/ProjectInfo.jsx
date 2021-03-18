import React, { useState } from "react";
import { PROJECT_STATUS } from "../constants";
import StyledSelectBox from "../FormComponents/StyledSelectBox";
import StyledTextBox from "../FormComponents/StyledTextBox";

const COMMUNITY_LIST = ["cert", "erter", "rhfghj", "eyfdb"];
const LOT_LIST = ["l1", "l2", "l3", "l4"];
const REALTOR_LIST = [
  "Saert Builder",
  "TWery HEights",
  "MAdsr Ploght",
  "Hicky Merg",
];
const STATUS = ["Available", "Expired", "Closed", "Sold"];
const HOME_PLAN = [
  "Brick Wall Terrace",
  "Sandstone Bridge",
  "Center Fender Ceils",
];

const ProjectInfo = (props) => {
  const projectType = props.project.type;
  const formType = props.type;

  const [buyer1FN, setBuyer1FN] = useState("");
  const [buyer1MN, setBuyer1MN] = useState("");
  const [buyer1LN, setBuyer1LN] = useState("");
  const [buyer2FN, setBuyer2FN] = useState("");
  const [buyer2MN, setBuyer2MN] = useState("");
  const [buyer2LN, setBuyer2LN] = useState("");
  const [community, setCommunity] = useState("");
  const [lot, setLot] = useState("");
  const [homeplan, setHomePlan] = useState("");
  const [realtor, setRealtor] = useState("");
  const [status, setStatus] = useState("");

  return (
    <>
      <div className="w-full h-26 text-white text-base bg-primary-dark-3">
        <div className="flex justify-between p-3 pr-5">
          <div className="flex">
            <div className="self-center p-4 pl-1 mr-2">
              <span className="fa fa-chevron-left text-lg"></span>
            </div>
            <div>
              <div className="px-1 rounded-full border bg-white border-white overflow-hidden">
                <span
                  className={"fas fa-user text-5xl text-primary-dark-3"}
                ></span>
              </div>
            </div>
            <div className="ml-2 mt-1">
              <span className="text-white capitalize"> user name </span>
              <span className="text-xs text-neutral-2"> (Buyer) </span>
              <div className="text-xs text-neutral-2 mt-1">{`${props.project.type}: ${props.project.id}`}</div>
            </div>
          </div>
          <div className="sm:hidden self-center">
            <span className="fas block text-secondary-2 sm:hidden fa-trash-alt text-lg"></span>
          </div>
          <div className="hidden border border-secondary-2 text-secondary-2 rounded-full px-2 py-1 sm:block self-center">
            <span className="fas fa-trash-alt"></span>
            <span className="text-sm">{`  Delete `}</span>
            <span className="text-sm lowercase">{`${projectType}`}</span>
          </div>
        </div>
      </div>
      <div className="my-4 mx-2">
        <div className="ring-2 ring-neutral-1 rounded p-2 m-2 mb-4">
          <span className="inline-block text-sm mx-4 uppercase mb-4">
            Buyer 1 :
          </span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StyledTextBox
              label={"First Name"}
              value={buyer1FN}
              required={true}
              type={"text"}
              onChange={setBuyer1FN}
            />
            <StyledTextBox
              label={"Middle Name"}
              value={buyer1MN}
              required={true}
              type={"text"}
              onChange={setBuyer1MN}
            />
            <StyledTextBox
              label={"Last Name"}
              value={buyer1LN}
              required={true}
              type={"text"}
              onChange={setBuyer1LN}
            />
          </div>
        </div>
        <div className="ring-2 ring-neutral-1 rounded p-2 m-2 mb-4">
          <span className="inline-block text-sm mx-4 uppercase mb-4">
            Buyer 2 :
          </span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StyledTextBox
              label={"First Name"}
              value={buyer2FN}
              required={false}
              type={"text"}
              onChange={setBuyer2FN}
            />
            <StyledTextBox
              label={"Middle Name"}
              value={buyer2MN}
              required={false}
              type={"text"}
              onChange={setBuyer2MN}
            />
            <StyledTextBox
              label={"Last Name"}
              value={buyer2LN}
              required={false}
              type={"text"}
              onChange={setBuyer2LN}
            />
          </div>
        </div>
        <div className="ring-2 ring-neutral-1 rounded p-2 m-2 mb-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="">
              <StyledSelectBox
                label={"Home Plan"}
                value={homeplan}
                required={false}
                onChange={setHomePlan}
                options={HOME_PLAN}
              />
            </div>
            <div className="">
              <StyledSelectBox
                label={"Realtor"}
                value={realtor}
                required={false}
                onChange={setRealtor}
                options={REALTOR_LIST}
              />
            </div>
            <div className="">
              <StyledSelectBox
                label={"Status"}
                value={status}
                required={false}
                onChange={setStatus}
                options={STATUS}
              />
            </div>
          </div>
        </div>
        <div className="flex text-sm text-white justify-around">
          {projectType === PROJECT_STATUS.PROSPECT && (
            <>
              <button className="px-2.5 py-2 border rounded-full bg-primary-dark-3">
                <span className="fas fa-save"></span>
                <span className="ml-2">SAVE PROSPECT</span>
              </button>
              <button className="px-2.5 py-2 border rounded-full bg-primary-dark-3">
                <span className="fa fa-layer-group"></span>
                <span className="ml-2">CREATE CONTRACT</span>
              </button>
            </>
          )}
          {projectType === PROJECT_STATUS.CONTRACT && (
            <button className="px-4 py-2 border rounded-full bg-primary-dark-3">
              <span className="fas fa-save"></span>
              <span className="ml-2">UPDATE CONTRACT</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;

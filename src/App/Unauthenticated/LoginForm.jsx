import React, { useState } from "react";
import LogoComponent from "../NavBar/LogoComponent";
import { Link } from "react-router-dom";
import StyleToggedBox from "../FormComponents/StyleToggedBox";
import { USER_TYPE } from "../constants";
import StyledTextBox from "../FormComponents/StyledTextBox";

export const LoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [userError, setUserError] = useState();
  const [passError, setPassError] = useState();
  const [saveLocal, setSaveLocal] = useState(false);
  const [userType, setUserType] = useState(USER_TYPE.BUYER);
  const [formError, setFormError] = useState();
  const [isRequestInProgress, setRequestInProgress] = useState(false);

  const validateInputs = (un, ps, ut) => {
    setUserError(!un ? "This field cannot be empty." : null);
    setPassError(!ps ? "This field cannot be empty." : null);
    setFormError(!ut ? "Fill all mandatory fields." : null);
    return un && ps;
  };

  const onSubmit = () => {
    setRequestInProgress(true);
    setFormError(undefined);
    if (validateInputs(userName, password, userType, saveLocal)) {
      props.onLogin(userType, userName, password, saveLocal);
      setRequestInProgress(false);
    }
  };

  const onUserTypeChange = (checked) => {
    setUserType(checked ? USER_TYPE.BUILDER : USER_TYPE.BUYER);
  };

  return (
    <div className="container mx-auto text-primary-dark-3">
      <div className="px-6 py-32">
        <div className="shadow-2xl max-w-sm w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 mx-auto bg-white p-2">
          <div className="flex justify-center my-4">
            <LogoComponent isFormLayout />
          </div>
          <div
            className={`${
              formError ? "" : "hidden"
            } py-3 px-3 mx-3 mt-6 text-sm border-2 rounded-md bg-red-50 border-secondary-2 text-secondary-2`}
          >
            <span className="p-1 fa fa-exclamation-circle"></span>
            {`Request failed : ${formError}`}
          </div>
          <form className="px-4 pt-6 mb-4 bg-white rounded">
            <div className="flex justify-center mb-6">
              <StyleToggedBox
                onChange={onUserTypeChange}
                name={'userType'}
                checked={userType === USER_TYPE.BUILDER}
                label1={"Buyer"}
                label2={"Builder"}
              />
            </div>
            <div className="mx-auto mb-2">
              <div className="">
                <StyledTextBox
                  label={"Username"}
                  value={userName}
                  required={true}
                  type={"text"}
                  onChange={(value) => setUserName(value)}
                />
                <p
                  className={`${
                    userError ? "" : "hidden"
                  } mb-4 ml-2 text-xs italic text-secondary-2`}
                >
                  {userError}
                </p>
              </div>
              <div>
                <StyledTextBox
                  label={"Password"}
                  value={password}
                  required={true}
                  type={"password"}
                  onChange={(value) => setPassWord(value)}
                />
                <p
                  className={`${
                    passError ? "" : "hidden"
                  } mb-4 ml-2 text-xs italic text-secondary-2`}
                >
                  {passError}
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div onClick={() => setSaveLocal(!saveLocal)}>
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="checkbox_id"
                  checked={saveLocal}
                  onChange={() => setSaveLocal(!saveLocal)}
                />
                <label className="text-sm" forname="checkbox_id">
                  Remember Me
                </label>
              </div>
              <div className="">
                <Link
                  className="inline-block text-sm text-secondary-1 align-baseline hover:text-secondary-3"
                  to="/ForgotPassword"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <hr className="my-4 border-t" />
            <div className="mt-3 text-center">
              <button
                className="px-4 py-2 font-bold text-white bg-primary-light-3 rounded-md hover:bg-primary-light-5 focus:outline-none focus:shadow-outline"
                type="button"
                disabled={isRequestInProgress}
                onClick={onSubmit}
              >
                {"  Sign In  "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;

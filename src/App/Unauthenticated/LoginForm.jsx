import React, { useState } from "react";
import LogoComponent from "../NavBar/LogoComponent";

export const LoginForm = (props) => {
  const [userName, setUserName] = useState();
  const [password, setPassWord] = useState();
  const [userError, setUserError] = useState();
  const [passError, setPassError] = useState();
  const [saveLocal, setSaveLocal] = useState(false);
  const [userType, setUserType] = useState();
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

  return (
    <div className="container mx-auto text-primary-dark-3">
      <div className="px-6 py-32">
        <div className="shadow-2xl w-full md:w-3/5 lg:w-2/5 xl:w-1/3 md:mx-auto bg-white p-2">
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
          <form className="px-4 pt-6 mb-6 bg-white rounded">
            <div className="flex justify-center my-2">
              <label
                className="block font-bold mb-2 text-sm mx-4"
                forname="type"
              >
                {"I'm "}
              </label>
              <input
                type="radio"
                name="type"
                value="buyer"
                checked={userType === "buyer"}
                onChange={(val) => setUserType(val.currentTarget.value)}
              />
              <label className="block ml-1 mr-4 mb-2 text-sm" forname="type">
                Buyer
              </label>
              <input
                type="radio"
                name="type"
                value="builder"
                checked={userType === "builder"}
                onChange={(val) => setUserType(val.currentTarget.value)}
              />
              <label className="block ml-1 mr-2 mb-2 text-sm" forname="type">
                Builder
              </label>
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm" forname="username">
                Username
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
              />
              <p
                className={`${
                  userError ? "" : "hidden"
                } mt-3 text-xs italic text-secondary-2`}
              >
                {userError}
              </p>
            </div>
            <div className="mb-5 mt-4">
              <label className="block mb-2 text-sm" forname="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassWord(e.currentTarget.value)}
              />
              <p
                className={`${
                  passError ? "" : "hidden"
                } mt-3 text-xs italic text-secondary-2`}
              >
                {passError}
              </p>
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
                <a
                  className="inline-block text-sm text-secondary-1 align-baseline hover:text-secondary-3"
                  href="./forgot-password.html"
                >
                  Forgot Password?
                </a>
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

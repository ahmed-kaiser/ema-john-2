import { useContext } from "react";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterFill,
} from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../context/UserContext";

const SocialIcons = () => {
  const { userGoogleLogIn, userGithubLogIn, userFacebookLogIn } =  useContext(UserAuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleLogIn = () => {
    userGoogleLogIn()
    .then(result => {
      console.log(result.user)
      navigate(from, { replace: true });
    })
    .catch(error => console.log(error));
  }

  const handleGithubLogIn = () => {
    userGithubLogIn()
    .then(result => {
      console.log(result.user)
      navigate(from, { replace: true });
    })
    .catch(error => console.log(error));
  }

  const handleFacebookLogIn = () => {
    userFacebookLogIn()
    .then(result => {
      console.log(result.user)
      navigate(from, { replace: true });
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="flex justify-center gap-3 pb-4">
      <RiFacebookCircleFill onClick={handleFacebookLogIn} className="h-7 w-7 text-blue-600 hover:text-blue-500 cursor-pointer " />
      <RiGoogleFill onClick={handleGoogleLogIn} className="h-7 w-7 text-red-600 hover:text-red-500 cursor-pointer " />
      <RiTwitterFill className="h-7 w-7 text-cyan-500 hover:text-cyan-400 cursor-pointer " />
      <RiGithubFill onClick={handleGithubLogIn} className="h-7 w-7 hover:text-slate-600 cursor-pointer " />
    </div>
  );
};

export default SocialIcons;

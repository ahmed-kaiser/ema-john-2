import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../asset/images/google-icon.png";
import { useContext } from "react";
import { UserAuthContext } from "../context/UserContext";

const LogIn = () => {
  const { userLogIn, userGoogleLogIn } = useContext(UserAuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogIn = () => {
    userGoogleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="sm:container mx-auto px-2 md:px-6">
      <div className="max-w-sm md:min-w-[350px] mx-auto mt-16 border shadow-lg p-3 rounded-md">
        <h2 className="text-center font-serif font-bold text-xl text-cyan-600 border-b-2 py-2">
          Login Please
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label htmlFor="email" className="font-semibold text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="outline-none block my-1 w-full p-2 bg-slate-100 rounded-md"
            />
          </div>
          <div className="my-2">
            <label htmlFor="password" className="font-semibold text-slate-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="outline-none block my-1 w-full p-2 bg-slate-100 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 uppercase w-full px-3 py-2 mt-3 rounded-md font-semibold text-white"
          >
            log in
          </button>
        </form>
        <p className="text-center py-2">
          No Account?{" "}
          <span className="text-blue-500 hover:underline">
            <Link to="/register">Register now</Link>
          </span>
        </p>
        <div className="text-center mt-2">
          <small className="block">------- OR --------</small>
          <br />
          <div
            onClick={handleGoogleLogIn}
            className="flex justify-center items-center cursor-pointer border p-2 bg-slate-100 hover:bg-slate-200 rounded-md"
          >
            <img src={googleIcon} alt="" className="h-5" />
            <p className="ml-2 font-semibold text-slate-700">Google</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;

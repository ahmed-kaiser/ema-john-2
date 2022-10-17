import { Link } from "react-router-dom";
import googleIcon from "../asset/images/google-icon.png";
import { useContext } from "react";
import { UserAuthContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, userGoogleLogIn} = useContext(UserAuthContext);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password1.value;
    const confirmPassword = form.password2.value;

    createUser(email, password)
    .then(result => {
        const user = result.user;
        form.reset();
        console.log(user);
        navigate('/login')
    })
  }

  const handleGoogleLogIn = () => {
    userGoogleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="sm:container mx-auto px-2 md:px-6">
      <div className="max-w-sm md:min-w-[350px] mx-auto mt-16 border shadow-lg p-3 rounded-md">
        <h2 className="text-center font-serif font-bold text-xl text-cyan-600 border-b-2 py-2">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label htmlFor="username" className="font-semibold text-slate-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="outline-none block my-1 w-full p-2 bg-slate-100 rounded-md"
            />
          </div>
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
            <label htmlFor="password1" className="font-semibold text-slate-700">
              Password
            </label>
            <input
              type="password"
              name="password1"
              className="outline-none block my-1 w-full p-2 bg-slate-100 rounded-md"
            />
          </div>
          <div className="my-2">
            <label htmlFor="password2" className="font-semibold text-slate-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="password2"
              className="outline-none block my-1 w-full p-2 bg-slate-100 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 uppercase w-full px-3 py-2 mt-3 rounded-md font-semibold text-white"
          >
            create account
          </button>
        </form>
        <p className="text-center py-2">
          Already have an Account?{" "}
          <span className="text-blue-500 hover:underline">
            <Link to="/login">Log In</Link>
          </span>
        </p>
        <div className="text-center mt-2">
          <small className="block">------- OR --------</small>
          <br />
          <div onClick={handleGoogleLogIn} className="flex justify-center items-center cursor-pointer border p-2 bg-slate-100 hover:bg-slate-200 rounded-md">
            <img src={googleIcon} alt="" className="h-5" />
            <p className="ml-2 font-semibold text-slate-700">Google</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

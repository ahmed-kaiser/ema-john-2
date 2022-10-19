import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserAuthContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import FormError from "../components/FormError";

const Register = () => {
  const { createUser, updateUserProfile, userLogOut } =
    useContext(UserAuthContext);
  const navigate = useNavigate();
  const [formError, setFormErrors] = useState({});
  const [accountCreated, setAccountCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password1.value;
    const confirmPassword = form.password2.value;

    const errors = validateFormData(username, email, password, confirmPassword);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          form.reset();
          console.log(user);
        })
        .then(() => {
          updateUserProfile(username)
            .then(() => console.log("user name set successfully"))
            .catch((error) => console.log(error));
        })
        .then(() => {
          userLogOut();
          setAccountCreated(true);
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/email-already-in-use") {
            setFormErrors({ email: "Email already registered" });
          } else if (error.code === "auth/invalid-email") {
            setFormErrors({ email: "Invalid email" });
          }
        });
    }
  };

  const validateFormData = (username, email, password, confirmPassword) => {
    const errors = {};

    if (!username) {
      errors["username"] = "Username required";
    }

    if (!email) {
      errors["email"] = "Email required";
    }

    if (!password) {
      errors["password"] = "Password required";
    } else if (!confirmPassword) {
      errors["conPassword"] = "Password required";
    } else if (password !== confirmPassword) {
      errors["password"] = "Password did'n match";
      errors["conPassword"] = "Password did'n match";
    }

    return errors;
  };

  return (
    <section className="sm:container mx-auto px-2 md:px-6">
      {accountCreated ? (
        <div className="max-w-sm md:min-w-[350px] mx-auto mt-16 border shadow-lg p-3 rounded-md text-center">
          <h4 className="font-bold text-xl font-serif text-slate-700">
            Account created successfully!
          </h4>
          <p className="py-2">Go back to <Link to="/login" className="text-blue-500 underline">Log In</Link></p>
        </div>
      ) : (
        <div className="max-w-sm md:min-w-[350px] mx-auto mt-16 border shadow-lg p-3 rounded-md">
          <h2 className="text-center font-serif font-bold text-xl text-cyan-600 border-b-2 py-2">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="my-2">
              <label
                htmlFor="username"
                className="font-semibold text-slate-700"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                className="outline-none block my-1 w-full p-2 bg-slate-100 rounded-md"
              />
              {formError.username && <FormError message={formError.username} />}
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
              {formError.email && <FormError message={formError.email} />}
            </div>
            <div className="my-2">
              <label
                htmlFor="password1"
                className="font-semibold text-slate-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password1"
                className="outline-none block my-1 w-full p-2 bg-slate-100 rounded-md"
              />
              {formError.password && <FormError message={formError.password} />}
            </div>
            <div className="my-2">
              <label
                htmlFor="password2"
                className="font-semibold text-slate-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="password2"
                className="outline-none block my-1 w-full p-2 bg-slate-100 rounded-md"
              />
              {formError.conPassword && (
                <FormError message={formError.conPassword} />
              )}
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
            <p className="py-3 text-slate-600">Register using social network</p>
            <SocialIcons />
          </div>
        </div>
      )}
    </section>
  );
};

export default Register;

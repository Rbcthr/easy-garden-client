import React, { useContext, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import image from "../assets/banner 2.jpg";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import { Fade } from "react-awesome-reveal";

const Login = () => {
  const { userSignInWithGoogle, userSignIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  //   login with google
  const handleLoginWithGoogle = () => {
    userSignInWithGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate("/");
        toast.success("User Successfully Logged in");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //   user login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const newForm = new FormData(form);
    const { email, password } = Object.fromEntries(newForm.entries());
    // console.log(email, password);

    // validate password
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const specialCharacter = /[\W_]/;
    if (!upperCase.test(password)) {
      toast.error("password must have at least 1 upper case");
      return;
    }
    if (!lowerCase.test(password)) {
      toast.error("password must have at least 1 lower case");
      return;
    }
    if (!specialCharacter.test(password)) {
      toast.error("password must have at least 1 special character");
      return;
    }
    if (password.length < 8) {
      toast.error("password must have at least 8 character");
      return;
    }

    // user sign in with email and password
    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("User Successfully logged in");
        navigate("/");
        form.reset();
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-green-100 min-h-screen w-11/12 mx-auto">
      <Fade delay={200} duration={1000} fraction={0.5} triggerOnce>
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={image} className="lg:h-[600px] lg:rounded-r-2xl" alt="" />
          </div>
          <div className="bg-base-100 w-full lg:max-w-sm shrink-0 lg:rounded-l-2xl">
            <div className="card-body">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center">
                Login
              </h1>
              <button
                onClick={handleLoginWithGoogle}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <FcGoogle size={20} />
                Login with Google
              </button>
              <p className="text-center">or</p>

              <p className="text-black/50 text-center">
                Enter your information to Login
              </p>
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <div className="relative flex items-center">
                  <MdOutlineEmail size={20} className="absolute z-10 pl-1" />
                  <input
                    required
                    name="email"
                    type="email"
                    className="input w-full px-5"
                    placeholder="Email"
                  />
                </div>
                <label className="label">Password</label>
                <div className="relative flex items-center">
                  <RiLockPasswordLine
                    size={20}
                    className="absolute z-10 pl-1"
                  />
                  {show ? (
                    <FaRegEyeSlash
                      onClick={() => setShow(false)}
                      size={20}
                      className="absolute z-10 right-0 mr-2 cursor-pointer"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setShow(true)}
                      size={20}
                      className="absolute z-10 right-0 mr-2 cursor-pointer"
                    />
                  )}
                  <input
                    required
                    name="password"
                    type={show ? "text" : "password"}
                    className="input w-full px-5"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-neutral bg-green-500 border-none mt-4"
                >
                  Login
                </button>
                <div>
                  <p>
                    Already have an account?{" "}
                    <Link
                      to={"/register"}
                      className="link link-hover hover:text-red-500"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Login;

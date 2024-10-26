import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { loginUser } from "../store/reducers/authSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Password too short").required("Required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(userData)).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        toast.success("Logged in successfully!");
      } else if (action.meta.requestStatus === "rejected") {
        toast.error(action.payload || "Login failed");
      }
    });
  };
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: handleLogin,
  });
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;

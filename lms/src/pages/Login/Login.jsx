import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});
    setApiError("");

    // Validate required fields
    if (!formData.email || !formData.password) {
      setErrors({
        email: !formData.email ? "Username or Email is required" : "",
        password: !formData.password ? "Password is required" : "",
      });
    }
  };

  async function login() {
    try {
      let item = {
        email: formData.email,
        password: formData.password,
      };

      let result = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

      if (result.ok) {
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        await updateUserLoginStatus(result.user, 1);
        navigate("/");
      } else {
        const errorData = await result.json();

        if (errorData && errorData.errors) {
          console.error("Validation errors:", errorData.errors);
          setErrors(errorData.errors);
        } else {
          setApiError("Invalid username or password");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  async function updateUserLoginStatus(userId, value) {
    try {
      const result = await fetch(
        `http://127.0.0.1:8000/api/updateLoggedInStatus/${userId}/${value}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ isLoggedIn: value }),
        }
      );

      if (!result.ok) {
        console.error("Error updating user login status");
      }
    } catch (error) {
      console.error("Error updating user login status:", error);
    }
  }

  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="card-container shadow-xl">
        <div className="card w-80 p-6">
          <h1 className="text-center pb-3 font-mono">Login</h1>
          <form onSubmit={handleSubmit}>
            <InputGroup mb="16px">
              <InputLeftAddon>
                <FaLock />
              </InputLeftAddon>
              <Input
                type="email"
                name={"email"}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                isRequired
              />
            </InputGroup>
            {errors.email && <span className="error">{errors.email}</span>}

            <InputGroup mb="16px">
              <InputLeftAddon>
                <FaEnvelope />
              </InputLeftAddon>
              <Input
                type={showPassword ? "text" : "password"}
                name={"password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                isRequired
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}

            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              className="w-full font-mono"
              onClick={login}
            >
              Login
            </Button>
            {apiError && <span className="error">{apiError}</span>}
            <Text className="mt-1">
              Do not have an account?{" "}
              <ChakraLink as={Link} to="/signup">
                <span className=" text-teal-800 font-bold text-lg font-mono">Register</span>
              </ChakraLink>
            </Text>
          </form>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;

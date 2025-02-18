"use client";

// import { FormEvent, useState } from "react";
// import { URL } from "@/constants/url";
// import { API_ENDPOINTS } from "@/constants/api-endpoints";
// import Icon from "@/components/ui/icon/icon";
// import { ICONS } from "@/constants/icons";
import styles from "./sign-in-form.module.scss";

export default function SignInForm() {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const [error, setError] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);
  // const [showPassword, setShowPassword] = useState<boolean>(false);

  // const toggleShowPassword = () => {
  //   setShowPassword((p) => !p);
  // };

  // const handleSubmit = async (event: FormEvent) => {
  //   event.preventDefault();

  //   setLoading(true);
  //   setError("");

  //   try {
  //     const response = await fetch(`${URL}${API_ENDPOINTS.ADMIN_LOGIN}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Invalid login credentials");
  //     }

  //     const data = await response.json();
  //     const token = data.token;

  //     localStorage.setItem("adminToken", token);

  //     window.location.href = "/dashboard/admin";
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       setError("Failed to log in" + error.message);
  //     } else {
  //       setError("An unknown error occurred");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <form className={styles["admin-sign-in__form"]}>
      <div className={styles["admin-sign-in__form-email"]}>
        <label htmlFor="email">Email</label>
        {/* <InputText
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> */}
      </div>
      <div
        className={`
        ${styles["admin-sign-in__form-password"]} 
        ${styles["form-password"]}
      `}
      >
        <label htmlFor="password">Password</label>
        <div className={styles["form-password__field"]}>
          {/* <InputText
            className={styles["form-password__field-input"]}
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> */}
          {/* <button
            className={styles["form-password__field-button"]}
            onClick={toggleShowPassword}
            type="button"
          >
            <Icon icon={showPassword ? ICONS.hide : ICONS.show} color="gray" />
          </button> */}
        </div>
      </div>
      {/* {error && <div style={{ color: "red" }}>{error}</div>} */}
      {/* <Button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Sign In"}
      </Button> */}
    </form>
  );
}

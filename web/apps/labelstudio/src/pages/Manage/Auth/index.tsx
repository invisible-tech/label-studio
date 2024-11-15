import { Button, Input } from "antd";
import { AuthContext } from "apps/labelstudio/src/providers/AuthProvider";
import { absoluteURL } from "apps/labelstudio/src/utils/helpers";
import { useContext, useState } from "react";

const AuthPageComponent = () => {
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <div>
      <div
        style={{
          height: "48px",
          display: "flex",
          backgroundColor: "rgb(253, 253, 252)",
          borderBottom: "1px solid rgb(225, 222, 213)",
          padding: "0 0 0 1.125rem",
          alignItems: "center"
        }}
      >
        <div>
          <img
            src={absoluteURL("/static/icons/inv-workplace.svg")}
            alt="Label Studio Logo"
            height="22"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "200px",
          margin: "auto",
          height: "100vh",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <Input
            value={userLogin}
            size="small"
            onChange={e => setUserLogin(e.target.value)}
            placeholder="Username"
          />
          <Input
            value={password}
            size="small"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="primary"
            onClick={() => {
              login(userLogin, password);
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export const AuthPage = {
  title: "Auth",
  path: "/auth",
  exact: true,
  component: AuthPageComponent
};

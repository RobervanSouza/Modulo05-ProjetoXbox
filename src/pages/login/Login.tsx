import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "Auth/Context/AuthContext";
import React, { useState } from "react";
import { Box1, Box2, Box3 } from "./style";
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
});

interface ILoginProps {
  children: React.ReactNode;
}

export const Login: React.FC<ILoginProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

const handleSubmit = () => {

  loginSchema
  .validate({ email, password },{ abortEarly: false} )
  .then((dadosValidados) => {
    login(dadosValidados.email, dadosValidados.password).then(() => {
      window.location.reload();
     
    });
  })
  .catch((errors: yup.ValidationError) => {
      errors.inner.forEach((error) => {
      if (error.path === "email") {
        setEmailError(error.message);
      } else if (error.path === "password") {
        setPasswordError(error.message);
      }
    });
  });
}

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <Box1>
      <Card>
        <CardContent>
          <Box3>
            <Typography>Identifique-se</Typography>

            <TextField
              fullWidth
              label="Email"
              type="Email"
              value={email}
              error={!!emailError}
              helperText={emailError}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={e => setEmailError('')}
            />
            <TextField
              fullWidth
              label="Senha"
              type="password"
              value={password}
              error={!!passwordError}
              helperText={passwordError}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={e => setPasswordError('')}
            />
          </Box3>
        </CardContent>
        <CardActions>
          <Box2>
            <Button variant="contained" onClick={handleSubmit}>
              Entrar
            </Button>
          </Box2>
        </CardActions>
      </Card>
    </Box1>
  );
};

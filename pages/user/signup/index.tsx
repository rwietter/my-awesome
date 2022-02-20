import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import * as S from "../../../components/login/style";

const Login = () => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const response = await axios.post("/api/signup/", {
      user: e.currentTarget.username.value,
      pass: e.currentTarget.password.value,
      email: e.currentTarget.email.value,
    });

    if (response.status !== 200) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return router.push("/user/signin");
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Create account</S.Title>
        <S.Label htmlFor="username">Name</S.Label>
        <S.Input name="username" type="text"></S.Input>
        <S.Label htmlFor="email">e-mail</S.Label>
        <S.Input name="email" type="email"></S.Input>
        <S.Label htmlFor="password">Password</S.Label>
        <S.Input name="password" type="password"></S.Input>
        <S.Submit type="submit">
          <p>Submit</p>
        </S.Submit>
      </S.Form>
    </S.Wrapper>
  );
};

export default Login;
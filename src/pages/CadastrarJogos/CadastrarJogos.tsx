import React from 'react'
import { Cadastrar1 } from './style';
import { Button, Input } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  Label,
  LabelSignin,
  Strong,
  Teste,
  Teste1,
} from "./style";
import * as yup from "yup";
import useAuth from "Auth/UseAuth/UseAuth";

const CadastrarJogos = () => {
  const [name, setName] = useState("");
  const [categoria, setCategoria] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ano, setAno] = useState("");
  const [score, setScore] = useState("");
  const [treiler, setTreiler] = useState("");
  const [gameplay, setGameplay] = useState("");


  const [error, setError] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();
  const { cadastrar } = useAuth();
  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(5),
  });

  const handleSignup = () => {
    if (!categoria || !description || !name || !imageUrl || !ano || !score || !treiler || !gameplay ) {
      setError("Preencha todos os campos");
      return;
    }
    const res = cadastrar(name, categoria);
    if (res) {
      setError(res);
      return;
    }
    console.log(res, "imagem");

    alert("Jogo cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <Container>
      <Label>Cadastrar Jogos </Label>
      <Content>
        <Input
          type="string"
          placeholder="Nome do Jogo"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
        <Input
          type="string"
          placeholder="Nome da Categoria"
          value={categoria}
          onChange={(e) => [setCategoria(e.target.value), setError("")]}
        />

        <Input
          type="string"
          placeholder="Descrição do jogo"
          value={description}
          onChange={(e) => [setDescription(e.target.value), setError("")]}
        />
        <Input
          type="string"
          placeholder="Imagem Url"
          value={imageUrl}
          onChange={(e) => [setImageUrl(e.target.value), setError("")]}
        />
        <Input
          type="string"
          placeholder="Ano do Filme"
          value={ano}
          onChange={(e) => [setAno(e.target.value), setError("")]}
        />
        <Input
          type="string"
          placeholder="Score"
          value={score}
          onChange={(e) => [setScore(e.target.value), setError("")]}
        />
        <Input
          type="string"
          placeholder="Treiler Ulr"
          value={treiler}
          onChange={(e) => [setTreiler(e.target.value), setError("")]}
        />
        <Input
          type="string"
          placeholder="Game play Url"
          value={gameplay}
          onChange={(e) => [setGameplay(e.target.value), setError("")]}
        />
        <Teste> {error}</Teste>
        <Teste1>
          <Button onClick={handleSignup}> Cadastrar</Button>
        </Teste1>
       
      </Content>
    </Container>
  );
};
export default CadastrarJogos;

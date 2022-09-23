import { ContainerFormLogin, ContainerImg } from "./style";
import { useNavigate} from "react-router-dom";
import Input from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import img from '../../../assets/Imgs/img1.png'
import axios from "axios";
import { useState } from "react";

const Login = () => {
  let navigate = useNavigate()
    const instance = axios.create({
        baseUrl: 'https://localhost:3000'
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        instance.post('/AuthIsUser', {
            email,
            password
        }).then(res => {
          if(res.data){
            localStorage.setItem('Login','true')
            navigate('/home')
          }

        })
    }

  return (
    <ContainerFormLogin>

    <ContainerImg src={img}/>

      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Have an Account?</h3>
        <Input
          placeholder="YourGmail@exemple.com"
          type="text"
          id="email"
          name="Username"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Your Password"
          type="password"
          id="password"
          name="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <Button type="submit" name="Log In" />
      </form>
    </ContainerFormLogin>
  );
};

export default Login;

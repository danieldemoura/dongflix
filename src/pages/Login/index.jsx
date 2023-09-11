import { ReactComponent as VisiblePassword} from "../../components/TextField/show-password.svg";
import { ReactComponent as HiddenPassword} from "../../components/TextField/hidden-password.svg";
import { fetchData } from "../../services/MyAPI/fetchData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "../../components/TextField";
import ButtonLink from "../../components/ButtonLink";
import styles from "./Login.module.css";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();
        
        fetchData(data)
        .then(existUser => {
            if (existUser && existUser.length !== 0) {
                localStorage.setItem("isLogin", JSON.stringify(...existUser));
                navigate("/home"); 
            } else {
                alert("O usuário não existe, ou email e senha está incorreto");
            }
        });
    }

    function handleInputChange(event) {
        const {name, value} = event.target
        setData({...data, [name]: value});
    }

    function displayPassword() {
        setShowPassword(!showPassword)
    }


    return (
        <article className={styles.containerForm}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Fazer Login</h1>
                <form onSubmit={login} className={styles.form}>
                    <TextField 
                        type="email" 
                        label="E-mail" 
                        id="email"
                        name="email" 
                        value={data.name}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        type={ showPassword ? "text" : "password"}
                        label="Senha" 
                        id="password" 
                        name="password"
                        value={data.password}
                        onChange={handleInputChange}
                        logo={ 
                            showPassword 
                            ? <VisiblePassword onClick={displayPassword}/>
                            : <HiddenPassword style={{top: "28%"}} onClick={displayPassword}/> 
                        }
                    />
                    <ButtonLink typeStyle="primary" element="button">Entrar</ButtonLink>
                </form>
            </div>
        </article>
    )
}
import { ReactComponent as ShowPassword } from "../../components/TextField/show-password.svg";
import { ReactComponent as HiddenPassword } from "../../components/TextField/hidden-password.svg";
import { registerUser } from "../../services/MyAPI/registerUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonLink from "../../components/ButtonLink";
import TextField from "../../components/TextField";
import styles from "./SignUp.module.css";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });
    let dataComplete = {}

    function signUpUser(event) {
        event.preventDefault();
        createUserName()
        localStorage.setItem("isLogin", JSON.stringify(dataComplete));
        
        registerUser(dataComplete).then(() => {
            navigate("/home");
        })
    }

    function createUserName() {
        const name = userData.name;
        const nameLowerCase = name.toLowerCase();
        const username = nameLowerCase.replace(/\s+/g, "");
        dataComplete = {...userData, username: username}
    }
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserData({...userData, [name]: value});   
    }

    function displayPassword() {
        setShowPassword(!showPassword)
    }

    return (
        <article className={styles.containerForm}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Crie uma Conta</h1>
                <form onSubmit={signUpUser} method="POST" className={styles.form}>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>
                            *Se você tiver uma conta no Github digite o mesmo nome de usuário, se não tiver ignore essa mensagem e continue com o cadastro normalmente.
                        </legend>
                        <TextField 
                            type="text" 
                            label="*Nome Completo" 
                            id="name" 
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange} 
                        />
                        <TextField 
                            type="email" 
                            label="E-mail" 
                            id="email" 
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                        <TextField 
                            type={ showPassword ? "text" : "password"}
                            label="Senha" 
                            id="password" 
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                            logo={ 
                                showPassword 
                                ? <ShowPassword onClick={displayPassword}/>
                                : <HiddenPassword style={{top: "28%"}} onClick={displayPassword}/> 
                            }
                        />
                    </fieldset>
                    <ButtonLink typeStyle="primary" element="button">Finalizar Cadastro</ButtonLink>
                </form>
            </div>
        </article>
    )
}
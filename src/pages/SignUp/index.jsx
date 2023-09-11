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
        avatar: "",
        email: "",
        password: "",
    });

    function signUpUser(event) {
        event.preventDefault();
        localStorage.setItem("isLogin", JSON.stringify(userData));
        
        registerUser(userData).then(() => {
            navigate("/home");
        })
    }

    function createURLAvatar(value) {
        const name = value;
        const avatar = name.toLowerCase();
        const url = avatar.replace(/\s+/g, "");
        return `https://github.com/${url}.png`
    }
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        let url = userData.avatar;

        if(name === "name") {
            url = createURLAvatar(value);
        }

        setUserData({...userData, [name]: value, avatar: url});
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
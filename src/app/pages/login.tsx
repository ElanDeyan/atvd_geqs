import styles from './login.module.css'

export default function Login() {
    return (
        <form id='login-form' className={styles.loginForm}>
            <h1>Bem vindo(a)</h1>

            <div className="login-field">
                <label htmlFor="username">Usuário:</label>
                <input type="text" name="username" id="username" />
            </div>

            <div className="password-field">
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" />
            </div>

            <input className={styles.submitBtn} type="submit" value="Enviar" />

            <a className={styles.forgotPwd} href="http://./">Esqueci minha senha</a>
        </form>
    );
}
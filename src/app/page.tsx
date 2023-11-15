import Login from './pages/login'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
      <p>Version 2.0.0</p>
    </main>
  )
}

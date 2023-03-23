import Login from "./components/login"
import Dashboard from "./components/dashboard"

const code = new URLSearchParams(window.location.search).get("code")

export default function App() {
  return (
    code ? <Dashboard code={code} /> : <Login />
  )
}
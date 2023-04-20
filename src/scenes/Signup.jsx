export default function Login ( setUser)  {
return (
    <section style={{background: "#fff0030"}}>
     <h1>Login</h1>
     <button onClick={() => setUser('Returning User')}>Login</button>
    </section>
)
}
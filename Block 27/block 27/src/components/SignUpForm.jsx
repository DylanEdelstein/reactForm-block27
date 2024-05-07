import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  setToken(result.token);

async function handleSubmit(event) {
  event.preventDefault();

const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
const result = await response.json();
console.log(result);

  try {
  } catch (error) {
    setError(error.message);
  }
}

return (
<>

    <h2>Sign Up!</h2>;
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>

      <label>
              Username:
      </label>

    <input value={username}
     onChange={(e) => setUsername(e.target.value)} 
     />
      
  
  <label>
    Password:
    <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
            
  </label>
  <button>Submit</button>
</form>

</>
);
}


function Signup() {
  return (
    <div className="auth">

      <h1>Signup</h1>

      <input
        placeholder="Name"
      />

      <input
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button>
        Create Account
      </button>

    </div>
  );
}

export default Signup;
import React from "react";

function Login() {

    let submitHandler=(event)=>{
        event.preventDefault()
    }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-md rounded-xl">
        <form  onSubmit={submitHandler} className="flex flex-col items-center justify-center space-y-4">
          <input
          required
            className="border-2 outline-none border-emerald-600 rounded-full   px-5 py-4 text-xl bg-transparent "
            type="email"
            placeholder="youremail@mail.com"
            name="email"
            id="email"
          />
          <input
          required
            className="border-2 mt-4 outline-none border-emerald-600 rounded-full bg-transparent  px-5 py-4 text-xl"
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
          />
          <button
          className="outline-none bg-emerald-600 rounded-full mt-4  px-5 py-2 text-xl"
            type="submit"
           >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

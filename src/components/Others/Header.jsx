function Header({ changeUser, data }) {
  const logOut = () => {
    localStorage.setItem('loggedInUser', "");
    changeUser("");
  };

  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4'>
      <h1 className='text-2xl font-medium'>
        Hello <br /> 
        <span className='text-3xl font-semibold'>{data?.name || "Admin"} 👋</span>
      </h1>
      <button className='bg-red-600 text-lg font-medium px-6 py-2 rounded' onClick={logOut}>
        Log out
      </button>
    </div>
  );
}

export default Header
function Header() {
  return (
    <div className='flex items-end justify-between'>
      <h1 className="text-3xl">Hello <br/><span className="text-4xl text-semibold">Smit</span></h1>
      <button
            type="submit"
            className="mt-4 bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition"
          >
            Log Out
          </button>
    </div>
  );
}

export default Header;

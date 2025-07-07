export default function Login() {
  return (
    <>
      <div>
        <form
          style={{
            backgroundColor: "#f2f2f2",
            width: "50%",
            margin: "20px auto",
          }}
        >
          <div className="p-3 grid gap-4 mb-2 md:grid-cols-1">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="sample@gmail.com"
              ></input>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                type="text"
                id="Password"
                name="Password"
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              ></input>
            </div>
            <div>
              <button className="border rounded-md block mx-auto text-white border-gray-100 bg-red-500  p-2 hover:bg-red-800 transition-colors">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

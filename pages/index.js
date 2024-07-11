import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center w-full dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <div className="flex justify-center items-center mb-3">
              <Image src="/image/logo/trackerteer.png" alt="logo" width={50} height={50} className="mr-2" />
              <div className="text-center">
                  <h1 className="text-2xl font-bold dark:text-gray-200">Employee Portal</h1>
                  <p className="text-end text-xs dark:text-gray-300 font-bold">v1.03.1</p>
              </div>
          </div>


            <form action="#">
                <div className="mb-4">
                    <label className="relative w-full">
                  <input
                    type="text"
                    className="h-10 w-full px-4 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500 focus:text-black transition duration-200"
                  />
                  <span className="text-sm text-gray-500 text-opacity-80 absolute left-4 top-1/2 transform -translate-y-1/2 transition duration-200 input-text">
                    EMAIL ADDRESS
                  </span>
                </label>

                </div>
                <div className="mb-4">
                     <label className="relative w-full">
                  <input
                    type="password"
                    className="h-10 w-full px-4 text-lg bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500 focus:text-black transition duration-200"
                  />
                  <span className="text-sm text-gray-500 text-opacity-80 absolute left-4 top-1/2 transform -translate-y-1/2 transition duration-200 input-text">
                    PASSWORD
                  </span>
                </label>
                    
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" />
                        <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#" className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password</a>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">Login</button>
              </form>
        </div>
    </div>

    </>
  )
}
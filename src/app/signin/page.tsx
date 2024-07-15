import Image from 'next/image';

export default function SignIn() {
  return (
    <div className="flex gap-5 md:w-5/6 m-auto px-5 items-center justify-center h-screen">
      <form className="space-y-5 md:w-1/2">
        <h3 className="text-2xl font-bold text-primary">Welcome to Doctrine</h3>
        <p>Enter your details t use doctrine services </p>

        <div className="space-y-3">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="email" className="font-semibold text-primary">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Input your placeholder here"
              className="p-2 border border-gray-400 bg-transparent rounded"
            />
          </div>

          <div className="space-y-1 flex flex-col">
            <label htmlFor="password" className="font-semibold text-primary">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Input your password here"
              className="p-2 border border-gray-400 bg-transparent rounded"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <p className="space-x-2">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </p>
            <a href="" className="text-primary">
              Forgot Password?
            </a>
          </div>
          <div>
            <button className="bg-primary px-5 py-3 w-full text-stone-200 rounded">
              Sign Up
            </button>
          </div>
          <div className="text-center">OR</div>
          <div>
            <button className="px-5 py-3 w-full border border-gray-300 rounded">
              Sign Up with Google
            </button>
          </div>
          <div>
            <button className="px-5 py-3 w-full border border-gray-300 rounded">
              Sign Up with Facebook
            </button>
          </div>
        </div>
      </form>
      <div className="hidden md:block w-1/2">
        <Image src="" alt="" />
      </div>
    </div>
  );
}

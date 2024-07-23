export default function InputResetPasswordEmail() {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-xl text-primary">Forgot Password</h3>
      <p className="text-stone-600">
        Input your email to recover access to your account
      </p>

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

      <div>
        <button className="bg-primary px-5 py-3 w-full text-stone-200 rounded">
          Continue
        </button>
      </div>
    </div>
  );
}

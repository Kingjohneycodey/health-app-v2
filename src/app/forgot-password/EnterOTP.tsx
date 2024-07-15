export default function EnterOTP() {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-xl">OTP verification</h3>
      <p className="text-stone-600">
        Our team just sent you a mail to access back your account
      </p>

      <div className="flex gap-4">
        <input
          type="password"
          max="1"
          className="p-2 size-12 border border-gray-400 bg-transparent rounded text-center"
        />
        <input
          type="password"
          max="1"
          className="p-2 size-12 border border-gray-400 bg-transparent rounded text-center"
        />
        <input
          type="password"
          max="1"
          className="p-2 size-12 border border-gray-400 bg-transparent rounded text-center"
        />
        <input
          type="password"
          max="1"
          className="p-2 size-12 border border-gray-400 bg-transparent rounded text-center"
        />
        <input
          type="password"
          max="1"
          className="p-2 size-12 border border-gray-400 bg-transparent rounded text-center"
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

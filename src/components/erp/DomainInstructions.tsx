export const DomainInstructions = () => {
  return (
    <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md text-sm text-gray-800">
      <h4 className="font-semibold mb-2">📌 How to Point Your Domain</h4>

      <ol className="list-decimal ml-5 space-y-2">
        <li>
          Log in to your domain provider (e.g. GoDaddy, Namecheap, Google
          Domains).
        </li>
        <li>
          Go to the DNS settings for your domain (e.g.{" "}
          <code>yourdomain.com</code>).
        </li>
        <li>
          Add a new <strong>A Record</strong>:
          <ul className="list-disc ml-5 mt-1 text-sm">
            <li>
              <strong>Type:</strong> A
            </li>
            <li>
              <strong>Host:</strong> @
            </li>
            <li>
              <strong>Value:</strong> <code>123.456.78.90</code>{" "}
              {/* your server IP */}
            </li>
            <li>
              <strong>TTL:</strong> Automatic or 30 min
            </li>
          </ul>
        </li>
        <li className="mt-2">
          (Optional) Add a <strong>CNAME</strong> for <code>www</code> → your
          root domain.
        </li>
        <li>
          Save your DNS settings and allow up to 24 hours for changes to
          propagate (usually much faster).
        </li>
      </ol>

      <p className="mt-4">
        Once done, submit your domain above and we’ll connect it to your ERP
        instance.
      </p>
    </div>
  );
};

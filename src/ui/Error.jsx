import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import { useState } from "react";

function NotFound() {
  const error = useRouteError();
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = "IIDSAT";
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopied(true);
  };

  if (error.message.slice(0, 19) === "Couldn't find order") {
    return (
      <div className="m-3 ">
        <div className="rounded-lg bg-stone-200 p-5 text-xl font-semibold text-stone-600 ">
          The Order ID You Are Trying To Find Is Not Available. <br />
          <br /> Do this instead:
          <br />
          1. Go to Menu And Place Order And Get your own #Order ID <br />
          2. OR Use my test #Order ID :{" "}
          <span
            onClick={handleCopyClick}
            className="inline-flex items-center justify-center space-x-1 bg-stone-300 p-1 italic "
          >
            {copied ? "Copied!" : <p>IIDSAT</p>}
            <span>
              <img className="flex h-4" src="/copy.png"></img>
            </span>
          </span>
        </div>
        <LinkButton to="-1">&larr; Go Back</LinkButton>
      </div>
    );
  }

  return (
    <div className="m-4 space-y-3">
      <h1 className="text-xl font-semibold ">Something went wrong 😢</h1>
      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </div>
  );
}

export default NotFound;

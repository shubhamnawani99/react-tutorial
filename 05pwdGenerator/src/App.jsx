import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isSplChars, setIsSplChars] = useState(false);
  const [password, setPassword] = useState(""); // generate password on PageLoad
  const [isUpper, setUpper] = useState(false);

  // useRef hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = () => {
    // we will use "passwordRef" to highlight the copied text
    // ? is used to select optionally
    passwordRef.current?.select();
    // Highlights Range as given, the pwd copied would still be complete not sliced
    // since it is affected by the code at the bottom
    passwordRef.current?.setSelectionRange(0, 3);
    // copy the text to clipboard
    // nextjs does not have a window object on server side rendering
    window.navigator.clipboard.writeText(password);
  };

  const pwdGenerator = () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (isUpper) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumber) str += "0123456789";
    if (isSplChars) str += "!@#$%^&*())_+{}[]";
    for (let index = 0; index < length; index++) {
      let random_index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random_index);
    }
    setPassword(pass);
  };

  // ******************** OPTIONAL ************************
  //
  // if the function is called multiple times thorught the app, eg:
  // multiple dependencies have an effect on the function the
  // useCallback method can be used to cache the method value for '''optimization'''
  const passwordGenerator = useCallback(pwdGenerator, [
    length,
    isNumber,
    isUpper,
    isSplChars,
    setPassword,
  ]);

  // Any change in dependences will cause the function to run
  // THE DEPENDENCIES IN useEffect and useCallback may NOT be the same
  useEffect(passwordGenerator, [
    length,
    isNumber,
    isSplChars,
    isUpper,
    setPassword,
  ]);

  return (
    <>
      <div className="font-medium w-full max-w-xl mx-auto shadow-md rounded-lg py-4 px-4 my-8 text-orange-500 bg-gray-800">
        <p className="text-center text-white text-xl">Password Generator</p>
        <div className="my-2 flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1"></div>
          <input
            type="range"
            min={6}
            max={500}
            value={length}
            className="cursor-pointer"
            // ????
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />{" "}
          <label htmlFor="length">Length : {length}</label>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isUpper}
              id="upperInput"
              onChange={() => {
                setUpper((prev) => !prev);
              }}
            />
            <label htmlFor="upperInput">Uppercase</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
            />
            <label htmlFor="Number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isSplChars}
              id="splCharInput"
              onChange={() => {
                setIsSplChars((prev) => !prev);
              }}
            />
            <label htmlFor="splCharInput">Spl. Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

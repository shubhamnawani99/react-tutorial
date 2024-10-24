// If you use the {} braces in the arguements, then the variables inside can be used directly
// Default value can be added at the top
function Card({ name = "Default Name", title = "Default" }) {
  console.log("Name Props: ", name);
  return (
    <div className="max-w-xs p-6 mb-4 rounded-md shadow-md bg-black">
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {name}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          {/* Use pipe || Symbol for default value */}
          {title}
        </h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        tempora ipsum soluta amet
      </p>
    </div>
  );
}

export default Card;

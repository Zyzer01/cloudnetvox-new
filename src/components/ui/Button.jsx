export default function Button({ text }) {
  return (
    <>
      <button className="py-3 px-8 bg-white text-domain hover:text-white hover:bg-domain hover:drop-shadow-md transition ease-in-out duration-300 font-medium rounded-full">
        {text}
      </button>
    </>
  );
}

export default function ButtonV2({ text, isFullWidth }) {
  return (
    <>
      <button
        className={`py-3 ${
          isFullWidth && 'w-full'
        } px-8 bg-domain text-white hover:text-domain hover:bg-white hover:drop-shadow-md transition ease-in-out duration-300 font-medium rounded-full`}>
        {text}
      </button>
    </>
  );
}

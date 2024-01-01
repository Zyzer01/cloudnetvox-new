import Header from './Header';

const Brag = ({ heading, sub, guaranteeBox }) => {
  return (
    <div>
      <Header heading={heading} sub={sub} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-white p-16 lg:p-28">
        {guaranteeBox.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl text-center px-6 py-14 border flex flex-col items-center justify-center space-y-5">
            <p className="text-5xl text-domain">{item.icon}</p>
            <h6 className="text-lg">{item.boxTitle}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brag;

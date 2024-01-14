import Counter from './Counter';
import Image from 'next/image';

const BeforeFooter = () => {
  return (
    <div>
      <div className="relative flex justify-center">
        <Image
          src="/images/support-pattern.png"
          width={1920}
          height={243}
          alt="cloud support engineering"
        />
        <h4 className="text-md md:text-xl lg:text-3xl absolute hidden md:block md:top-16 lg:top-24 text-white">
          Need help? Call our Pro-active support team 24/7: +234 702-500-0200
        </h4>
      </div>
      <div className="h-10 my-8 md:my-16 flex justify-center items-center">
        <h4 className="text-center text-lg md:text-3xl">
          Proudly Hosting Over{' '}
          <span className="text-domain">
            <Counter value={10000} />
          </span>{' '}
          Websites Since 2015
        </h4>
      </div>
    </div>
  );
};

export default BeforeFooter;

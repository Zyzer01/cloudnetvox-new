import BreadCrumbs from "./ui/BreadCrumbs";

const AltHero = ({ pageTitle, pageSub, breadcrumb }) => {
  return (
    <div className="">
      <div className="bg-primary text-white px-6 md:px-0 -mt-[65px] md:-mt-20 h-96 grid md:grid-cols-4 place-content-center place-items-center ">
        <div></div>
        <div className="text-white text-center col-span-4 md:col-span-2">
          <div className="py-16">
            <h1 className="text-3xl md:text-4xl py-4">{pageTitle}</h1>
            <p className="">{pageSub}</p>
          </div>
          <BreadCrumbs page={breadcrumb} />
        </div>
        <div></div>
      </div>
      {/* <svg
        width="100%"
        viewBox="0 0 1280 47"
        preserveAspectRatio="none"
        class=" z-10 h-16 -mb-32"
      >
        <path
          d="M1280 36.1212C1123.37 13.9672 894.482 7.6923e-05 639.532 5.46345e-05C385.092 3.23907e-05 156.613 13.9113 0.00195409 35.9884L0.00195312 46.9999L1280 47L1280 36.1212Z"
          fill="white"
        ></path>
      </svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,192L18.5,176C36.9,160,74,128,111,117.3C147.7,107,185,117,222,138.7C258.5,160,295,192,332,213.3C369.2,235,406,245,443,240C480,235,517,213,554,186.7C590.8,160,628,128,665,144C701.5,160,738,224,775,229.3C812.3,235,849,181,886,170.7C923.1,160,960,192,997,181.3C1033.8,171,1071,117,1108,128C1144.6,139,1182,213,1218,245.3C1255.4,277,1292,267,1329,250.7C1366.2,235,1403,213,1422,202.7L1440,192L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
        ></path>
      </svg> */}
    </div>
  );
};

export default AltHero;

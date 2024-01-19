import BreadCrumbs from './ui/BreadCrumbs'; 

const AltHero = ({ pageTitle, pageSub, breadcrumb }) => { 
  return (
      <div className="bg-primary text-white -mt-[65px] md:-mt-20 grid md:grid-cols-4 place-content-center place-items-center h-96">
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
  );
};

export default AltHero;

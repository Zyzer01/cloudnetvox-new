import { useState } from "react";
import "../styles/table.css";
import { domainPrices } from "@/utility/domainNameData";



const PriceFormatted = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      currency: 'NGN',
    }).format(price);
  
    return <>{formattedPrice}</>;
  };

const DomainRow = ({
  tag,
  ext,
  formerRegPrice,
  formerRenewPrice,
  formerTransferPrice,
  regPrice,
  renewPrice,
  transferPrice,
  tagColor,
}) => {



  const [showMore, setShowMore] = useState()

  
  return (
    <tr>
      <th scope="row">
        {ext}{" "}
        <span className={`${tagColor} ml-2 text-xs p-1.5 rounded-md font-medium`}>
          {tag}
        </span>
      </th>
      <td>
        <del>{formerRegPrice}</del>
        <span className="text-muted font-medium"> &#8358;<PriceFormatted price={regPrice}/></span>
      </td>
      <td>
        <del>{formerRenewPrice}</del>
        <span className="text-muted font-medium"> &#8358;<PriceFormatted price={renewPrice}/></span>
      </td>
      <td>
        <del>{formerTransferPrice}</del>
        <span className="text-muted font-medium"> &#8358;<PriceFormatted price={transferPrice}/></span>
      </td>
    </tr>
  );
};



const DomainList = () => {
  return (
    <div>
      <div className="domain-table-section ">
        <div className="container flex justify-center">
          <div className="table-plan-box">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="border-t-0 pt-0">
                    Extensions (TLD)
                  </th>
                  <th scope="col" className="border-t-0 pt-0">
                    Register
                  </th>
                  <th scope="col" className="border-t-0 pt-0">
                    Renew
                  </th>
                  <th scope="col" className="border-t-0 pt-0">
                    Transfer
                  </th>
                </tr>
              </thead>
              <tbody>
                {domainPrices.map((item, index) => (
                  <DomainRow
                    key={index}
                    ext={item.ext}
                    formerRegPrice={item.formerRegPrice}
                    regPrice={item.regPrice}
                    formerRenewPrice={item.formerRenewPrice}
                    renewPrice={item.renewPrice}
                    formerTransferPrice={item.formerTransferPrice}
                    transferPrice={item.transferPrice}
                    tag={item.tag}
                    tagColor={item.tagColor}
                  />
                ))}
                <tr>
                  <th scope="row">.mobi.ke</th>
                  <td>&#8358;3,450</td>
                  <td>&#8358;3,450</td>
                  <td>&#8358;3,450</td>
                </tr>
                <tr>
                  <th scope="row">.mobi.ng</th>
                  <td>&#8358;1,250</td>
                  <td>&#8358;1,250</td>
                  <td>&#8358;1,250</td>
                </tr>
                <tr>
                  <th scope="row">.name</th>
                  <td>&#8358;4,800</td>
                  <td>&#8358;4,800</td>
                  <td>&#8358;4,800</td>
                </tr>
                <tr>
                  <th scope="row">.ne.ke</th>
                  <td>&#8358;3,450</td>
                  <td>&#8358;3,450</td>
                  <td>&#8358;3,450</td>
                </tr>
                <tr>
                  <th scope="row">.ngo / .ong</th>
                  <td>&#8358;16,800</td>
                  <td>&#8358;16,800</td>
                  <td>&#8358;16,800</td>
                </tr>
                <tr>
                  <th scope="row">.net.gh</th>
                  <td>&#8358;20,950</td>
                  <td>&#8358;20,950</td>
                  <td>&#8358;20,950</td>
                </tr>
                <tr>
                  <th scope="row">.net.ng</th>
                  <td>&#8358;20,950</td>
                  <td>&#8358;20,950</td>
                  <td>&#8358;20,950</td>
                </tr>
                <tr>
                  <th scope="row">.net.za</th>
                  <td>&#8358;5,950</td>
                  <td>&#8358;5,950</td>
                  <td>&#8358;5,950</td>
                </tr>
                <tr>
                  <th scope="row">.or.ke</th>
                  <td>&#8358;3,450</td>
                  <td>&#8358;3,450</td>
                  <td>&#8358;3,450</td>
                </tr>
                <tr>
                  <th scope="row">.org</th>
                  <td>&#8358;6,700</td>
                  <td>&#8358;6,700</td>
                  <td>&#8358;6,700</td>
                </tr>
                <tr>
                  <th scope="row">.org.gh</th>
                  <td>&#8358;20,950</td>
                  <td>&#8358;20,950</td>
                  <td>&#8358;20,950</td>
                </tr>
                <tr>
                  <th scope="row">.org.ng</th>
                  <td>&#8358;1,200</td>
                  <td>&#8358;1,200</td>
                  <td>&#8358;1,200</td>
                </tr>
                <tr>
                  <th scope="row">.org.za</th>
                  <td>&#8358;5,050</td>
                  <td>&#8358;5,050</td>
                  <td>&#8358;5,050</td>
                </tr>
                <tr>
                  <th scope="row">.sc.ke</th>
                  <td>&#8358;3,450</td>
                  <td>&#8358;3,450</td>
                  <td>&#8358;3,450</td>
                </tr>
                <tr>
                  <th scope="row">.sch.ng</th>
                  <td>&#8358;1,200</td>
                  <td>&#8358;1,200</td>
                  <td>&#8358;1,200</td>
                </tr>
                <tr>
                  <th scope="row">.web.za</th>
                  <td>&#8358;5,050</td>
                  <td>&#8358;5,050</td>
                  <td>&#8358;5,050</td>
                </tr>
                <tr>
                  <th scope="row">.store</th>
                  <td>&#8358;21,450</td>
                  <td>&#8358;21,450</td>
                  <td>&#8358;21,450</td>
                </tr>
                <tr>
                  <th scope="row">.shop</th>
                  <td>&#8358;13,150</td>
                  <td>&#8358;13,150</td>
                  <td>&#8358;13,150</td>
                </tr>
                <tr>
                  <th scope="row">.social</th>
                  <td>&#8358;11,900</td>
                  <td>&#8358;11,900</td>
                  <td>&#8358;11,900</td>
                </tr>
                <tr>
                  <th scope="row">.online</th>
                  <td>&#8358;13,950</td>
                  <td>&#8358;13,950</td>
                  <td>&#8358;13,950</td>
                </tr>
                <tr>
                  <th scope="row">.fashion</th>
                  <td>&#8358;11,900</td>
                  <td>&#8358;11,900</td>
                  <td>&#8358;11,900</td>
                </tr>
                <tr>
                  <th scope="row">.tv</th>
                  <td>&#8358;14,050</td>
                  <td>&#8358;14,050</td>
                  <td>&#8358;14,050</td>
                </tr>
                <tr>
                  <th scope="row">.top</th>
                  <td>&#8358;3,700</td>
                  <td>&#8358;3,700</td>
                  <td>&#8358;3,700</td>
                </tr>
                <tr>
                  <th scope="row">.me</th>
                  <td>&#8358;12,200</td>
                  <td>&#8358;12,200</td>
                  <td>&#8358;12,200</td>
                </tr>
                <tr>
                  <th scope="row">.in</th>
                  <td>&#8358;4,100</td>
                  <td>&#8358;4,100</td>
                  <td>&#8358;4,100</td>
                </tr>
                <tr>
                  <th scope="row">.us</th>
                  <td>&#8358;4,200</td>
                  <td>&#8358;4,200</td>
                  <td>&#8358;4,200</td>
                </tr>
                <tr>
                  <th scope="row">.xyz</th>
                  <td>&#8358;4,900</td>
                  <td>&#8358;4,900</td>
                  <td>&#8358;4,900</td>
                </tr>
              </tbody>
            </table>
            <a href="https://cloudnetvox.com/clients/cart.php?a=add&amp;domain=register">
              See more domain Names
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainList;

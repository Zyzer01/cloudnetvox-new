import data from "../data/prices.json"

const x = data.domainNames;

export const domainPrices = [
    {
      ext: x.com.ext, 
      tag: "Popular",
      tagColor: 'bg-blue-300',
      formerRegPrice: "₦" + 13000,
      regPrice: x.com.price,
      formerRenewPrice: "₦" + x.com.price,
      renewPrice: x.com.renewPrice,
      formerTransferPrice: "₦" + x.com.price,
      transferPrice: x.com.transferPrice,
    },
    {
      ext: x.africa.ext,
      regPrice: x.africa.price,
      renewPrice: x.africa.renewPrice,
      transferPrice: x.africa.transferPrice,
    },
    {
      tag: "Sale",
      tagColor: "bg-domain text-white",
      ext: x.ng.ext,
      regPrice: x.ng.price,
      renewPrice: x.ng.renewPrice,
      transferPrice: x.ng.transferPrice,
    },
    {
      ext: x.comNG.ext,
      regPrice: x.comNG.price,
      renewPrice: x.comNG.renewPrice,
      transferPrice: x.comNG.transferPrice,
    },
    {
      ext: x.comGH.ext,
      regPrice: x.comGH.price,
      renewPrice: x.comGH.renewPrice,
      transferPrice: x.comGH.transferPrice,
    },
    {
      ext: x.eduNG.ext,
      regPrice: x.eduNG.price,
      renewPrice: x.eduNG.renewPrice,
      transferPrice: x.eduNG.transferPrice,
    },
    {
      ext: x.co.ext,
      regPrice: x.co.price,
      renewPrice: x.co.renewPrice,
      transferPrice: x.co.transferPrice,
    },
    {
      ext: x.eduGH.ext,
      regPrice: x.eduGH.price,
      renewPrice: x.eduGH.renewPrice,
      transferPrice: x.eduGH.transferPrice,
    },
    {
      ext: x.biz.ext,
      regPrice: x.biz.price,
      renewPrice: x.biz.renewPrice,
      transferPrice: x.biz.transferPrice,
    },
    {
      ext: x.net.ext,
      regPrice: x.net.price,
      renewPrice: x.net.renewPrice,
      transferPrice: x.net.transferPrice,
    },
    {
      ext: x.info.ext,
      regPrice: x.info.price,
      renewPrice: x.info.renewPrice,
      transferPrice: x.info.transferPrice,
    },
    {
      ext: x.coZA.ext,
      regPrice: x.coZA.price,
      renewPrice: x.coZA.renewPrice,
      transferPrice: x.coZA.transferPrice,
    },
    {
      ext: x.acKE.ext,
      regPrice: x.acKE.price,
      renewPrice: x.acKE.renewPrice,
      transferPrice: x.acKE.transferPrice,
    },
    {
      ext: x.coKE.ext,
      regPrice: x.coKE.price,
      renewPrice: x.coKE.renewPrice,
      transferPrice: x.coKE.transferPrice,
    },
    {
      ext: x.capetown.ext,
      regPrice: x.capetown.price,
      renewPrice: x.capetown.renewPrice,
      transferPrice: x.capetown.transferPrice,
    },
    {
      ext: x.durban.ext,
      regPrice: x.durban.price,
      renewPrice: x.durban.renewPrice,
      transferPrice: x.durban.transferPrice,
    },
    {
      ext: x.goKE.ext,
      regPrice: x.goKE.price,
      renewPrice: x.goKE.renewPrice,
      transferPrice: x.goKE.transferPrice,
    },
    {
      ext: x.govNG.ext,
      regPrice: x.govNG.price,
      renewPrice: x.govNG.renewPrice,
      transferPrice: x.govNG.transferPrice,
    },
    {
      ext: x.infoKE.ext,
      regPrice: x.infoKE.price,
      renewPrice: x.infoKE.renewPrice,
      transferPrice: x.infoKE.transferPrice,
    },
    {
      ext: x.ke.ext,
      regPrice: x.infoKE.price,
      renewPrice: x.infoKE.renewPrice,
      transferPrice: x.infoKE.transferPrice,
    },
    {
        ext: x.meKE.ext,
        regPrice: x.meKE.price,
        renewPrice: x.meKE.renewPrice,
        transferPrice: x.meKE.transferPrice,
      },
  ];


   {/* <tr>
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
                </tr> */}

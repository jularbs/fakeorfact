import "./styles.scss";

import { GiTwoCoins } from "react-icons/gi";
const StoreFront = () => {
  const testData = [
    {
      coverPhoto:
        "https://play-lh.googleusercontent.com/QNP0Aj2hyumAmYiWVAsJtY2LLTQnzHxdW7-DpwFUFNkPJjgRxi-BXg7A4yI6tgYKMeU",
      name: "500 Gcash Points",
      cost: "500",
    },
    {
      coverPhoto:
        "https://static.wixstatic.com/media/7610a1_3910fca3af3e4eddb40ead8b79bf8fae~mv2.png/v1/fill/w_494,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7610a1_3910fca3af3e4eddb40ead8b79bf8fae~mv2.png",
      name: "150g Pride Detergent",
      cost: "100",
    },
    {
      coverPhoto:
        "https://media.karousell.com/media/photos/products/2021/8/19/grabfood_voucher_php700_for_on_1629374836_363119f3",
      name: "700 Grab eVoucher",
      cost: "1000",
    },
    {
      coverPhoto:
        "https://media.karousell.com/media/photos/products/2021/3/26/lazada_rm25_voucher_1616720474_7b354581_progressive.jpg",
      name: "150 Lazada eVoucher",
      cost: "200",
    },
  ];

  const showPrized = () => {
    return testData.map((item, key) => {
      return (
        <div className="store-item">
          <div
            className="item-image"
            style={{
              backgroundImage: `url('${item.coverPhoto}')`,
            }}
          ></div>
          <div className="details">
            <div className="item-name">{item.name}</div>
            <div className="item-cost">
              <GiTwoCoins className="__icon" />
              <span>{item.cost}</span>
            </div>
            <div className="item-redeem">Redeem</div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="store-front-container">
        {showPrized()}
      </div>
    </>
  );
};

export default StoreFront;

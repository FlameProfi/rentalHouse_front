/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai"
import { useSelector } from "react-redux"

const Listing = ({ searchParamsObj }) => {
  const listingData = useSelector(
    (state) => state.house.listingDetails.listing
  );
  // listing data
  const listingSpace =
    listingData?.privacyType === "Место" ? "Частное" : "Свободное";
  const listingType = listingData?.houseType;

  const nightStaying = searchParamsObj?.nightStaying;

  const basePrice =
    parseInt(nightStaying) !== 0
      ? parseInt(nightStaying) * listingData?.basePrice
      : listingData?.basePrice;

  const tax =
    basePrice !== 0
      ? Math.round((basePrice * 14) / 100)
      : Math.round((listingData?.basePrice * 14) / 100);

  const totalPrice = basePrice + tax;

  // // console.log(listingData, "lis");

  return (
    <div>
      <div className=" border border-[#dddddd] rounded-xl p-6 flex flex-col sticky top-28 min-h-[200px] bg-white">
        {/* listing data */}
        <div className=" flex flex-row gap-2">
          {/* listing img */}
          <img
            src={listingData?.photos[0]}
            alt="listing houses"
            className=" rounded-md object-cover w-[110px] h-[96px] sm:w-[124px] sm:h-[106px]"
          />
          {/* title & desc */}
          <div className=" flex flex-col justify-between">
            <span className=" flex flex-col gap-1">
              <p className="text-xs text-[#717171]">
                {listingSpace} {listingType}
              </p>
              <p className="text-sm text-[#222222]">{listingData?.title}</p>
            </span>
            <span className=" text-xs text-[#222222] flex flex-row gap-1 items-center mt-2">
              <AiFillStar size={16} />
              {listingData?.ratings ? listingData?.ratings : "Новый"}
              {listingData?.reviews && (
                <span>
                  <span>·</span>
                  <span>{listingData?.reviews}</span>
                </span>
              )}
            </span>
          </div>
        </div>
        <hr className="w-full h-[1.3px] bg-[#dddddd] my-6" />
        {/* prices */}
        <div className=" flex flex-col gap-3">
          <h5 className=" text-[22px] text-[#222222] font-medium pb-1">
            Общая сумма
          </h5>
          <span className=" flex flex-row justify-between text-base text-[#222]">
            {/* calculating night/day */}
            {parseInt(nightStaying) === 0 ? (
              <p>1 день</p>
            ) : (
              <p>{nightStaying} ночей</p>
            )}
            {/* calculating price */}
            <p>${basePrice === 0 ? listingData?.basePrice : basePrice}</p>
          </span>
        </div>
        <hr className="w-full h-[1.3px] bg-[#dddddd] my-6" />
        <div className=" flex flex-row justify-between text-base text-[#222] font-medium">
          <p>Всего(RUB)</p>
          <p>{totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Listing;

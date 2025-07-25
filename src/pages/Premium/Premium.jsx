import React, { useState } from "react";
import WebIcons from "../../assets/images";
import { useTranslation } from "react-i18next";

const Premium = () => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const subscriptionList = "flex items-center gap-5";

  return (
    <div className="capitalize font-Roboto mt-5 px-9">
      <h1 className="text-[1.75rem] md:text-[2rem] font-semibold text-textClr ml-4 mt-4 md:mt-0">
        {t("premiumPage.title")}
      </h1>
      <div className="m-5 p-4 border border-gray-400 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-2xl sm:text-[2.5rem] font-bold capitalize text-center mb-5">
          {t("premiumPage.planTitle")}
        </h1>
        <div>
          <p className="text-xl text-[#191D23]">{t("premiumPage.choosePlan")}</p>
          <div className="flex gap-5 items-center mt-3">
            <p className="text-base text-[#191D23]">{t("premiumPage.payMonthly")}</p>
            <button
              onClick={handleToggle}
              className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-400 ${
                isYearly ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
            <p className="sm:text-sm text-base text-[#191D23]">{t("premiumPage.payYearly")}</p>
          </div>
        </div>

        {/* Plans */}
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          {/* Free Plan */}
          <div className="free flex flex-col gap-4 max-w-[417px] h-auto md:h-140 border border-[#AAAAAA] rounded-md p-6">
            <h2 className="font-bold text-xl sm:text-2xl text-[#191D23]">{t("premiumPage.free")}</h2>
            <p className="text-[#64748B] mt-2">{t("premiumPage.freeDesc")}</p>
            <div className="mt-4">
              <span className="relative block text-4xl font-bold text-[#191D23]">
                $0
                <span className="absolute text-sm ml-2 text-[#4B5768] bottom-3">
                  {t("premiumPage.perMonth")}
                </span>
              </span>
              <button className="capitalize w-full border border-blue-600 text-blue-600 font-semibold rounded mt-6 py-2 text-sm">
                {t("premiumPage.getStarted")}
              </button>
              <ul className="flex flex-col gap-4 mt-6 text-sm">
                {t("premiumPage.freeFeatures", { returnObjects: true }).map((f, idx) => (
                  <li key={idx} className={subscriptionList}>
                    <img src={WebIcons.subscriptionIco} alt="subico" />
                    <p>{f}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="premium bg-[#3093FC] text-white p-6 rounded-md max-w-[417px] h-auto md:h-140">
            <h2 className="font-bold text-xl sm:text-2xl">{t("premiumPage.premium")}</h2>
            <p className="text-gray-200 font-light mt-3 text-sm">
              {t("premiumPage.premiumDesc")}
            </p>
            <span className="relative mt-4 text-4xl block font-bold">
              {isYearly ? t("premiumPage.yearlyPrice") : t("premiumPage.monthlyPrice")}
              <span className="absolute ml-2 text-sm text-white bottom-2">
                {isYearly ? t("premiumPage.perYear") : t("premiumPage.perMonth")}
              </span>
            </span>
            <button className="capitalize w-full mt-15 py-2 rounded-sm text-blue-700 text-sm font-semibold bg-white">
              {t("premiumPage.getStarted")}
            </button>
            <ul className="flex flex-col gap-4 mt-6 text-sm">
              {t("premiumPage.premiumFeatures", { returnObjects: true }).map((f, idx) => (
                <li key={idx} className={subscriptionList}>
                  <img src={WebIcons.subscriptionIco} alt="" />
                  <p>{f}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;


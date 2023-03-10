import React from "react";
import { useRouter } from "next/router";
//ICONS
import { CheckCircleIcon } from "@heroicons/react/solid";
//FILE IMPORTS
import Header from "../components/Header";

const SuccessPage = () => {
  const router = useRouter();

  const pushToOrders = () => {
    router.push({
      pathname: "/orders",
    });
  };

  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex item-center space-x-2 mb-5">
            <CheckCircleIcon className="h-10 text-green-500" />
            <h1 className="text-3xl">
              Thank You, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank You for shopping with us. We'll send a confirmation once your
            item has been shipped, if you would like to check the status of your
            order(s), please press the link below
          </p>
          <button className="button mt-8" onClick={pushToOrders}>
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default SuccessPage;

"use client";
import Image from "next/image";
import FormLogin from "./pageFormLogin";
import ImageLogin from "./image.png";
import Google from "../../../public/google.svg";
import Apple from "../../../public/apple.svg";

import TestFormLogin from "./testFormZodValidate";
import PageLanguage from "./pageLanguage";

export default function Login() {
  return (
    <>
      <div
        className="grid grid-cols-2 w-3/4 m-auto"
        style={{ height: "600px", marginTop: "60px" }}
      >
        <div className="relative">
          <Image
            className="absolute inset-0 rounded-tl-lg rounded-bl-lg"
            src={ImageLogin}
            alt=""
            width={580}
            style={{ height: "600px" }}
          />
          <div className="absolute inset-0 bg-sky-900 bg-opacity-50 p-2 bg-black">
            <div className="text-left text-white mt-40 mx-16 leading-9">
              Lorem ipsum dolor sit amet consectetur. Ultrices faucibus sed nisi
              eget mattis viverra sit at in. Duis tempus sit nunc ornare. Quis
              adipiscing ullamcorper egestas tortor sit. Quam viverra ac metus
              porttitor quam nunc turpis. Consectetur in cras a sed. Sit lorem
              gravida lacinia consequat tristique. Neque semper sagittis elit
              faucibus gravida praesent turpis quis mauris.
            </div>
          </div>
        </div>
        <div className="rounded-tr-lg rounded-br-lg bg-white">
          <div className="mx-14">
            <div className="mt-4 mb-4 text-end">
              <PageLanguage />
            </div>
            <p className="font-semibold text-xl mb-6">Welcome to Apolio</p>
            <FormLogin />
            {/* <TestFormLogin /> */}
            <div className="inline-flex items-center justify-center w-full mt-20">
              <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 italic font-medium text-gray-900 bg-white">
                or
              </span>
            </div>
            <div>
              <button
                type="button"
                className="w-full text-black border border-gray-200 hover:bg-gray-200 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              >
                <Image src={Google} alt="" className="mx-2 ml-24" />
                Sign in with your Google account
              </button>
              <button
                type="button"
                className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 border border-gray-200 hover:bg-gray-200"
              >
                <Image src={Apple} alt="" className="mx-2 ml-24" />
                Sign in with your Apple account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

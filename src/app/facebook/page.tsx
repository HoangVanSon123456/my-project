"use client";
import Image from "next/image";
import ImageLogin from "../login/image.png";
import PageLanguage from "../login/pageLanguage";
import FormLogin from "../login/pageFormLogin";
import Google from "../../../public/google.svg";
import Apple from "../../../public/apple.svg";

export default function PageFacebook() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 grid-rows-layout w-4/6 mx-72 mt-16">
          <div className="relative">
            <Image
              className="absolute inset-0 rounded-tl-lg rounded-bl-lg"
              src={ImageLogin}
              alt=""
            />
            <div className="absolute inset-0 bg-sky-900 bg-opacity-70 p-2 rounded-tl-lg rounded-bl-lg">
              <div className="text-left text-white my-32 mx-16 leading-10">
                Lorem ipsum dolor sit amet consectetur. Ultrices faucibus sed
                nisi eget mattis viverra sit at in. Duis tempus sit nunc ornare.
                Quis adipiscing ullamcorper egestas tortor sit. Quam viverra ac
                metus porttitor quam nunc turpis. Consectetur in cras a sed. Sit
                lorem gravida lacinia consequat tristique. Neque semper sagittis
                elit faucibus gravida praesent turpis quis mauris.
              </div>
            </div>
          </div>
          <div className="rounded-tr-lg rounded-br-lg bg-white">
            <div className="mx-10">
              <div className="mt-8 mb-10 text-end">
                <PageLanguage />
              </div>
              <p className="font-semibold text-xl mb-6">Welcome to Apodio</p>
              <FormLogin />
              <div className="mt-32">
                <div className="relative flex items-center mb-5">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="px-3 italic font-medium text-gray-900 bg-white right-56">
                    or
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <button
                  type="button"
                  className="w-full text-black border border-gray-200 hover:bg-gray-200 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                >
                  <Image src={Google} alt="" className="mx-2 ml-16" />
                  Sign in with your Google account
                </button>
                <button
                  type="button"
                  className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 border border-gray-200 hover:bg-gray-200"
                >
                  <Image src={Apple} alt="" className="mx-2 ml-16" />
                  Sign in with your Apple account
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end mr-80 mt-4">
          <span className="">
            Bạn chưa có tài khoản? <a className="text-blue-700">Đăng ký</a>
          </span>
        </div>
        <div className="text-end mt-14 -mr-16">
          <span className="text-colorFooter font-roboto">
            Copyright © 2021. Bản quyền website thuộc về Công ty Cổ phần Công
            Nghệ Apus
          </span>
        </div>
      </div>
    </>
  );
}

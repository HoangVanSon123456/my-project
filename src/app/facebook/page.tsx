"use client";
import Image from "next/image";
import ImageLogin from "../login/image.png";
import PageLanguage from "../login/pageLanguage";
import FormLogin from "../login/pageFormLogin";

export default function PageFacebook() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 grid-rows-layout w-3/5 mx-auto mt-4">
          <div className="relative">
            <Image
              className="absolute inset-0 rounded-tl-lg rounded-bl-lg"
              src={ImageLogin}
              alt=""
              height={600}
              width={460}
            />
            <div className="absolute inset-0 bg-sky-950 bg-opacity-70 rounded-tl-lg rounded-bl-lg">
              <div className="text-left text-white my-36 mx-11 leading-10">
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
              <div className="mt-8 mb-8 text-end">
                <PageLanguage />
              </div>
              <p className="font-semibold text-xl mb-4">Welcome to Apodio</p>
              <FormLogin />
            </div>
          </div>
        </div>
        <div className="text-end mr-[410px] mt-2 mb-8">
          <span className="">
            Bạn chưa có tài khoản? <a className="text-blue-700">Đăng ký</a>
          </span>
        </div>
        <div className="text-end mr-2">
          <span className="text-colorFooter font-roboto">
            Copyright © 2021. Bản quyền website thuộc về Công ty Cổ phần Công
            Nghệ Apus
          </span>
        </div>
      </div>
    </>
  );
}

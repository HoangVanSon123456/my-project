import Image from "next/image";
import Flag from "../../../public/flag.svg";
import ArrowDown from "../../../public/arrowDown.svg";
import Germany from "../../../public/germany.svg";
import Italy from "../../../public/italy.svg";
import { useState } from "react";
import classNames from "classnames";
import { relative } from "path";

export default function PageLanguage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        data-dropdown-toggle="dropdown-states"
        className="inline-flex items-center text-sm font-medium text-end"
        type="button"
        onClick={() => setShow(!show)}
      >
        <Image src={Flag} alt="" className="mx-2" />
        USA
        <Image src={ArrowDown} alt="" className="mx-2" />
      </button>
      <div
        className={classNames(
          " bg-slate-50 divide-y divide-gray-100 rounded-lg w-30 shadow-2xl px-2 dark:bg-gray-700 ml-[340px]",
          { show }
        )}
        style={{ display: show ? "block" : "none" }}
      >
        {/* <ul
          className=" text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="states-button"
        >
          <li>
            <button
              type="button"
              className="inline-flex w-full mx-2 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="inline-flex items-center">
                <Image src={Germany} alt="" className="mr-2" />
                Germany
              </div>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex w-full mx-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="inline-flex items-center">
                <Image src={Italy} alt="" className="mr-2" />
                Italy
              </div>
            </button>
          </li>
        </ul> */}
      </div>
    </>
  );
}

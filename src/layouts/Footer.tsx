import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer footer-center mx-5 mt-4 bg-base-300 text-base-content flex justify-center items-center">
      <aside>
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
}

import React from 'react';
import '../assets/header-footer.css';

export default function Footer() {
  return (
    <footer>
      <p className="footer ml-6 font-bold">
        {`© ${new Date().getFullYear()} All rights reserved.`}
      </p>
      <div className="mr-6 grid grid-cols-3 gap-x-2.5">
        <a
          href="https://github.com/deyemiobaa/top-stocks"
          className="block font-bold text-xl text-md underline"
        >
          code
        </a>
        <a
          href="https://site.financialmodelingprep.com/developer/docs"
          className="block font-bold text-xl underline"

        >
          data
        </a>
        <a
          href="https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)"
          className="block font-bold text-xl underline"
        >
          design
        </a>
      </div>
    </footer>
  );
}

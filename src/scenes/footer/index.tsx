import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          © 2023 Nuty Cosmetics. Terms and condition . Privacy Policy . Sitemap
          </p>
          <p className="my-5">
          Copyright © 2023 nuty.vn
          </p>
          <p className="my-5">
          HOANG NGUYEN TAM TRADING JOINT STOCK COMPANY
          </p>
          <p className="my-5">
          Business registration certificate No. 0313817382, issued on May 20, 2016, Ho Chi Minh City Planning and Investment Provider
          </p>
          <p className="my-5">
          Head office: 21 Truong Hoang Thanh, Ward 12, Tan Binh District, Ho Chi Minh City, Vietnam
          </p>
          <p className="my-5">
          Hotline: 1900636737
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold"> CUSTOMER SUPPORT</h4>
          <p className="my-5">Shopping guide</p>
          <p className="my-5">Privacy Policy</p>
          <p className="my-5">Product returns policy reforms</p>
          <p className="my-5">Payment methods</p>
          <p className="my-5">Shipping & delivery policy</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>02873 000 333</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

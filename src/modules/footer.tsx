import Typography from "@/components/ui/typography";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="p-4">
      <section className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-y-5 max-sm:grid-cols-1   w-full">
        <div className="flex flex-col gap-5">
          <Typography variant="h3">Company</Typography>
          <Typography variant="p" color="muted">
            About
          </Typography>
          <Typography variant="p" color="muted">
            Jobs
          </Typography>
          <Typography variant="p" color="muted">
            For the Record
          </Typography>
        </div>
        <div className="flex flex-col gap-5">
          <Typography variant="h3">Communities</Typography>
          <Typography variant="p" color="muted">
            For Artist
          </Typography>
          <Typography variant="p" color="muted">
            Developers
          </Typography>
          <Typography variant="p" color="muted">
            Advertising
          </Typography>
          <Typography variant="p" color="muted">
            Investors
          </Typography>
          <Typography variant="p" color="muted">
            Vendors
          </Typography>
        </div>
        <div className="flex flex-col gap-5">
          <Typography variant="h3">Useful links</Typography>
          <Typography variant="p" color="muted">
            Support
          </Typography>
          <Typography variant="p" color="muted">
            Free Mobile App
          </Typography>
        </div>
        <div className="flex gap-5">
          <FaInstagram className="text-lg shrink-0 text-typography-200 grow-0 max-sm:text-base h-10 w-10 rounded-full p-2 bg-secondary-100/50" />
          <FaTwitter className="text-lg shrink-0 text-typography-200 grow-0 max-sm:text-base h-10 w-10 rounded-full p-2 bg-secondary-100/50" />
          <FaFacebook className="text-lg shrink-0 text-typography-200 grow-0 max-sm:text-base h-10 w-10 rounded-full p-2 bg-secondary-100/50" />
        </div>
      </section>
      <div className="h-[0.5px] bg-accent-100 w-full my-10"></div>
      <section className="flex justify-between max-sm:flex-col mb-20">
        <div className="flex flex-wrap gap-4 max-sm:mb-10">
          <Typography variant="p" color="muted">
            Legal
          </Typography>
          <Typography variant="p" color="muted">
            Safety & Privacy Center
          </Typography>
          <Typography variant="p" color="muted">
            Privacy Policy
          </Typography>
          <Typography variant="p" color="muted">
            Cookies
          </Typography>
          <Typography variant="p" color="muted">
            About Ads
          </Typography>
          <Typography variant="p" color="muted">
            Accessibility
          </Typography>
        </div>
        <Typography variant="p" color="muted">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://nathanaelbudijono.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className="text-primary-100"
          >
            Nathanael Budijono
          </a>
        </Typography>
      </section>
    </main>
  );
};

export default Footer;

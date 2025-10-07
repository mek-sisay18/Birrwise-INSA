
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <footer
      id="contacts"
      className="bg-primary text-white py-12 text-center"
    >
      <div className="flex justify-center mb-4">
        <CheckCircleIcon className="w-8 h-8 text-accent" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Contact </h3>
      <p className="mb-4">richelalem12@gmail.com</p>
      <p>&copy; {new Date().getFullYear()} Brii-Wise. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
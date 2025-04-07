import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="font-bold text-2xl tracking-tighter flex items-center gap-1 hover:text-gray-300">
        ZapStore
      </h1>
    </Link>
  );
}

export default Logo;

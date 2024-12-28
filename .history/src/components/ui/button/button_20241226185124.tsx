import Link from "next/link";

interface IButton {
  link?: boolean;
}

export default function Button() {
  return (
    {link ? <Link> : <button>
      </button>
      { children }
      </Link>
    }
  )
};

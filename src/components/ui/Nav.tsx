import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LinkPreview } from "./LinkPreview";
import Link from "next/link";

type NavItem = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

type NavProps = {
  navItems: NavItem[];
};

export default function Nav({ navItems }: NavProps) {
  const pathname = usePathname();

  return (
    <nav className="">
      <ul className="flex items-cente gap-2 rounded-full">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            {item.icon ? (
              <LinkPreview
                url={item.href}
                className="text-sm text-copy-light flex items-center"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                  className="p-1.5 cursor-pointer font-medium text-sm rounded-full gap-2 hover:bg-foreground hover:text-copy flex justify-center items-center "
                >
                  {item.icon}
                </motion.span>
              </LinkPreview>
            ) : (
              <Link
                className="text-sm text-copy-light flex items-center"
                href={item.href}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
                  className={`${
                    pathname === item.href
                      ? " text-primary-copy bg-primary font-bold shadow-md hover:text-primary-copy transition-all delay-75"
                      : ""
                  } px-3 py-1 transition-colors hover:text-primary rounded-full`}
                >
                  {item.name}
                </motion.span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

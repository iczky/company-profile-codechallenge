import { usePathname } from "next/navigation";
import cn from "classnames";

const NavbarMobile = () => {
  const pathName = usePathname();
  return (
    <section className="h-screen bg-background-primary flex flex-col gap-2">
      <NavItem path="/" currentPath={pathName}>
        Home
      </NavItem>
      <NavItem path="/about-us" currentPath={pathName}>
        About Us
      </NavItem>
      <NavItem path="/our-work" currentPath={pathName}>
        Our Work & Impact
      </NavItem>
      <NavItem path="/" currentPath={pathName}>
        Contact Us
      </NavItem>
      <NavItem path="/" currentPath={pathName}>
        Career
      </NavItem>
    </section>
  );
};

interface navItemProps {
  path: string;
  currentPath: string;
  children: JSX.Element | string;
}

const NavItem: React.FC<navItemProps> = ({ path, currentPath, children }) => {
  const classnames = cn("text-lg font-light", {
    underline: path === currentPath,
  });
  return <p className={classnames}>{children}</p>;
};

export default NavbarMobile;

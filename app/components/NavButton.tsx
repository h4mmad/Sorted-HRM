import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";

export default function NavButton({
  title,
  to,
}: {
  title: string;
  to: string;
}) {
  const currentPath = usePathname();
  const conditionalClassName = classNames([
    "w-full p-3 cursor-pointer",
    {
      "bg-myLightBlue dark:bg-gray-700": to == currentPath,
      "hover:bg-myLightBlue dark:hover:bg-gray-700": to != currentPath,
    },
  ]);
  return (
    <Link href={to}>
      <div className={conditionalClassName}>
        <h2 className="text-white font-bold">{title}</h2>
      </div>
    </Link>
  );
}

import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export const SNSShareButton: FC<Props> = ({
  href,
  label,
  children,
  className,
}) => {
  return (
    <a
      className={clsx(
        "flex items-center justify-center rounded border py-2 px-4 font-bold text-body",
        className
      )}
      href={href}
      target={"_blank"}
      rel={"nofollow noreferrer"}
    >
      {children}
      <span className={"ml-2 block text-xs"}>{label}</span>
    </a>
  );
};

import { SNSShareButton } from "@/components/ui/SNSShareButton";
import Image from "next/image";
import type { FC } from "react";

type Props = {
  title: string;
  url: string;
};

export const TwitterShareButton: FC<Props> = ({ title, url }) => {
  return (
    <SNSShareButton
      href={`https://twitter.com/intent/tweet?text=${title}%0a ${encodeURIComponent(
        url
      )}`}
      label={"Share With Twitter"}
      className={"text-[#1b95f0]"}
    >
      <Image
        className={"h-6 w-6"}
        src={
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiMxREExRjIiIGQ9Ik0zMiA3LjA3NWMtMS4xNzUgMC41MjUtMi40NDQgMC44NzUtMy43NjkgMS4wMzEgMS4zNTYtMC44MTMgMi4zOTQtMi4xIDIuODg3LTMuNjMxLTEuMjY5IDAuNzUtMi42NzUgMS4zLTQuMTY5IDEuNTk0LTEuMi0xLjI3NS0yLjkwNi0yLjA2OS00Ljc5NC0yLjA2OS0zLjYyNSAwLTYuNTYzIDIuOTM4LTYuNTYzIDYuNTYzIDAgMC41MTIgMC4wNTYgMS4wMTIgMC4xNjkgMS40OTQtNS40NTYtMC4yNzUtMTAuMjk0LTIuODg4LTEzLjUzMS02Ljg2Mi0wLjU2MyAwLjk2OS0wLjg4NyAyLjEtMC44ODcgMy4zIDAgMi4yNzUgMS4xNTYgNC4yODcgMi45MTkgNS40NjMtMS4wNzUtMC4wMzEtMi4wODctMC4zMzEtMi45NzUtMC44MTkgMCAwLjAyNSAwIDAuMDU2IDAgMC4wODEgMCAzLjE4MSAyLjI2MyA1LjgzOCA1LjI2OSA2LjQzNy0wLjU1IDAuMTUtMS4xMzEgMC4yMzEtMS43MzEgMC4yMzEtMC40MjUgMC0wLjgzMS0wLjA0NC0xLjIzNy0wLjExOSAwLjgzOCAyLjYwNiAzLjI2MyA0LjUwNiA2LjEzMSA0LjU2My0yLjI1IDEuNzYyLTUuMDc1IDIuODEzLTguMTU2IDIuODEzLTAuNTMxIDAtMS4wNTAtMC4wMzEtMS41NjktMC4wOTQgMi45MTMgMS44NjkgNi4zNjIgMi45NSAxMC4wNjkgMi45NSAxMi4wNzUgMCAxOC42ODEtMTAuMDA2IDE4LjY4MS0xOC42ODEgMC0wLjI4Ny0wLjAwNi0wLjU2OS0wLjAxOS0wLjg1IDEuMjgxLTAuOTE5IDIuMzk0LTIuMDc1IDMuMjc1LTMuMzk0eiI+PC9wYXRoPjwvc3ZnPg=="
        }
        alt={"Twitter"}
        width={24}
        height={24}
      />
    </SNSShareButton>
  );
};

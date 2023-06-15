import React from "react";
import Link from "next/link";

type Props = {
  dark?: boolean;
};

export default function icon({ dark }: Props) {
  return (
    <Link href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={
          dark
            ? " fill-slate-700 stroke-slate-700 inline-block mb-1 mr-2"
            : "fill-slate-50 stroke-slate-50 inline-block mb-1 mr-2"
        }
        viewBox="0 0 256 256"
        width={28}
        height={28}
      >
        <path
          d="M128,28A100,100,0,1,0,228,128,100.113,100.113,0,0,0,128,28Zm0,192a91.99824,91.99824,0,0,1-8.04395-183.64429C108.1626,54.686,108,71.22217,108,72a20,20,0,0,0,40,0,4,4,0,0,0-8,0,12,12,0,0,1-24,.01074c.001-.18237.26416-17.936,13.93994-35.98608A91.99788,91.99788,0,0,1,128,220ZM92,136a8,8,0,1,1,8-8A7.99993,7.99993,0,0,1,92,136Zm80-8a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,172,128Zm-14.13037,37.78906a3.99949,3.99949,0,0,1-1.11719,5.54492,52.031,52.031,0,0,1-57.50342.001,3.99991,3.99991,0,0,1,4.42871-6.66211,44.03293,44.03293,0,0,0,48.64649-.001A3.99765,3.99765,0,0,1,157.86963,165.78906Z"
          className={dark ? " fill-slate-700" : " fill-slate-50"}
        />
      </svg>
      <span
        className={
          dark
            ? "mt-2 font-light text-lg text-slate-700"
            : "mt-2 font-light text-lg"
        }
      >
        Sit
      </span>
      <span className=" text-blue-500 font-bold text-lg">ter</span>
    </Link>
  );
}

import { useEffect, useState } from "react";
import { useContext } from "react";
import DiscogsContext from "../data/DiscogsData";
import axios from "axios";
import { Link, Router } from "react-router-dom";

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  headers: {
    Authorization: "Discogs token=BNTbCmOagQriqBkNjkQFSnvZgxLvFyIjlRCDANoK",
  },
});

const Album = (props: any) => {
  const { albumId, setAlbumId } = useContext(DiscogsContext);

  return (
    <Link
      onClick={() => {
        setAlbumId(props.id);
        console.log(albumId);
      }}
      to={`/albums/${props.albumName}`}
    >
      <article className="overflow-hidden rounded-lg shadow-lg">
        <img
          alt="Placeholder"
          className="block h-auto w-full object-cover"
          src={props.albumImage}
        />

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-xl">
            <div className="no-underline hover:underline text-black">
              {props.albumName}
            </div>
          </h1>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="ml-2 text-sm" id="year">
            Year: {props.albumYear}
          </p>

          <span className="hidden">Like</span>
          <i className="fa fa-heart"></i>
        </footer>
      </article>
    </Link>
  );
};

export default Album;

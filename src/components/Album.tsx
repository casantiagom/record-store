import { useEffect } from "react";
import { useContext } from "react";
import DiscogsContext from "../data/DiscogsData";
import axios from "axios";

let album = "";

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  headers: {
    Authorization: "Discogs token=BNTbCmOagQriqBkNjkQFSnvZgxLvFyIjlRCDANoK",
  },
});

const Album = (props: any) => {
  useEffect(() => {
    if (props.masterId != undefined) {
      discogs
        .get(`/masters/${props.masterId}`)

        .then((res) => {
          album = res.data;
          const art = document.getElementById("imageArt") as HTMLImageElement;
          art.src = res.data.images[0].resource_url;
        })
        .catch((e) => {
          console.log("error img ARtist call");
        });
    }
  }, []);

  return (
    <article className="overflow-hidden rounded-lg shadow-lg">
      <a href="#">
        <img
          alt="Placeholder"
          className="block h-auto w-full object-cover"
          src={props.albumImage}
        />
      </a>

      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-xl">
          <a className="no-underline hover:underline text-black" href="#">
            {props.albumName}
          </a>
        </h1>
        <p className="text-grey-darker text-lg ">${props.albumPrice}</p>
      </header>

      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a
          className="flex items-center no-underline hover:underline text-black"
          href={props.resource_url}
        >
          <img
            alt="Placeholder"
            className="block rounded-full"
            src=""
            id="imageArt"
            width={50}
            height={50}
          />
          <p className="ml-2 text-sm">{props.artistName}</p>
        </a>
        <a
          className="no-underline text-grey-darker hover:text-red-dark"
          href="#"
        >
          <span className="hidden">Like</span>
          <i className="fa fa-heart"></i>
        </a>
      </footer>
    </article>
  );
};

export default Album;

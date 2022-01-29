import Album from "./Album";
import { useContext, useEffect, useState } from "react";
import DiscogsContext from "../data/DiscogsData";

const AlbumDetail = (props: any) => {
  const { albums, setAlbums } = useContext(DiscogsContext);

  let flag = false;

  useEffect(() => {
    flag = true;

    console.log(albums);
  }, []);

  return (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="">
          <img
            alt="Placeholder"
            className="block h-48 w-48 object-cover object-contain"
            src={undefined}
          />
        </div>
        ALBUMDETAIL
      </div>
    </div>
  );
};

export default AlbumDetail;

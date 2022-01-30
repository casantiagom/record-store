import Album from "./Album";
import { useContext, useEffect, useState } from "react";
import DiscogsContext from "../data/DiscogsData";
import { discogs } from "../data/DiscogsData";

const AlbumDetail = (props: any) => {
  const { albumDetail, setAlbumDetail, albumId } = useContext(DiscogsContext);

  let flag = false;

  useEffect(() => {
    discogs
      .get(`/masters/${albumId}`)

      .then((res) => {
        setAlbumDetail(res.data);
        console.log(albumDetail);
        flag = true;
      })

      .catch((e) => {
        console.log("error albumId call");
      });
  }, [albumId]);

  return flag ? (
    <div>Loading</div>
  ) : (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="">
          <img
            alt="Placeholder"
            className="block h-80 w-80 object-cover object-contain"
            src={albumDetail.images[0].resource_url}
          />
        </div>
        ALBUMDETAIL
      </div>
    </div>
  );
};

export default AlbumDetail;

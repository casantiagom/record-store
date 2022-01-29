import axios from "axios";
import React, { useState, useEffect, createContext, FC } from "react";

const DiscogsContext = createContext({
  albums: [] as any[],
  setAlbums: (state: []) => {},
  keyword: [] as string[],
  setKeyword: (state: string[]) => {},
  albumDetail: [] as any[],
  setAlbumDetail: (state: []) => {},
  albumId: [] as string[],
  setAlbumId: (state: string[]) => {},
});

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  headers: {
    Authorization: "Discogs token=BNTbCmOagQriqBkNjkQFSnvZgxLvFyIjlRCDANoK",
  },
});

export const DiscogsProvider: FC = ({ children }) => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [keyword, setKeyword] = useState(["radiohead"]);
  const [albumDetail, setAlbumDetail] = useState<any[]>([]);
  const [albumId, setAlbumId] = useState([""]);

  useEffect(() => {
    discogs
      .get(`/database/search?artist=${keyword[0]}&type=masters`)

      .then((res) => {
        setAlbums(res.data.results);
      })

      .catch((e) => {
        console.log("error API call");
      });
  }, [keyword]);

  return (
    <DiscogsContext.Provider
      value={{
        albums,
        setAlbums,
        keyword,
        setKeyword,
        albumDetail,
        setAlbumDetail,
        albumId,
        setAlbumId,
      }}
    >
      {children}
    </DiscogsContext.Provider>
  );
};

export default DiscogsContext;

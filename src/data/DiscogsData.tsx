import axios from "axios";
import React, { useState, useEffect, createContext, FC } from "react";

const DiscogsContext = createContext({
  albums: [] as any[],
  setAlbums: (state: []) => {},
  keyword: [] as string[],
  setKeyword: (state: string[]) => {},
  artistId: [] as any,
  setArtistId: (state: any) => {},
  artistImg: [] as string[],
  setArtistImg: (state: string[]) => {},
});

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  headers: {
    Authorization: "Discogs token=BNTbCmOagQriqBkNjkQFSnvZgxLvFyIjlRCDANoK",
  },
});

export const DiscogsProvider: FC = ({ children }) => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [keyword, setKeyword] = useState([""]);
  const [artistId, setArtistId] = useState([""]);
  const [artistImg, setArtistImg] = useState([""]);

  useEffect(() => {
    discogs
      .get(`/database/search?artist=radiohead&type=masters`)

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
        artistId,
        setArtistId,
        artistImg,
        setArtistImg,
      }}
    >
      {children}
    </DiscogsContext.Provider>
  );
};

export default DiscogsContext;

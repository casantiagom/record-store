import Album from "./Album";
import { useContext, useEffect, useState } from "react";
import DiscogsContext from "../data/DiscogsData";

const Body = () => {
  const { albums, setAlbums } = useContext(DiscogsContext);
  const [localAlbums, setLocalAlbums] = useState<any[]>([]);
  let flag = false;

  useEffect(() => {
    flag = true;

    console.log(albums);
  }, []);

  return (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {flag ? (
            <div>Loading</div>
          ) : (
            albums.map((e) => (
              <div className="my-1 px-1 w-full md:w-1/2 md:h-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:h-1/3">
                <Album
                  key={e.id}
                  albumImage={e.cover_image}
                  albumName={e.title}
                  albumPrice={e.year}
                  masterId={e.masterId}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;

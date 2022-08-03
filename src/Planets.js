import React from "react";
import { useQuery } from "@tanstack/react-query";

const Planets = ({ page = 1 }) => {
  let { data, status, refetch } = useQuery(["planets"], async () => {
    const res = await fetch(`http://swapi.dev/api/planets?page=${page}`);
    return res.json();
  });

  const refetchData = () => {
    refetch();
  };

  return (
    <>
      <div>{`Page Number ${page} - If you observe it closely changing a page will not make any new network api call instead it takes data from cache based on cacheKey Planets we provided during making an api call, if you want to get latest data you need to call refetch method, that's the beauty of react-query`}</div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data?.results?.map((planet, index) => {
            return (
              <div key={planet.name}>
                <div>{planet.name}</div>
              </div>
            );
          })}
        </div>
      )}
      <button onClick={refetchData}>Refetch</button>
    </>
  );
};

export default Planets;

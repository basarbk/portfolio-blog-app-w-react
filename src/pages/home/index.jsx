import { useState } from "react";
import { Feed } from "../../components";
import { Filter } from "./components/Filter";

export function Home() {
  const [filter, setFilter] = useState();
  return (
    <>
      <Filter setFilter={setFilter} />
      <Feed filter={filter} />
    </>
  );
}

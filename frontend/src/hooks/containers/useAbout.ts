import { useState, useEffect } from "react";
import { About } from "../../@types/About";
import { client } from "../../services/client";

export function useAbout() {
  const [abouts, setAbouts] = useState<About[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data: About[]) => {
      setAbouts(data);
    });
  }, []);

  const setUseAbout = {
    abouts,
    setAbouts,
  };
  return { setUseAbout };
}

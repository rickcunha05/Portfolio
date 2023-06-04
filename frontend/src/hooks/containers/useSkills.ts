import { useState, useEffect } from "react";
import { Experiences } from "../../@types/Experiences";
import { Skills } from "../../@types/Skills";
import { client } from "../../services/client";

export function useSkills() {
  const [experiences, setExperience] = useState<Experiences[]>([]);
  const [skills, setSkills] = useState<Skills[]>([]);

  useEffect(() => {
    const query = '*[_type == "experiences"] | order(year asc)';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data: Experiences[]) => {
      data.sort((a, b) => a.year.localeCompare(b.year));
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data: Skills[]) => {
      setSkills(data);
    });
  }, []);
  const setUseSkills = {
    skills,
    setSkills,
    experiences,
    setExperience,
  };
  return { setUseSkills };
}

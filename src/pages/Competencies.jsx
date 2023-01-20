import React from "react";
import CompetencyCard from "../components/molecules/CompetencyCard";

import { competenciesConstants } from "../utils/competenciesConstants";

const Competencies = () => {
  return (
    <div className="page">
      <h2>Competencies</h2>
      <h4 className="slim">The Competencies Required</h4>
      <div className="activities-container">
        {competenciesConstants &&
          competenciesConstants.map((competency, i) => (
            <CompetencyCard
              link={`/competency/${i}`}
              name={competency.name}
              description={competency.description}
              area={competency.area}
            ></CompetencyCard>
          ))}
      </div>
    </div>
  );
};

export default Competencies;

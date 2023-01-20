export const opportunity = {
  type: "alpha",
  name: "Opportunity",
  states: [
    {
      name: "Identified",
      conditions: [
        "Idea behind opportunity identified",
        "At least one investing stakeholder interested",
        "Other stakeholders identified",
      ],
    },
    {
      name: "Solution Needed",
      conditions: [
        "Solution identified",
        "Stakeholders' needs established",
        "Problems and root causes identified",
        "Need for a solution confirmed",
        "At least one solution proposed",
      ],
    },
    {
      name: "Value Established",
      conditions: [
        "Opportunity value quantified",
        "Solution impact understood",
        "System value understood",
        "Success criteria clear",
        "Outcomes clear and quantified",
      ],
    },
    {
      name: "Viable",
      conditions: [
        "Solution outlined",
        "Solution possible within constraints",
        "Risks acceptable & manageable",
        "Solution profitable",
        "Reasons to develop solution understood",
        "Pursuit viable",
      ],
    },
    {
      name: "Addressed",
      conditions: [
        "Opportunity addressed",
        "Solution worth deploying",
        "Stakeholders satisfied",
      ],
    },
    {
      name: "Benefit Accrued",
      conditions: ["Solution accrues benefits", "ROI acceptable"],
    },
  ],
};

export const stakeholders = {
  type: "alpha",
  name: "Stakeholders",
  states: [
    {
      name: "Recognized",
      conditions: [
        "Stakeholder groups identified",
        "Key stakeholder groups represented",
        "Responsibilities defined",
      ],
    },
    {
      name: "Represented",
      conditions: [
        "Responsibilities agreed",
        "Representatives authorized",
        "Collaboration approach agreed",
        "Way of working supported & respected",
      ],
    },
    {
      name: "Involved",
      conditions: [
        "Representatives assist the team",
        "Timely feedback and decisions provided",
        "Changes promptly communicated",
      ],
    },
    {
      name: "In Agreement",
      conditions: [
        "Minimal expectations agreed",
        "Rep's happy with their involvement",
        "Rep's input valued",
        "Team's input valued",
        "Priorities clear & perspectives balanced",
      ],
    },
    {
      name: "Satisfied for Deployment",
      conditions: [
        "Stakeholder feedback provided",
        "System ready for deployment",
      ],
    },
    {
      name: "Satisfied in Use",
      conditions: [
        "Feedback on system use available",
        "System meets expectations",
      ],
    },
  ],
};

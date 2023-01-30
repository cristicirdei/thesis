export const opportunity = {
  type: "alpha",
  name: "Opportunity",
  states: [
    {
      name: "Identified",
      conditions: [
        { text: "Idea behind opportunity identified", id: "o_1_1" },
        { text: "At least one investing stakeholder interested", id: "o_1_2" },
        { text: "Other stakeholders identified", id: "o_1_3" },
      ],
    },
    {
      name: "Solution Needed",
      conditions: [
        { text: "Solution identified", id: "o_2_1" },
        { text: "Stakeholders' needs established", id: "o_2_2" },
        { text: "Problems and root causes identified", id: "o_2_3" },
        { text: "Need for a solution confirmed", id: "o_2_4" },
        { text: "At least one solution proposed", id: "o_2_5" },
      ],
    },
    {
      name: "Value Established",
      conditions: [
        { text: "Opportunity value quantified", id: "o_3_1" },
        { text: "Solution impact understood", id: "o_3_2" },
        { text: "System value understood", id: "o_3_3" },
        { text: "Success criteria clear", id: "o_3_4" },
        { text: "Outcomes clear and quantified", id: "o_3_5" },
      ],
    },
    {
      name: "Viable",
      conditions: [
        { text: "Solution outlined", id: "o_4_1" },
        { text: "Solution possible within constraints", id: "o_4_2" },
        { text: "Risks acceptable & manageable", id: "o_4_3" },
        { text: "Solution profitable", id: "o_4_4" },
        { text: "Reasons to develop solution understood", id: "o_4_5" },
        { text: "Pursuit viable", id: "o_4_6" },
      ],
    },
    {
      name: "Addressed",
      conditions: [
        { text: "Opportunity addressed", id: "o_5_1" },
        { text: "Solution worth deploying", id: "o_5_2" },
        { text: "Stakeholders satisfied", id: "o_5_3" },
      ],
    },
    {
      name: "Benefit Accrued",
      conditions: [
        { text: "Solution accrues benefits", id: "o_6_1" },
        { text: "ROI acceptable", id: "o_6_2" },
      ],
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
        { text: "Stakeholder groups identified", id: "s_1_1" },
        { text: "Key stakeholder groups represented", id: "s_1_2" },
        { text: "Responsibilities defined", id: "s_1_3" },
      ],
    },
    {
      name: "Represented",
      conditions: [
        { text: "Responsibilities agreed", id: "s_2_1" },
        { text: "Representatives authorized", id: "s_2_2" },
        { text: "Collaboration approach agreed", id: "s_2_3" },
        { text: "Way of working supported & respected", id: "s_2_4" },
      ],
    },
    {
      name: "Involved",
      conditions: [
        { text: "Representatives assist the team", id: "s_3_1" },
        { text: "Timely feedback and decisions provided", id: "s_3_2" },
        { text: "Changes promptly communicated", id: "s_3_3" },
      ],
    },
    {
      name: "In Agreement",
      conditions: [
        { text: "Minimal expectations agreed", id: "s_4_1" },
        { text: "Rep's happy with their involvement", id: "s_4_2" },
        { text: "Rep's input valued", id: "s_4_3" },
        { text: "Team's input valued", id: "s_4_4" },
        { text: "Priorities clear & perspectives balanced", id: "s_4_5" },
      ],
    },
    {
      name: "Satisfied for Deployment",
      conditions: [
        { text: "Stakeholder feedback provided", id: "s_5_1" },
        { text: "System ready for deployment", id: "s_5_2" },
      ],
    },
    {
      name: "Satisfied in Use",
      conditions: [
        { text: "Feedback on system use available", id: "s_6_1" },
        { text: "System meets expectations", id: "s_6_2" },
      ],
    },
  ],
};

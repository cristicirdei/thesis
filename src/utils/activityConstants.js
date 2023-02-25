export const activitiesConstants = [
  {
    id: 0,
    name: "Evolve the Product Vision",
    description:
      "Agree and communicate the goals and return-on-investment case for the product to drive and inform ongoing decisions about the product.",
    space: "Explore Possibilities",
    details: {
      entry: [],
      competencies: [
        { name: "Stakeholder Representation", level: 3, area: "green" },
        { name: "Analysis", level: 3, area: "yellow" },
        { name: "Development", level: 3, area: "yellow" },
      ],
      exit: [
        { name: "Opportunity", state: "Value Established", type: "alpha" },
        {
          name: "Product Vision",
          state: "Value Release Strategy Outlined",
          type: "product",
        },
      ],
    },
  },
  {
    id: 1,
    name: "Build Stakeholder Network",
    description:
      "Actively engage all stakeholders with a legitimate and material interest in the endeavor, including eliciting feedback and negotiating compromises as required.",
    space: "Understand Stakeholder Needs",
    details: {
      entry: [],
      competencies: [
        { name: "Stakeholder Representation", level: 3, area: "green" },
        { name: "Analysis", level: 3, area: "yellow" },
      ],
      exit: [
        { name: "Stakeholders", state: "Involved", type: "alpha" },
        {
          name: "Stakeholder Network",
          state: "Representatives Named or beyond",
          type: "product",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Demonstrate the Product",
    description:
      "Show the evolving product to stakeholders and elicit feedback as frequently as possible to converge on an optimal solution.",
    space: "Understand Stakeholder Needs",
    details: {
      entry: [
        { name: "Stakeholders", state: "Involved", type: "alpha" },
        { name: "Opportunity", state: "Value Established", type: "alpha" },
      ],
      competencies: [
        { name: "Stakeholder Representation", level: 3, area: "green" },
        { name: "Testing", level: 3, area: "yellow" },
      ],
      exit: [
        { name: "Stakeholders", state: "In Agreement", type: "alpha" },
        { name: "Opportunity", state: "Viable", type: "alpha" },
      ],
    },
  },
  {
    id: 3,
    name: "Achieve Acceptance",
    description:
      "The product is accepted for release. Progressively accepting the product enables frequent releases to be made to maximize return-on-investment.",
    space: "Ensure Stakeholder Satisfaction",
    details: {
      entry: [
        { name: "Stakeholders", state: "In Agreement", type: "alpha" },
        { name: "Opportunity", state: "Viable", type: "alpha" },
      ],
      competencies: [
        { name: "Stakeholder Representation", level: 3, area: "green" },
        { name: "Testing", level: 3, area: "yellow" },
      ],
      exit: [
        {
          name: "Stakeholders",
          state: "Satisfied for Deployment",
          type: "alpha",
        },
        { name: "Opportunity", state: "Addressed", type: "alpha" },
      ],
    },
  },
];

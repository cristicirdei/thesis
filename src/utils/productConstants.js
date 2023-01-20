export const stakeholderNetwork = {
  type: "product",
  name: "Stakeholder Network",
  states: [
    {
      name: "Stakeholder Types Described",
      conditions: [
        "The stakeholder types that have needs to be met are identified, including customers/users that seek value and those that need to be satisfied before value can be released (e.g. security/compliance)",
        "Other stakeholders that are impacted by the solution or work to produce a solution are identified",
        "Stakeholders that can contribute to understanding the opportunity or producing a solution are identified",
      ],
    },
    {
      name: "Representatives Named",
      conditions: [
        "All key stakeholder types have a named point-of-contact that is empowered to represent them",
        "The representatives must be capable of providing timely and authoritative decisions on behalf of their stakeholder types",
        "The named point-of-contact is aware of their responsibilities and is committed to fulfilling them",
      ],
    },
    {
      name: "Communication Plans Outlined",
      conditions: [
        "For each stakeholder type it is clear how they will be represented, engaged or communicated with",
        "The communication plans allow for timely feedback and decision-making",
        "The communication plans are acceptable to the team and the stakeholder representatives",
      ],
    },
  ],
};

export const productVision = {
  type: "product",
  name: "Product Vision",
  states: [
    {
      name: "Need Identified",
      conditions: [
        "A business or market need or gap has been identified",
        "The impact of the need is analyzed, for example how many people are impacted and how big is the impact on them ",
        "The competitive or commercial advantage to be gained by addressing the need is described",
      ],
    },
    {
      name: "Solution Envisaged",
      conditions: [
        "At least one solution option is described that would address the opportunity effectively",
        "The solution option or options presented are analyzed sufficient to be judged achievable",
        "The pros and cons of any solution options are objectively described",
      ],
    },
    {
      name: "Value Release Strategy Outlined",
      conditions: [
        "There is a release strategy in place, outlining what value releases might be made and in what order, and roughly when they are needed and might be achievable",
        "The release strategy is framed to optimize total value, by prioritizing lower-cost, higher-value release scope over higher-cost, lower-value scope",
      ],
    },
    {
      name: "ROI Projected",
      conditions: [
        "The return-on-investment profile for the solution has been quantified",
        "Each major release scope option (feature/functionality/requirement) has been ROI evaluated and prioritized/sequenced to maximize the overall ROI ",
      ],
    },
  ],
};

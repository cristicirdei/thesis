export const stakeholderNetwork = {
  type: "product",
  name: "Stakeholder Network",
  states: [
    {
      name: "Stakeholder Types Described",
      conditions: [
        {
          text: "The stakeholder types that have needs to be met are identified, including customers/users that seek value and those that",
          id: "n_1_1",
        },
        {
          text: "need to be satisfied before value can be released (e.g. security/compliance)",
          id: "n_1_2",
        },
        {
          text: "Other stakeholders that are impacted by the solution or work to produce a solution are identified",
          id: "n_1_3",
        },
        {
          text: "Stakeholders that can contribute to understanding the opportunity or producing a solution are identified",
          id: "n_1_4",
        },
      ],
    },
    {
      name: "Representatives Named",
      conditions: [
        {
          text: "All key stakeholder types have a named point-of-contact that is empowered to represent them",
          id: "n_2_1",
        },
        {
          text: "The representatives must be capable of providing timely and authoritative decisions on behalf of their stakeholder types",
          id: "n_2_2",
        },
        {
          text: "The named point-of-contact is aware of their responsibilities and is committed to fulfilling them",
          id: "n_2_3",
        },
      ],
    },
    {
      name: "Communication Plans Outlined",
      conditions: [
        {
          text: "For each stakeholder type it is clear how they will be represented, engaged or communicated with",
          id: "n_3_1",
        },
        {
          text: "The communication plans allow for timely feedback and decision-making",
          id: "n_3_2",
        },
        {
          text: "The communication plans are acceptable to the team and the stakeholder representatives",
          id: "n_3_3",
        },
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
        {
          text: "A business or market need or gap has been identified",
          id: "v_1_1",
        },
        {
          text: "The impact of the need is analyzed, for example how many people are impacted and how big is the impact on them",
          id: "v_1_2",
        },
        {
          text: "The competitive or commercial advantage to be gained by addressing the need is described",
          id: "v_1_3",
        },
      ],
    },
    {
      name: "Solution Envisaged",
      conditions: [
        {
          text: "At least one solution option is described that would address the opportunity effectively",
          id: "v_2_1",
        },
        {
          text: "The solution option or options presented are analyzed sufficient to be judged achievable",
          id: "v_2_2",
        },
        {
          text: "The pros and cons of any solution options are objectively described",
          id: "v_2_3",
        },
      ],
    },
    {
      name: "Value Release Strategy Outlined",
      conditions: [
        {
          text: "There is a release strategy in place, outlining what value releases might be made and in what order, and roughly when they are needed and might be achievable",
          id: "v_3_1",
        },
        {
          text: "The release strategy is framed to optimize total value, by prioritizing lower-cost, higher-value release scope over higher-cost, lower-value scope",
          id: "v_3_2",
        },
      ],
    },
    {
      name: "ROI Projected",
      conditions: [
        {
          text: "The return-on-investment profile for the solution has been quantified",
          id: "v_4_1",
        },
        {
          text: "Each major release scope option (feature/functionality/requirement) has been ROI evaluated and prioritized/sequenced to maximize the overall ROI ",
          id: "v_4_2",
        },
      ],
    },
  ],
};

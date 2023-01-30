export const competenciesConstants = [
  {
    name: "Stakeholder Representation",
    description:
      "The ability to gather, communicate and balance the needs of other stakeholders, and accurately represent their views.",
    area: "customer",
    explanation: {
      intro: "People with this competency help the team to:",
      list: [
        "Understand the business opportunity",
        "Understand the complexity and needs of the customers, users and other stakeholders",
        "Negotiate and prioritize the requirements",
        "Interact with the stakeholders and developers about the solution to be developed",
        "Understand how well the system produced addresses the stakeholders' needs",
      ],
      outro:
        "This competency can be provided by an on-site customer, a product manager or a group of people from the commissioning business organization.",
    },
    skills: [
      "Negotiation",
      "Facilitation",
      "Networking",
      "Good written and verbal communication skills",
      "Empathy",
    ],
    levels: [
      {
        name: "Assists",
        conditions: [
          {
            text: "Understands and conducts his or her self in a professional manner. ",
            id: "sr_1_1",
          },
          {
            text: "Is able to correctly respond to basic questions within his or her domain. ",
            id: "sr_1_2",
          },
          {
            text: "Is able to perform most basic functions within the domain. ",
            id: "sr_1_3",
          },
          {
            text: "Can follow instructions and complete basic tasks.",
            id: "sr_1_4",
          },
        ],
      },
      {
        name: "Applies",
        conditions: [
          {
            text: "Is able to collaborate with others within the Team. ",
            id: "sr_2_1",
          },
          {
            text: "Is able to satisfy routine demands and simple work requirements.",
            id: "sr_2_2",
          },
          {
            text: "Can handle simple challenges with confidence.",
            id: "sr_2_3",
          },
          {
            text: "Can handle simple work requirements but needs help in handling any complications or difficulties.",
            id: "sr_2_4",
          },
          {
            text: "Is able to reason about the context and draw sensible conclusions.",
            id: "sr_2_5",
          },
        ],
      },
      {
        name: "Masters",
        conditions: [
          {
            text: "Is able to satisfy most demands and work requirements.",
            id: "sr_3_1",
          },
          {
            text: "Is able to speak the domain language with ease and accuracy.",
            id: "sr_3_2",
          },
          {
            text: "Is able to communicate and explain his or her work.",
            id: "sr_3_3",
          },
          {
            text: "Is able to communicate and explain his or her work.",
            id: "sr_3_4",
          },
          {
            text: "Knows the limits of his or her capability and when to call on more expert advice.",
            id: "sr_3_5",
          },
          {
            text: "Works at a professional level with little or no guidance.",
            id: "sr_3_6",
          },
        ],
      },
      {
        name: "Adapts",
        conditions: [
          {
            text: "Is able to satisfy complex demands and work requirements. ",
            id: "sr_4_1",
          },
          {
            text: "Is able to communicate with others working outside the domain.",
            id: "sr_4_2",
          },
          {
            text: "Can direct and help others working within the domain.",
            id: "sr_4_3",
          },
          {
            text: "Is able to adapt his or her way-of-working to work well with others, both inside and outside their domain.",
            id: "sr_4_4",
          },
        ],
      },
      {
        name: "Innovates",
        conditions: [
          {
            text: "Has many years of experience and is currently up to date in what is happening within the domain.",
            id: "sr_5_1",
          },
          {
            text: "Is recognized as an expert by his or her peers.",
            id: "sr_5_2",
          },
          {
            text: "Supports others in working on a complex professional level. ",
            id: "sr_5_3",
          },
          {
            text: "Knows when to innovate or do something different and when to follow normal procedure. ",
            id: "sr_5_4",
          },
          {
            text: "Develops innovative and effective solutions to the current challenges within the domain.",
            id: "sr_5_5",
          },
        ],
      },
    ],
  },

  {
    name: "Analysis",
    description:
      "The ability to understand opportunities and their related stakeholder needs, and transform them into an agreed and consistent set of requirements.",
    area: "solution",
    explanation: {
      intro: "People with this competency help the team to:",
      list: [
        "Identify and understand needs and opportunities",
        "Get to know the root causes of the problems",
        "Capture, understand and communicate requirements",
        "Create and agree on specifications and models",
        "Visualize solutions and understand their impact",
      ],
      outro:
        "This competency can be provided by the customer representatives, product owners, business analysts, requirement specialists or developers on the team.",
    },
    skills: [
      "Verbal and written communication",
      "Ability to observe, understand, and record details",
      "Agreement facilitation",
      "Requirements capture",
      "Ability to separate the whole into its component parts",
      "Ability to see the whole by looking at what is required",
    ],
    levels: [
      {
        name: "Assists",
        conditions: [
          {
            text: "Understands and conducts his or her self in a professional manner. ",
            id: "an_1_1",
          },
          {
            text: "Is able to correctly respond to basic questions within his or her domain. ",
            id: "an_1_2",
          },
          {
            text: "Is able to perform most basic functions within the domain. ",
            id: "an_1_3",
          },
          {
            text: "Can follow instructions and complete basic tasks.",
            id: "an_1_4",
          },
        ],
      },
      {
        name: "Applies",
        conditions: [
          {
            text: "Is able to collaborate with others within the Team. ",
            id: "an_2_1",
          },
          {
            text: "Is able to satisfy routine demands and simple work requirements.",
            id: "an_2_2",
          },
          {
            text: "Can handle simple challenges with confidence.",
            id: "an_2_3",
          },
          {
            text: "Can handle simple work requirements but needs help in handling any complications or difficulties.",
            id: "an_2_4",
          },
          {
            text: "Is able to reason about the context and draw sensible conclusions.",
            id: "an_2_5",
          },
        ],
      },
      {
        name: "Masters",
        conditions: [
          {
            text: "Is able to satisfy most demands and work requirements.",
            id: "an_3_1",
          },
          {
            text: "Is able to speak the domain language with ease and accuracy.",
            id: "an_3_2",
          },
          {
            text: "Is able to communicate and explain his or her work.",
            id: "an_3_3",
          },
          {
            text: "Is able to communicate and explain his or her work.",
            id: "an_3_4",
          },
          {
            text: "Knows the limits of his or her capability and when to call on more expert advice.",
            id: "an_3_5",
          },
          {
            text: "Works at a professional level with little or no guidance.",
            id: "an_3_6",
          },
        ],
      },
      {
        name: "Adapts",
        conditions: [
          {
            text: "Is able to satisfy complex demands and work requirements. ",
            id: "an_4_1",
          },
          {
            text: "Is able to communicate with others working outside the domain.",
            id: "an_4_2",
          },
          {
            text: "Can direct and help others working within the domain.",
            id: "an_4_3",
          },
          {
            text: "Is able to adapt his or her way-of-working to work well with others, both inside and outside their domain.",
            id: "dv_4_4",
          },
        ],
      },
      {
        name: "Innovates",
        conditions: [
          {
            text: "Has many years of experience and is currently up to date in what is happening within the domain.",
            id: "dv_5_1",
          },
          {
            text: "Is recognized as an expert by his or her peers.",
            id: "dv_5_2",
          },
          {
            text: "Supports others in working on a complex professional level. ",
            id: "dv_5_3",
          },
          {
            text: "Knows when to innovate or do something different and when to follow normal procedure. ",
            id: "dv_5_4",
          },
          {
            text: "Develops innovative and effective solutions to the current challenges within the domain.",
            id: "dv_5_5",
          },
        ],
      },
    ],
  },
  {
    name: "Development",
    description:
      "The ability to design and program effective software systems following the standards and norms agreed by the team.",
    area: "solution",
    explanation: {
      intro: "People with this competency help the team to:",
      list: [
        "Design and code software systems",
        "Formulate and/or evaluate strategies for choosing an appropriate design pattern or for combining various design patterns",
        "Design and leverage technical solutions",
        "Troubleshoot and resolve coding problems",
      ],
      outro:
        "This competency can be provided by the programmers, coders, designers or architects on the team.",
    },
    skills: [
      "Knowledge of technology",
      "Programming",
      "Knowledge of programming languages",
      "Critical thinking",
      "Re-factoring",
      "Design",
    ],
    levels: [
      {
        name: "Assists",
        conditions: [
          {
            text: "Understands and conducts his or her self in a professional manner. ",
            id: "dv_1_1",
          },
          {
            text: "Is able to correctly respond to basic questions within his or her domain. ",
            id: "dv_1_2",
          },
          {
            text: "Is able to perform most basic functions within the domain. ",
            id: "dv_1_3",
          },
          {
            text: "Can follow instructions and complete basic tasks.",
            id: "dv_1_4",
          },
        ],
      },
      {
        name: "Applies",
        conditions: [
          {
            text: "Is able to collaborate with others within the Team. ",
            id: "dv_2_1",
          },
          {
            text: "Is able to satisfy routine demands and simple work requirements.",
            id: "dv_2_2",
          },
          {
            text: "Can handle simple challenges with confidence.",
            id: "dv_2_3",
          },
          {
            text: "Can handle simple work requirements but needs help in handling any complications or difficulties.",
            id: "dv_2_4",
          },
          {
            text: "Is able to reason about the context and draw sensible conclusions.",
            id: "dv_2_5",
          },
        ],
      },
      {
        name: "Masters",
        conditions: [
          {
            text: "Is able to satisfy most demands and work requirements.",
            id: "dv_3_1",
          },
          {
            text: "Is able to speak the domain language with ease and accuracy.",
            id: "dv_3_2",
          },
          {
            text: "Is able to communicate and explain his or her work.",
            id: "dv_3_3",
          },
          {
            text: "Is able to communicate and explain his or her work.",
            id: "dv_3_4",
          },
          {
            text: "Knows the limits of his or her capability and when to call on more expert advice.",
            id: "dv_3_5",
          },
          {
            text: "Works at a professional level with little or no guidance.",
            id: "dv_3_6",
          },
        ],
      },
      {
        name: "Adapts",
        conditions: [
          {
            text: "Is able to satisfy complex demands and work requirements. ",
            id: "dv_4_1",
          },
          {
            text: "Is able to communicate with others working outside the domain.",
            id: "dv_4_2",
          },
          {
            text: "Can direct and help others working within the domain.",
            id: "dv_4_3",
          },
          {
            text: "Is able to adapt his or her way-of-working to work well with others, both inside and outside their domain.",
            id: "dv_4_4",
          },
        ],
      },
      {
        name: "Innovates",
        conditions: [
          {
            text: "Has many years of experience and is currently up to date in what is happening within the domain.",
            id: "dv_5_1",
          },
          {
            text: "Is recognized as an expert by his or her peers.",
            id: "dv_5_2",
          },
          {
            text: "Supports others in working on a complex professional level. ",
            id: "dv_5_3",
          },
          {
            text: "Knows when to innovate or do something different and when to follow normal procedure. ",
            id: "dv_5_4",
          },
          {
            text: "Develops innovative and effective solutions to the current challenges within the domain.",
            id: "dv_5_5",
          },
        ],
      },
    ],
  },
  {
    name: "Testing",
    description:
      "The ability to test a system, verifying that it is usable and that it meets the requirements.",
    area: "solution",
    explanation: {
      intro: "People with this competency help the team to:",
      list: [
        "Test the system",
        "Create the correct tests to efficiently verify the requirements",
        "Decide what, when and how to test",
        "Evaluate whether the system meets the requirements",
        "Find defects and understand the quality of the system produced",
      ],
      outro:
        "This competency can be provided by specialist individuals or other team members such as customers, users, analysts, developers or other stakeholders.",
    },
    skills: [
      "Keen observation",
      "Exploratory and destructive thinking",
      "Inquisitive mind",
      "Attention to detail",
    ],
    levels: [
      {
        name: "Assists",
        conditions: [
          {
            text: "Understands and conducts his or her self in a professional manner. ",
            id: "ts_1_1",
          },
          {
            text: "Is able to correctly respond to basic questions within his or her domain. ",
            id: "ts_1_2",
          },
          {
            text: "Is able to perform most basic functions within the domain. ",
            id: "ts_1_3",
          },
          {
            text: "Can follow instructions and complete basic tasks.",
            id: "ts_1_4",
          },
        ],
      },
      {
        name: "Applies",
        conditions: [
          {
            text: "Is able to collaborate with others within the Team. ",
            id: "ts_2_1",
          },
          {
            text: "Is able to satisfy routine demands and simple work requirements.",
            id: "ts_2_2",
          },
          {
            text: "Can handle simple challenges with confidence.",
            id: "ts_2_3",
          },
          {
            text: "Can handle simple work requirements but needs help in handling any complications or difficulties.",
            id: "ts_2_4",
          },
          {
            text: "Is able to reason about the context and draw sensible conclusions.",
            id: "ts_2_5",
          },
        ],
      },
      {
        name: "Masters",
        conditions: [
          {
            text: "Is able to satisfy most demands and work requirements.",
            id: "ts_3_1",
          },
          {
            text: "Is able to speak the domain language with ease and accuracy.",
            id: "ts_3_2",
          },
          {
            text: "Is able to communicate and explain his or her work.",
            id: "ts_3_3",
          },
          {
            text: "Is able to communicate and explain his or her work.",
            id: "ts_3_4",
          },
          {
            text: "Knows the limits of his or her capability and when to call on more expert advice.",
            id: "ts_3_5",
          },
          {
            text: "Works at a professional level with little or no guidance.",
            id: "ts_3_6",
          },
        ],
      },
      {
        name: "Adapts",
        conditions: [
          {
            text: "Is able to satisfy complex demands and work requirements. ",
            id: "ts_4_1",
          },
          {
            text: "Is able to communicate with others working outside the domain.",
            id: "ts_4_2",
          },
          {
            text: "Can direct and help others working within the domain.",
            id: "ts_4_3",
          },
          {
            text: "Is able to adapt his or her way-of-working to work well with others, both inside and outside their domain.",
            id: "ts_4_4",
          },
        ],
      },
      {
        name: "Innovates",
        conditions: [
          {
            text: "Has many years of experience and is currently up to date in what is happening within the domain.",
            id: "ts_5_1",
          },
          {
            text: "Is recognized as an expert by his or her peers.",
            id: "ts_5_2",
          },
          {
            text: "Supports others in working on a complex professional level. ",
            id: "ts_5_3",
          },
          {
            text: "Knows when to innovate or do something different and when to follow normal procedure. ",
            id: "ts_5_4",
          },
          {
            text: "Develops innovative and effective solutions to the current challenges within the domain.",
            id: "ts_5_5",
          },
        ],
      },
    ],
  },
];

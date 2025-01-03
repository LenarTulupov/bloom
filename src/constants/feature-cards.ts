import { IFeatureCard } from "@/components/feature-card/feature-card";

export const featureCards: IFeatureCard[] = [
  { 
    id: 1,
    title: 'Quick Surrogate Matching',
    description: true,
    text: "Start your family journey without delays:",
    items: [
      {
        id: 1,
        title: "Access a network of pre-screened surrogate mothers through our trusted clinic partners.",
      },
      {
        id: 2,
        title: "Fast and efficient surrogate matching process.",
      },
      {
        id: 3,
        title: "Minimal waiting times for a seamless experience.",
      }
    ],
  },
  {
    id: 2,
    title: 'Guaranteed Baby Program',
    description: false,
    items: [
      {id: 1,
        title: "Experience peace of mind with our unique program.",
      },
      {id: 2,
        title: "Guaranteed successful outcomes for your surrogacy journey.",
      },
      {id: 3,
        title: "No hidden fees or unexpected financial surprises.",
      },
      {id: 4,
        title: "Focus on the joy of parenthood while we handle the challenges.",
      },
    ],
  },
  {
    id: 3,
    title: 'Expert Legal Support',
    description: true,
    text: "We specialize in managing the legal aspects of surrogacy in Georgia:",
    items: [
      {id: 1,
        title: "Drafting secure, legally binding contracts.",
      },
      {id: 2,
        title: "Ensuring parental rights for intended parents in your home country.",
      },
      {id: 3,
        title: "Full compliance with Georgian surrogacy laws for total peace of mind.",
      },
    ],
  }
]
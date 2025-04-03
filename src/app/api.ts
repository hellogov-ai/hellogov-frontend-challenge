export interface PassportRequirement {
  id: number;
  title: string;
  description: string;
  icon: string;
}

/**
 * Mock API function to fetch passport renewal requirements
 * This simulates a backend API call with a short delay
 */
export const fetchPassportRequirements = async (): Promise<
  PassportRequirement[]
> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Randomly fail 25% of the time to test error handling
  if (Math.random() < 0.25) {
    throw new Error("Failed to fetch products");
  }

  // Mock passport requirements data
  const requirements: PassportRequirement[] = [
    {
      id: 1,
      title: "Original passport",
      description:
        "Please submit your current, signed passport. It should include a photocopy of the page showing your photo, name, and signature. Make sure there are at least two side-by-side blank pages for the visa and that it remains valid for over six months. Ensure the name and signature on the passport match those on the applications you're completing.",
      icon: "passport",
    },
    {
      id: 2,
      title: "Passport photo",
      description:
        'You need one 2"x2" passport-style photograph, printed on photo paper. Ensure the photo was taken in the last six months against a plain white background.',
      icon: "photo",
    },
    {
      id: 3,
      title: "Application form",
      description:
        "Complete Form DS-82 online or fill out a paper form. Be sure to provide accurate information and sign where indicated.",
      icon: "form",
    },
    {
      id: 4,
      title: "Renewal fee",
      description:
        'Include a check or money order for $130 made payable to "U.S. Department of State" or pay online if submitting electronically.',
      icon: "payment",
    },
    {
      id: 5,
      title: "Mailing envelope",
      description:
        "Use a secure, trackable delivery method to submit your application package to the address listed on the form instructions.",
      icon: "mail",
    },
  ];

  return requirements;
};

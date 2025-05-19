import { NextResponse } from "next/server";

export interface PassportRequirement {
  id: number;
  title: string;
  description: string;
  icon: string;
}

/**
 * API handler for passport renewal requirements
 */
export async function GET() {
  try {
    // Simulate API delay (optional in production)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Randomly fail 25% of the time to test error handling (remove in production)
    if (Math.random() < 0.25) {
      return NextResponse.json(
        { error: "Failed to fetch requirements" },
        { status: 500 }
      );
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

    // Return the requirements as JSON
    return NextResponse.json(requirements);
  } catch (error) {
    console.error("Error fetching passport requirements:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

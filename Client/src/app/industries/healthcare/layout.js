export const metadata = {
    title: "Healthcare AI & ABDM Integration Solutions | AlgoFlow AI",
    description: "Clinical AI, ABDM/ABHA integration, PHR systems, OPD automation, and radiology AI for hospitals and healthcare providers. AlgoFlow AI reduced OPD wait times by 75% and prescription errors by 60%.",
    keywords: [
        "healthcare AI India", "ABDM integration", "ABHA health ID", "clinical AI",
        "hospital management AI", "FHIR R4 India", "PHR patient health records",
        "OPD automation", "radiology AI", "medical AI", "digital health India", "NHA compliant"
    ],
    alternates: { canonical: "https://www.algoflowai.com/industries/healthcare" },
    openGraph: {
        title: "Healthcare AI & ABDM Integration | AlgoFlow AI",
        description: "Clinical AI, ABDM M1/M2/M3 integration, PHR systems, and hospital management AI. 75% faster triage, 40% OPD reduction.",
        url: "https://www.algoflowai.com/industries/healthcare",
        images: [{ url: "/images/caseStudy1.jpeg", width: 1200, height: 630, alt: "Healthcare AI Solutions" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Healthcare AI & ABDM Integration | AlgoFlow AI",
        description: "Clinical AI, ABDM-compliant PHR systems, and hospital management AI.",
        images: ["/images/caseStudy1.jpeg"],
    },
};

export default function HealthcareLayout({ children }) {
    return children;
}

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const serviceDetails = {
  1: {
    title: "Logo Design 🎨",
    description: "Craft a unique and memorable logo that defines your brand’s identity.",
    responsibilities: [
      "Understand client’s brand vision.",
      "Provide 2-3 initial logo concepts.",
      "Offer up to 3 rounds of revisions.",
      "Deliver logo in multiple formats (PNG, SVG, etc)."
    ],
    skills: ["Adobe Illustrator", "Photoshop", "Figma", "Creativity"]
  },
  2: {
    title: "Web Development 💻",
    description: "Develop modern, responsive websites to enhance your online presence.",
    responsibilities: [
      "Design user-friendly layouts.",
      "Implement responsive web design.",
      "Integrate necessary APIs and forms.",
      "Provide deployment support."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]
  },
  3: {
    title: "SEO Optimization 🚀",
    description: "Boost your website’s visibility and ranking on search engines.",
    responsibilities: [
      "Conduct site audit & keyword research.",
      "Optimize on-page SEO elements.",
      "Improve page load speed.",
      "Generate monthly SEO reports."
    ],
    skills: ["Google Analytics", "Search Console", "SEMrush", "Yoast SEO"]
  },
  4: {
    title: "Mobile App UI 📱",
    description: "Design engaging, intuitive interfaces for mobile apps.",
    responsibilities: [
      "Create wireframes and mockups.",
      "Design for both iOS and Android.",
      "Ensure pixel-perfect delivery.",
      "Provide design handoff files."
    ],
    skills: ["Figma", "Sketch", "Adobe XD", "UI/UX Principles"]
  },
  5: {
    title: "Social Media Marketing 📢",
    description: "Strategize and execute impactful social media campaigns.",
    responsibilities: [
      "Plan monthly content calendar.",
      "Design creative posts and ads.",
      "Manage ad campaigns.",
      "Track engagement and growth."
    ],
    skills: ["Canva", "Meta Ads Manager", "Copywriting", "Analytics"]
  },
  6: {
    title: "Content Writing ✍️",
    description: "Produce high-quality, SEO-friendly content for various platforms.",
    responsibilities: [
      "Write blog posts / website copy.",
      "Ensure plagiarism-free content.",
      "Incorporate client keywords.",
      "Provide edits if needed."
    ],
    skills: ["Grammarly", "SEO Writing", "Research", "WordPress"]
  },
  7: {
    title: "Video Editing 🎬",
    description: "Create professional, engaging videos for your brand.",
    responsibilities: [
      "Edit raw footage into final cuts.",
      "Add transitions, effects, and music.",
      "Deliver in HD formats.",
      "Allow for 1-2 rounds of edits."
    ],
    skills: ["Adobe Premiere", "After Effects", "Final Cut Pro"]
  },
  8: {
    title: "Data Entry 🗂",
    description: "Accurate, timely data entry for your business needs.",
    responsibilities: [
      "Input data into spreadsheets/databases.",
      "Ensure error-free entries.",
      "Maintain data confidentiality.",
      "Provide daily reports if required."
    ],
    skills: ["Excel", "Google Sheets", "Attention to detail"]
  },
  9: {
    title: "Translation Service 🌍",
    description: "Offer precise translation across various languages.",
    responsibilities: [
      "Translate documents accurately.",
      "Preserve original meaning and tone.",
      "Review for grammar and fluency.",
      "Handle technical terminology."
    ],
    skills: ["Native/Fluent language skills", "CAT tools", "Proofreading"]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[id];

  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!github || !linkedin || !portfolio) {
      alert("⚠️ Please fill in all portfolio links before proceeding.");
      return;
    }
    if (!resume) {
      alert("⚠️ Please upload your resume before proceeding.");
      return;
    }
    alert("✅ Portfolio, skills, and resume submitted! Proceeding to booking...");
    navigate(`/booking/${id}`);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("❌ Only PDF, DOC, DOCX files are allowed.");
        return;
      }
      setResume(file);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed p-10 text-white flex justify-center items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')"
      }}
    >
      <div className="bg-black/70 backdrop-blur-md p-8 rounded-3xl max-w-2xl shadow-2xl w-full">
        {service ? (
          <>
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">{service.title}</h1>
            <p className="mb-4">{service.description}</p>

            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">Roles & Responsibilities</h2>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {service.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">Required Technical Skills</h2>
            <ul className="list-disc list-inside space-y-1 mb-6">
              {service.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="url"
                placeholder="GitHub Profile Link"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="url"
                placeholder="LinkedIn Profile Link"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="url"
                placeholder="Portfolio Website Link"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full p-2 rounded-lg bg-white/10 text-white file:bg-yellow-400 file:border-0 file:px-4 file:py-2 file:rounded-lg file:text-black hover:file:bg-yellow-500"
                required
              />
              {resume && <p className="text-sm">📄 {resume.name}</p>}
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition transform hover:scale-105"
              >
                Submit & Book ✅
              </button>
            </form>
          </>
        ) : (
          <p className="text-red-400 font-semibold">Service not found ❌</p>
        )}
      </div>
    </div>
  );
}

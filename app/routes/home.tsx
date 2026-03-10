import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants/constant";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to Resumind!" },
  ];
}

export default function Home() {
   const { auth} = usePuterStore();
   const navigate = useNavigate();
    
  useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
   }, [auth.isAuthenticated])


  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your Applications & Resume Ratings</h1>
          <h2>Review your submissions and Ai-Powered feedback.</h2>
        </div>

   {resumes.length > 0 && (
  <div className="resumes-section">
    {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume} />
    ))}
  </div>
)}

    </section>
    
  </main>
}

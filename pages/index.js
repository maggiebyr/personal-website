cat > pages/index.js << 'EOL'
import React from 'react';
import { Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';

const Website = () => {
  const projects = [
    { 
      name: "Startup Idea Finder", 
      description: "Find your next startup idea", 
      link: "https://startup-idea-finder.vercel.app/" 
    },
    { 
      name: "DAO Voting 4 Dummies", 
      description: "Simplified DAO voting interface", 
      link: "https://dummy-dao-voting.vercel.app/" 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-4 text-black">Maggie Byrne</h1>
          <p className="text-xl text-slate-800">Founder. Investor. Builder.</p>
        </header>

        <div className="prose max-w-none mb-16">
          <p className="text-lg text-black">
            Hey! 👋
          </p>
          
          <div className="flex space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/maggieelizabethbyrne/" className="text-blue-600 hover:text-blue-800 flex items-center">
              <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
            </a>
            <a href="https://maggiebyrne.substack.com/" className="text-blue-600 hover:text-blue-800 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2" /> Substack
            </a>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-black">Right now I'm...</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700">
            <li>Taking a "break" from school</li>
            <li>Building a platform to make Web 3 accessible through no-code dev tools</li>
            <li>Teaching personal finance to high schoolers</li>
            <li>Researching Web3 vesting schedules (more interesting than it sounds!)</li>
            <li>Connecting early founders with investors</li>
            <li>Taking really long walks with good podcasts</li>
            <li>Learning as much as I can</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-black">Past stuff:</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <ul className="space-y-3 text-slate-700">
              <li>🔍 Analyst at RevTech Labs + Newlin Ventures (sourced deals, helped founders to the best of my ability, and got the crazy opportunity to support a portfolio that raised $2.5 B in venture capital and created over 1,200 jobs)</li>
              <li>💼 Business Development @ Sonen Capital (qualified $MM leads)</li>
              <li>🚀 Founded & sold a platform connecting students with local mentors (built something I wanted)</li>
              <li>📱 Created Dyslexia Scanner app (didn't really work)</li>
              <li>💫 BD at Vosyn ($2M funding secured)</li>
              <li>🎓 Research Assistant @ UO (made sense of university admissions data)</li>
              <li>👥 Board President @ Assisteens (community service FTW)</li>
              <li>📚 Marketing + Sales @ Breakout Learning (got 75+ professors on board)</li>
              <li>🏠 Advisory Board Member @ UO Housing (made dorm life better)</li>
              <li>📊 Analyst @ UO Real Estate Investment Group (crunched numbers)</li>
              <li>🎯 Branding Lead @ IDB Ventures (made things look good)</li>
              <li>🤖 Advisory Board Member to the Dean on AI (because future)</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-black">When I'm not working...</h2>
          <p className="text-lg text-slate-700">
            You'll find me lifting weights 🏋️‍♀️, cruising in my old Bronco 🛻, hiking new trails 🥾, or on my ideal 12-hour walk 
            (yes, really). Also, I'm always down to walk dogs 🐕 — seriously, hit me up if you need a dog walker!
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-black">A Few of the Things I've Built for Fun:</h2>
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-semibold text-lg text-black">{project.name}</h3>
                  <p className="text-slate-600">{project.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <a 
            href="mailto:maggiebyrne78@gmail.com" 
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center inline-flex"
          >
            Say Hi <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Website;
EOL

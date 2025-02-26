import React from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

function LinkInBio() {
  const links = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/11KhushbooRajora', 
      icon: '💻' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/khushboo-rajora-122261303/', 
      icon: '👔' 
    },
    { 
      name: 'Twitter/X', 
      url: 'https://x.com/username', 
      icon: '🐦' 
    }
  ];

  return (
    <div className="link-in-bio">
      <div className="profile">
        <div className="avatar">🧑‍💻</div>
        <h1>Your Name</h1>
        <p className="tagline">Software Engineer | Creative Technologist</p>
      </div>
      
      <div className="links">
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-item"
          >
            <span className="link-icon">{link.icon}</span>
            <span className="link-name">{link.name}</span>
          </a>
        ))}
      </div>

      <a 
        href={import.meta.url.replace("esm.town", "val.town")} 
        target="_top" 
        className="source-link"
      >
        View Source
      </a>
    </div>
  );
}

function client() {
  createRoot(document.getElementById("root")).render(<LinkInBio />);
}
if (typeof document !== "undefined") { client(); }

export default function server(request: Request): Response {
  return new Response(`
    <html>
      <head>
        <title>Link in Bio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://esm.town/v/std/catch"></script>
        <style>${css}</style>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="${import.meta.url}"></script>
      </body>
    </html>
  `, {
    headers: { "content-type": "text/html" }
  });
}

const css = `
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
}

.link-in-bio {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  padding: 30px;
}

.avatar {
  font-size: 80px;
  margin-bottom: 15px;
}

.profile h1 {
  margin: 10px 0 5px;
  color: #333;
  font-size: 24px;
}

.tagline {
  color: #666;
  margin-bottom: 25px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.link-item {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  padding: 12px 15px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.link-item:hover {
  background-color: #e0e0e0;
}

.link-icon {
  margin-right: 10px;
  font-size: 20px;
}

.link-name {
  flex-grow: 1;
  text-align: left;
}

.source-link {
  display: block;
  margin-top: 20px;
  color: #888;
  text-decoration: none;
  font-size: 12px;
}
`;

export default function PostLinkedin() {
  return (
    <section>
      <h2>Mon dernier post Linkedin</h2>
      <div className="linkedin-embed">
        <iframe 
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7377667405545910272?collapsed=1" 
          title="Post intégré" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
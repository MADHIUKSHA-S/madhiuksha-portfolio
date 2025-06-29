export default function Projects() {
  return (
    <section id="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project-card">
          <h3>Task Manager</h3>
          <p>
            A full-stack MERN web app for managing personal tasks and team projects. 
            Allows setting priorities, tracking deadlines, and managing subtasks 
            with a clean dashboard.
          </p>
          <a href="https://task-project-manager.onrender.com" target="_blank" rel="noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>PBMS Ecommerce</h3>
          <p>
            Designed for Perundurai Bearings & Mill Stores, this MERN site offers 
            secure online ordering, a shopping cart, and an admin panel 
            for managing products and orders.
          </p>
          <a href="https://pbms-frontend.onrender.com" target="_blank" rel="noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Chronic Disease ML</h3>
          <p>
            Machine learning app predicting risks of breast cancer, diabetes, 
            and heart disease using real datasets and AdaBoost, SVM, Decision Trees.
          </p>
          <a href="https://chronic-disease-indicator.vercel.app/" target="_blank" rel="noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>OTT Media Analysis</h3>
          <p>
            An interactive Power BI dashboard visualizing viewer trends 
            across Netflix, Prime, and Hotstar, revealing patterns by genre, 
            country, and ratings.
          </p>
          <a href="https://github.com/MADHIUKSHA-S/DA_OTT_MEDIA" target="_blank" rel="noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
}

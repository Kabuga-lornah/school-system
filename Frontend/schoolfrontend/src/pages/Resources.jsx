import { useState } from 'react';

function Resources() {
  // "Blank" data waiting for the backend
  const [resources, setResources] = useState([]);

  return (
    <div>
      <h2>Resources</h2>
      <div className="card">
        {resources.length === 0 ? (
          <div>
            <p>No resources, class notebooks, or revision books found.</p>
            <p>Backend will provide: `user_resources` (a list of files and folders)</p>
          </div>
        ) : (
          <div className="file-explorer">
            {/* This will be populated by the backend */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
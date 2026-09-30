{/* OPEN BUGS */}

        <div className="board-section">
          <div className="board-section-header">
              <h3 className="board-section-title">Open</h3>
              <div>
              <p className="bugcount bg-zinc-100/40">{resolvedBugs.length}</p>
              </div>
          </div>
            <div className="bugcard-container">
                {filterBugs("open").map((bug) => (
                  <BugCard  bug={bug
                    
                  }/>
                ))}
            </div>
        </div>

                {/* In Progress */}

        <div className="board-section">
          <div className="board-section-header">
              <h3 className="board-section-title">In Progress</h3>
              <p className="bugcount bg-blue-400">
                {filterBugs("in progress").length}
              </p>
          </div>
          <div className="bugcard-container">
                {filterBugs("in progress").map((bug) => (
                  <BugCard bug={bug
                    
                  }/>
                ))}
            </div>
        </div>

        {/* In Review */}
        <div className="board-section">
          <div className="board-section-header">
              <h3 className="board-section-title">In Review</h3>
              <p className="bugcount bg-yellow-400">
                {filterBugs("in review").length}
              </p>
          </div>
            <div className="bugcard-container">
                {filterBugs("in review").map((bug) => (
                  <BugCard bug={bug
                    
                  }/>
                ))}
            </div>
        </div>

                {/* Resolved */}
        <div className="board-section">
          <div className="board-section-header">
              <h3 className="board-section-title">Resolved</h3>
              <p className="bugcount bg-green-600">
                {filterBugs("resolved").length}
              </p>
          </div>
            <div className="bugcard-container">
                {filterBugs("resolved").map((bug) => (
                  <BugCard bug={bug
                    
                  }/>
                ))}
            </div>
        </div>
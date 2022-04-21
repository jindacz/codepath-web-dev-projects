export default function Playlist(){
    return(
      <div className="playlist">
          <div className="info">
              <span className="status">Paused...</span>
              <p className="title">Title</p>
          </div>

          <div className="controls">
              <div className="audio">
                  <audio preload="false" controls></audio>
              </div>

              <div className="buttons">
                  <button className="btn">&larr;</button>
                  <button className="btn">&rarr;</button>
              </div>
          </div>
      </div>
    )
}
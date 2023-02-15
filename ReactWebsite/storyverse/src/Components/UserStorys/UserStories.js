import "./UserStories.css";

export default function UserStories() {
    return(
        <>
            <div className="user-stories-container">
                <div className="story-list-pannel">
                    <div className="head">
                        <h2 className="head-title">Your Stories</h2>
                        <button className="creat-button">Create</button>
                    </div>
                    <div className="story-list-container">
                        <div className="filter-selection">
                            <button className="filter filter-active">All Stories</button>
                            <button className="filter">Drafts</button>
                            <button className="filter">Published Stories</button>
                        </div>
                        <ul className="story-list">
                            <li>Story 1</li>
                            <li>Story 2</li>
                            <li>Story 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
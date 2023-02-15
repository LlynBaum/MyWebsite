import StoryEditor from "../StoryEditor/StoryEditor";
import StoryCard from "./StoryCard/StoryCard";
import "./UserStories.css";

export default function UserStories({switchCoponentInMainSection}) {
    return(
        <>
            <div className="user-stories-container">
                <div className="story-list-pannel">
                    <div className="head">
                        <h2 className="head-title">Your Stories</h2>
                        <button className="creat-button" onClick={() => switchCoponentInMainSection(<StoryEditor />)}>Create</button>
                    </div>
                    <div className="story-list-container">
                        <div className="filter-selection">
                            <button className="filter filter-active">All Stories</button>
                            <button className="filter">Drafts</button>
                            <button className="filter">Published Stories</button>
                        </div>
                        <ul className="story-list">
                            <li><StoryCard title="Story 1" isDraft/></li>
                            <li><StoryCard title="Story 2" views="4567" comments="657"/></li>
                            <li><StoryCard title="Story 3" views="235" comments="687" isDraft/></li>
                            <li><StoryCard title="Story 4" views="7689" comments="978"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
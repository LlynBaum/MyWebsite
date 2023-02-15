import "./storyCard.css"

export default function StoryCard({title, views, comments, isDraft}){

    if(views == null || views == "0"){
        views = "-";
    }
    if(comments == null || comments == "0"){
        comments = "-";
    }

    return(
        <>
            <div className="top-row">
                <h3 className="story-title">{title}</h3>
                {isDraft && (<p><i>Draft</i></p>)}
            </div>
            <div className="story-stats">
                <p><i className="fa-solid fa-eye"></i> {views}</p>
                <p><i className="fa-regular fa-comment"></i> {comments}</p>
            </div>
        </>
    );
}
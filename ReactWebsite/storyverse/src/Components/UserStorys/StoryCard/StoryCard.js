export default function StoryCard({title, views, comments}){
    return(
        <>
            <h3>{title}</h3>
            <div className="storyStats">
                <p>Views: {views}</p>
                <p>Comments: {comments}</p>
            </div>
        </>
    );
}
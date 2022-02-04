import chapters from "../chapters";

const NavButtons = (props) => {
    const numOfPages = chapters[props.currentChapter].pages;
    const numOfChapters = chapters.length;
    return (
        <div style={{display: "flex", backgroundColor: "#270066", justifyContent: "space-evenly", alignItems: "center"}}>
        {!((props.currentChapter === 0) && (props.currentPage === 1)) ? <p className="pageNav" onClick={props.first} >First</p> : <p className="pageNav"></p>}
        {!((props.currentChapter === 0) && (props.currentPage === 1)) ? <p className="pageNav" onClick={props.prev} >Prev</p> : <p className="pageNav"></p>}
        {!((props.currentChapter === numOfChapters-1) && (props.currentPage === numOfPages)) ? <p className="pageNav" onClick={props.next}>Next</p> : <p className="pageNav"></p>}
        {!((props.currentChapter === numOfChapters-1) && (props.currentPage === numOfPages)) ? <p className="pageNav" onClick={props.last}>Last</p> : <p className="pageNav"></p>}

        
        </div>

    );
}
export default NavButtons;
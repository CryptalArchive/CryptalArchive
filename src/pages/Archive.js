import { useLayoutEffect, useState } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import chapters from "../chapters";
import AnimatedPage from "../components/AnimatedPage";
import NavButtons from "../components/NavButtons";

function Archive(props) {
    // Allows the URL to be changed outside of link components.
    const history = useHistory();
    
    // Makes page scroll to top when selecting a link. Less annoying when going from page to page.
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    // Grabs chapter and page from URL.
    const params = useParams();

    // Keeps track of the current page selected. Default set to the page specified in the URL.
    const [pgNum, setPgNum] = useState(parseInt(params.page));
    // Keeps track of the current chapter. Default set to the chapter specified in the URL.
    const [chapter, setChapter] = useState(parseInt(params.chapter));

    // Changes based on the number of pages in selected chapter.
    const numOfPages = chapters[chapter].pages;
    const numOfChapters = chapters.length;

    // Array that holds the links to pages that appear on the archive list.
    const pages = [];
    
    const chapterButtons = [];
    function changeChapter(chap) {
        setChapter(chap);
        setPgNum(1);
        history.push("/pages/" + chap + "/" + 1);
    }
    // The following functions will be passed to the NavButtons component so that they can executed there.
    // Uses useHistory hook to change the URL according to the page being navigated to.
    function nextPage() {
        // If we're on the last page and want to go to the next chapter.
        if ((pgNum === numOfPages) && ((chapter + 1 ) < numOfChapters)) {
   
                setPgNum(1);
                setChapter(chapter + 1);
                history.push("/pages/" + (chapter + 1) + "/" + 1);
            
        }
        else {
            setPgNum(pgNum + 1);
            history.push("/pages/" + chapter + "/" + (pgNum+1));
        }
    }
    function prevPage() {
        // If on the first page but want to go back to the previous chapter.
        if (pgNum === 1 && (chapter !== 0)) {
            let numPrevChapPages = chapters[chapter - 1].pages;
            setPgNum(numPrevChapPages);
            setChapter(chapter - 1);
            history.push("/pages/" + (chapter - 1) + "/" + numPrevChapPages);
        }
        else {
            setPgNum(pgNum - 1);
            history.push("/pages/" + chapter + "/" + (pgNum-1));
        }
    }

    function firstPage() {
        setPgNum(1);
        setChapter(0);
        history.push("/pages/0/1");
    }

    function lastPage() {
        let pagesInLatestChapter = chapters[numOfChapters - 1].pages;
        setChapter(numOfChapters - 1);
        setPgNum(pagesInLatestChapter);
        history.push("/pages/" + (numOfChapters - 1) + "/" + pagesInLatestChapter);
    }
    // Fills up the archive list with links that will change the comic page. 
    // BASED ON "numOfPages" value!!
    for (let i = 1; i <= numOfPages; ++i) {
        pages.push(<Link onClick={() => setPgNum(i)} key={i} to={"/pages/" + chapter + "/" + i} className="comiclink">{i}<br></br></Link>  )
    }
    // Creates buttons for each chapter.
    for (let i = 0; i < numOfChapters; ++i) {
        chapterButtons.push(<Button className="chapterBtn" onClick={() => changeChapter(i)}>{chapters[i].name}</Button>)
    }
    
    return (
    
    <div>
    <Container fluid className="pageGrid">
        <Row xs={2} lg={3} className="justify-content-md-center">
            {/* Archive List */}
            <Col lg={2}>
                <div id="archive" xs className="pagelistblock">
                <p> Archive </p>
                {chapterButtons}
                <hr></hr>
                <br></br>
                <p>Chapter {chapter}</p>
                <p>{chapters[chapter].title}</p>
                <br></br>
                <hr></hr>
                {pages}
                </div>
            </Col>


            {/* Comic Page */}
            <Col xs="auto" lg={6}> 
                <p style={{color: "white", fontSize: "30px"}}>Chapter {chapter}, page {pgNum}</p>
                <NavButtons currentChapter={chapter} currentPage={pgNum} next={nextPage} prev={prevPage} first={firstPage} last={lastPage} />
                <div className="pageblock"><Image onContextMenu={e => e.preventDefault()} fluid src={"/imgs/comic/chapter" + chapter + "/" + pgNum + ".jpg"} alt="pic"/></div>
                <NavButtons currentChapter={chapter} currentPage={pgNum} next={nextPage} prev={prevPage} first={firstPage} last={lastPage} />
            </Col>
            
        </Row>
        <Row className="mobileList" style={{display: "none"}}>
        
        </Row>
    </Container>
    </div>
    
    );
}

export default Archive;
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import gallery from "../gallery";
import { useParams } from "react-router-dom";
import GallerySelection from './GallerySelection';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { Dropdown } from 'react-bootstrap';

const Gallery = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // scroll to the top of the browser window when changing route
    // the window object is a normal DOM object and is safe to use in React.
  }, [location]);
  const params = useParams();
  const galleryCat = params.galleryCategory;
  const [gal, setGal] = useState(gallery.filter(item => item.category === galleryCat));
  const [subCat, setSubCat] = useState("all");
  
  function handleChange(newsubcat) {
    if (newsubcat === "all") {
      setGal(gallery.filter(item => item.category === galleryCat))
    }
    else {
      setGal(gallery.filter(item => (item.category === galleryCat) && (item.subcategory === newsubcat)));
      
    }
    setSubCat(newsubcat);
  
  }


  return (
    
    <div>
    <GallerySelection />
    <AnimatedPage>
    <div style={{textAlign: "center", marginTop: "30px"}}>
    <p style={{color: "white"}}> current filter: {subCat} </p>
    </div>
    
    <div className="galleryPage">
      
      <div className="categoryButtons">
      <p className="backBtn" style={{cursor: "pointer", width: "90px", marginRight: "20px"}} onClick={() => handleChange("all")}>all</p>
      <p className="backBtn" style={{cursor: "pointer", width: "90px", marginRight: "20px"}} onClick={() => handleChange("sym")}>sym</p>
          <p className="backBtn" style={{cursor: "pointer", width: "90px", marginRight: "20px"}} onClick={() => handleChange("ded")}>ded</p>
          <p className="backBtn" style={{cursor: "pointer", width: "90px", marginRight: "20px"}} onClick={() => handleChange("heidi")}>heidi</p>
          <p className="backBtn" style={{cursor: "pointer", width: "90px", marginRight: "20px"}} onClick={() => handleChange("baz")}>baz</p>
          <p className="backBtn" style={{cursor: "pointer", width: "90px", marginRight: "20px"}} onClick={() => handleChange("ren")}>ren</p>
      </div>)
      <div className="mobileButtons">
        <Dropdown >
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Characters
          </Dropdown.Toggle>
        
          <Dropdown.Menu variant="dark">
            <Dropdown.Item onClick={() => handleChange("all")}>all</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => handleChange("sym")}>sym</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange("ded")}>ded</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange("heidi")}>heidi</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange("baz")}>baz</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange("ren")}>ren</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Box className="galleryBox">
        <ImageList variant="masonry" cols={2} gap={8}>
            {gal.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.path}?w=900&fit=crop&auto=format`}
                  srcSet={`${item.path}?w=900&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
        </ImageList>
      </Box>
      
      </div>
      </AnimatedPage>
    </div>
  );
}
export default Gallery;
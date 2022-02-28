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
import { Dropdown, Image } from 'react-bootstrap';
import { Card, CardMedia, Modal, Fade, Typography, Backdrop } from '@mui/material';

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
  const [image, setImage] = useState("");
  const [subCat, setSubCat] = useState("all");
  const [open, setOpen] = React.useState(false);
  const style = {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "80vw",
    maxHeight: "80vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => setOpen(false);
  function handleChange(newsubcat) {
    if (newsubcat === "all") {
      setGal(gallery.filter(item => item.category === galleryCat))
    }
    else {
      setGal(gallery.filter(item => (item.category === galleryCat) && (item.subcategory === newsubcat)));
      
    }
    setSubCat(newsubcat);
  }
  function handleOpen(img) {
    setOpen(true);
    setImage(img);
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
      <div className="galleryGrid">
        {gal.map((item) => (
          <Card sx={{ maxWidth: 300, margin: "25px", border: "solid white 5px" }}>
          <CardMedia 
          className="galleryImage"
          onClick={() => handleOpen(item)}
          fluid
          component="img"
          height="240"
          image={item.path}
          alt={item.title}
          />
          </Card>
        ))}      
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Typography>
            Artwork by ArtistHere.
            </Typography>  
          <Image style={{maxWidth: "70vw", maxHeight: "70vh",}} src={image.path} alt={image.title}></Image>
            
          </Box>
        </Fade>
      </Modal>
      </div>


      
      </div>
      </AnimatedPage>
    </div>
  );
}
export default Gallery;
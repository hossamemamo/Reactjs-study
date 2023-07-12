import ImageShow from "./ImageShow";
import './ImageList.css';
function ImageList({images}){
    const renderedImages = images.map(
        (image)=>{

            return (<div key={image.mal_id}>
            <ImageShow  image={image} />
            </div>
            );

        }
    );
    return <div className="image-list">{renderedImages}</div>
}

export default ImageList;
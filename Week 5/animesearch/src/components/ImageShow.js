import './ImageShow.css'
function ImageShow ({image}){
    return (
        <div className='anime'>
            <a href={image.url} target = "_blank" rel="noopener noreferrer" >
                <img src={image.images.jpg.large_image_url} alt={image.title}/>
            </a>
        <label>{image.title}</label>
        </div>
    );
}
export default ImageShow;

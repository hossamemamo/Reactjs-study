import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage(){
    const [showModal,setShowModal]=useState(false);

    const handleClick = ()=>{
        setShowModal(true);

    };

    const handleClose=()=>{
        setShowModal(false);
    }

    const actionBar = <div>
        <Button  onClick={handleClose} primary> I accept</Button>
    </div>;

    const modal=<Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            This is and Important message to accept
        </p>
    </Modal>




    return(<div className="relative">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices suscipit mattis. Aenean fringilla eleifend convallis. Cras ullamcorper leo turpis. Praesent sit amet ligula libero. Quisque nec ligula nulla. Nulla quis tempor eros. Pellentesque eros lacus, rutrum sit amet lorem ut, bibendum dapibus ex. Nullam semper auctor justo, vel euismod odio. Nam volutpat, ante a facilisis posuere, dolor urna ullamcorper quam, et auctor tellus elit nec velit. Phasellus condimentum at lacus vel commodo. Quisque convallis, tellus in faucibus eleifend, metus massa aliquet ipsum, id convallis sapien ipsum nec sapien. Proin quis erat nec eros imperdiet lobortis a sit amet purus. Donec auctor sem eu erat interdum consectetur. Proin diam tortor, semper at libero non, placerat gravida orci.
Duis id eleifend libero. Maecenas faucibus ut nunc nec tempor. Donec et felis a metus laoreet scelerisque. Vestibulum rhoncus sapien tellus, ac suscipit neque scelerisque ac. Nullam dolor nulla, feugiat quis efficitur a, aliquam et arcu. Nulla sit amet posuere enim, rhoncus semper purus. Quisque sit amet massa pretium lorem tincidunt malesuada a sit amet magna. Phasellus tristique viverra gravida. Duis est massa, mattis ac facilisis sed, consectetur a nibh. Mauris malesuada, neque tincidunt euismod consequat, ipsum nibh volutpat dui, nec faucibus dolor enim ut nibh. Pellentesque lacus nulla, interdum dignissim condimentum quis, ultricies quis eros. Quisque elit dolor, pellentesque id pharetra eget, tristique quis purus.
Proin gravida ipsum sit amet elementum tincidunt. Fusce ultricies nunc lectus, a euismod justo venenatis eget. Fusce scelerisque turpis nibh, id pellentesque ex consectetur at. Mauris lobortis nec felis non molestie. Ut consectetur purus vitae accumsan ultrices. Nullam finibus venenatis augue sit amet tempor. Duis vel quam eros. Integer consequat, enim ac blandit rhoncus, eros tellus scelerisque felis, vitae sollicitudin diam ipsum vitae tortor. Maecenas nec nulla congue, blandit nisi id, venenatis tellus. Morbi sit amet tempor orci. Mauris pellentesque fringilla finibus.
Nam nisi dui, rhoncus mattis ipsum vitae, dictum viverra quam. Donec quis elit sit amet lectus finibus porta varius sit amet leo. Praesent feugiat quam vitae purus pretium placerat. Cras blandit imperdiet mauris, nec mollis erat volutpat eu. Mauris aliquet turpis malesuada metus molestie, id lobortis metus aliquam. Donec id leo vestibulum, gravida lectus non, varius risus. Nulla et ligula urna. Morbi sed risus consequat neque tincidunt mollis nec sed nulla. Quisque magna nisl, tempus dictum libero sed, aliquet dapibus magna. Sed varius tincidunt ex, ut facilisis justo lacinia consequat.
Cras scelerisque tincidunt hendrerit. Maecenas quis velit fringilla tellus bibendum efficitur. Aliquam id ipsum pretium, semper justo nec, laoreet augue. Mauris pulvinar est in euismod dignissim. Pellentesque porttitor sit amet magna quis luctus. Phasellus non nulla et quam scelerisque varius. Pellentesque semper massa lorem, id sodales felis viverra eu. Vestibulum eu enim quis turpis gravida bibendum. Nunc dapibus euismod ante vel tincidunt. Aliquam porta neque vitae suscipit dignissim. Duis eget ex nisi.
        </p>
        <Button primary onClick={handleClick}>Open Modal</Button>
        {showModal && modal}

    </div>)
}
export default ModalPage;
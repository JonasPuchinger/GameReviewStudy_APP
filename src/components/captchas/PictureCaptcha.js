import Gallery from 'react-grid-gallery';
import M from 'materialize-css';
import React from 'react';
import images from './images';

class PictureCaptcha extends React.Component {

    instance;

    componentDidMount() {
        let modal = document.querySelector("#picture-modal");
        const options = {
            dismissible: false,
            opacity: 0.9
        }
        this.instance = M.Modal.init(modal, options);
        this.instance.open();
    }

    closeModal = () => {
        let selectedImages = images.filter(el => el.isSelected === true);
        if(selectedImages.length > 0) {
            this.instance.close();
            M.Toast.dismissAll();
        } else {
            M.toast({html: "Please select images to continue!"});
        }
    }
    
    handleImageSelection = (i) => {
        images[i].isSelected = !images[i].isSelected;
    }

    render() {
        return (
            <div>
                <div id="picture-modal" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>Please select all pictures with food in them</h4>
                        <div id="picture-modal-gallery">
                            <Gallery 
                                images={images}
                                maxRows={3}
                                rowHeight={180}
                                margin={7}
                                enableImageSelection={true}
                                onClickThumbnail={this.handleImageSelection}
                                onSelectImage={this.handleImageSelection}
                                enableLightbox={false}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-flat" onClick={this.closeModal}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PictureCaptcha;
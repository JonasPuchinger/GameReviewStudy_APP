import CanvasDraw from 'react-canvas-draw';
import M from 'materialize-css';
import React from 'react';

class DrawCaptcha extends React.Component {

    instance;

    componentDidMount() {
        let modal = document.querySelector("#draw-modal");
        const options = {
            dismissible: false,
            opacity: 0.9
        }
        this.instance = M.Modal.init(modal, options);
        this.instance.open();
    }

    canvasEmpty = () => {
        let canvasData = JSON.parse(this.saveableCanvas.getSaveData());
        return canvasData.lines.length === 0;
    }

    closeModal = () => {
        if(!this.canvasEmpty()) {
            this.instance.close();
            M.Toast.dismissAll();
        } else {
            M.toast({html: "Please draw the picture to continue!"});
        }
    }

    render() {
        return (
            <div>
                <div id="draw-modal" className="modal">
                    <div className="modal-content">
                        <h4>Please draw the picture onto the canvas to continue</h4>
                        <div id="draw-modal-sketches">
                            <img 
                                id="draw-modal-picture"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwgDjEFLGxpd96O0tCq6uxziJlUtwzhP7KbWQmsKNWro2q2ex" 
                                alt="Smiley Face"
                                width="400"
                                height="400"
                            />
                            <CanvasDraw
                                ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                                id="draw-modal-canvas"
                                brushColor={"#000000"}
                                hideGrid={true}
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

export default DrawCaptcha;
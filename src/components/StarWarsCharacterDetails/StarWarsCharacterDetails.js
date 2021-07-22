import Modal from "react-modal";
import React from 'react'

export class StarWarsCharacterDetails extends React.Component {
    render() {
        if (!this.props.visible) {
            return <></>    
        }
        return (
            <>
                <Modal
                    isOpen={this.props.visible}
                    onRequestClose={() => this.props.onClose()}
                    contentLabel="Example Modal"
                >
                    <p>{this.props.character.name}</p>
                    <p>{this.props.character.height}</p>
                    <p>{this.props.character.mass}</p>
                </Modal>                
            </>
        );
    }    
}
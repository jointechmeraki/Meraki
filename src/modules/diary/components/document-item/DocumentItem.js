import React, { Component } from 'react';
import { ContainerItem, ContainerOptions, HeaderItem, TitleItem, ValueItem } from './Style';
import NewDocument from '../new-document/NewDocument';

class DocumentItem extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            openModal: false
        };
    }

    render() 
    {
        return (
            <>
                <ContainerItem>
    
                    {/*Header*/}
                    <HeaderItem>
                        <TitleItem>{this.props.diary.name}</TitleItem>
    
                        {/*Options*/}
                        <ContainerOptions>
                            <i className="edit fas fa-edit" onClick={() => this.setState({ openModal: true })}></i>
                            <i className="remove fas fa-trash-alt"></i>
                        </ContainerOptions>
                    </HeaderItem>
    
                    {/* Value */}
                    <ValueItem>{this.props.diary.value}</ValueItem>
                </ContainerItem>

                {/* Modal */}
                {this.state.openModal && <NewDocument diary={this.props.diary} closeModal={() => this.props.refreshList()} />}
            </>
        );
    }
}

export default DocumentItem;

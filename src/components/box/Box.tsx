import React from "react";
import './Box.scss'

interface Props {

}

export class Box extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.removeColor = this.removeColor.bind(this)
    }

    removeColor (index: number) {
        const local = localStorage.getItem('colors')
        let locals = []
        if (local) {
            locals = JSON.parse(local)
        }
        locals.splice(index, 1)
        localStorage.setItem('colors', JSON.stringify(locals))
        window.location.reload()
    }

    render() {
        const defaultColors = [ '#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E', '#16A085', '#27AE60', '#2980B9', '#8E44AD', '#2C3E50', '#F1C40F', '#E67E22', '#E74C3C', '#ECF0F1', '#95A5A6', '#F39C12', '#D35400', '#C0392B', '#BDC3C7', '#7F8C8D']
        const data = []
        for (const color of defaultColors) {
            data.push(
                <div key={'default-' + color}>
                    <div className="box-item" data-color={color} style={{backgroundColor: color}}/>
                    <div className="box-title">
                        <div>{color}</div>
                    </div>
                </div>
            )
        }

        const local = localStorage.getItem('colors')
        let locals = []
        if (local) {
            locals = JSON.parse(local)
        }
        locals.map((color: string, index: number) => {
            data.push(
                <div key={index}>
                    <div className="box-item" data-color={color} style={{backgroundColor: color}}/>
                    <div className="box-title">
                        <div>{color}</div>
                        <div onClick={this.removeColor.bind(null, index)}>X</div>
                    </div>
                </div>
            )
        })
        return (
            <div className="box-container">
                {data}
            </div>
        )
    }
}

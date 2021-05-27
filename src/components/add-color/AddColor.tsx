import React from "react";
import './AddColor.scss'

interface Props {
}

interface State {
    color: string
}

export class AddColor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            color: ''
        }

        this.onAddColor = this.onAddColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (event: any) {
        this.setState({color: event.target.value});
    }
    onAddColor () {
        const local = localStorage.getItem('colors')
        const colors = []
        if (local) {
            const locals = JSON.parse(local)
            for (const l of locals) {
                colors.push(l)
            }
        }

        colors.push(this.state.color)
        localStorage.setItem('colors', JSON.stringify(colors))

        this.setState({color: ''});
        window.location.reload()
    }
    render() {
        return (
            <div className="add-color-container">
                <div>
                    <strong>Add new color:</strong>
                </div>
                <div>
                    <input value={this.state.color} onChange={this.handleChange}/>
                </div>
                <div>
                    <button onClick={this.onAddColor}>Add</button>
                </div>
            </div>
        )
    }
}

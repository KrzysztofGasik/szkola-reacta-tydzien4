import React, { Component } from 'react'

export default class TipClass extends Component {
    
    state = {
        send: false,
        net: 0,
        tip: 0,
        result: 0
    }

    changeHandler = (event) => {
        const name = event.target.name;
        const value = name === "tip" ? Number(event.target.value) / 100 : Number(event.target.value);
        this.setState({
            [name]: value
        })
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        this.setState({
            send: !this.state.send,
            result: this.calculateResult()
        })
    }
    calculateResult = () => {
        let netFinal = (this.state.net + (this.state.net * this.state.tip));
        let vat = netFinal * 0.23;
        let result = netFinal + vat;
        return `${result.toFixed(2)} zł`;
    }

    render() {
        const styles = this.props.styles;
        return (
            <>
                {this.state.send ? <div style={styles.result}>{this.state.result}</div> : <form onSubmit={this.submitHandler} style={styles.grid}>
                    <input type="number" name="net" onChange={this.changeHandler} style={styles.input} placeholder="netto" required />
                    <select name="tip" id="tip" onChange={this.changeHandler} style={styles.select} required>
                        <option disabled selected value="0"> -- select tip value -- </option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                    </select>
                    <button type="submit" style={styles.button}>Calculate</button>
                </form>}

            </>
        )
    }
}
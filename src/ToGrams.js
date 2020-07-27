import React, {Component} from 'react';

class ToGrams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOutput: false,
            flour: 1000,
            water: 0,
            waterPercent: 80,
            sourdough: 0,
            sourdoughPercent: 15,
            salt: 0,
            saltPercent: 2

        };

        this.handleClick = this.handleClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.calculateGrams();
    };

    calculateGrams() {
        const water = this.state.flour * (this.state.waterPercent / 100);
        const sourdough = this.state.flour * (this.state.sourdoughPercent / 100);
        const salt = this.state.flour * (this.state.saltPercent / 100);

        this.setState({
            showOutput: true,
            water: water,
            sourdough: sourdough,
            salt: salt,
        });
    };

    onInputChange(event) {
        console.log('onInputChange: ' + event.target.name + '=' + event.target.value);
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    };

    render() {
        return (
            <div>
                <h2>Till gram</h2>
                <form>
                    <div className="row">
                        <div className="col-sm mb-2">
                            <div className="form-group">
                                <label htmlFor="flourInput">Mjöl gram</label>
                                <input type="text"
                                       value={this.state.flour}
                                       onChange={this.onInputChange}
                                       className="form-control form-control-lg"
                                       name="flour"
                                       id="flourInput"
                                />
                            </div>
                        </div>
                        <div className="col-sm">

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <div className="form-group">
                                <label htmlFor="waterPercentInput">Vatten %</label>
                                <input type="text"
                                       value={this.state.waterPercent}
                                       onChange={this.onInputChange}
                                       className="form-control form-control-lg"
                                       name="waterPercent"
                                       id="waterPercentInput"
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            {this.state.showOutput ? this.renderWaterInput() : null}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <div className="form-group">
                                <label htmlFor="sourdoughPercentInput">Surdeg %</label>
                                <input type="text"
                                       value={this.state.sourdoughPercent}
                                       onChange={this.onInputChange}
                                       className="form-control form-control-lg"
                                       name="sourdoughPercent"
                                       id="sourdoughPercentInput"
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            {this.state.showOutput ? this.renderSourdoughInput() : null}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <div className="form-group">
                                <label htmlFor="saltPercentInput">Salt %</label>
                                <input type="text"
                                       value={this.state.saltPercent}
                                       onChange={this.onInputChange}
                                       className="form-control form-control-lg"
                                       name="saltPercent"
                                       id="saltPercentInput"
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            {this.state.showOutput ? this.renderSaltInput() : null}
                        </div>
                    </div>

                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Räkna till gram
                    </button>
                </form>
            </div>
        );
    }

    renderWaterInput() {
        return (
            <div className="form-group">
                <label htmlFor="waterInput">Vatten gram</label>
                <input type="text"
                       value={this.state.water}
                       onChange={this.onInputChange}
                       className="form-control form-control-lg"
                       name="water"
                       id="waterInput"
                       disabled
                />
            </div>
        );
    }


    renderSourdoughInput() {
        return (
            <div className="form-group">
                <label htmlFor="sourdoughInput">Surdeg gram</label>
                <input type="text"
                       value={this.state.sourdough}
                       onChange={this.onInputChange}
                       className="form-control form-control-lg"
                       name="sourdough"
                       id="sourdoughInput"
                       disabled
                />
            </div>
        );
    }

    renderSaltInput() {
        return (
            <div className="form-group">
                <label htmlFor="saltInput">Salt gram</label>
                <input type="text"
                       value={this.state.salt}
                       onChange={this.onInputChange}
                       className="form-control form-control-lg"
                       name="salt"
                       id="saltInput"
                       disabled
                />
            </div>
        );
    }
}

export default ToGrams;
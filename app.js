class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogged: true,
            details: [
                {
                    id: 1, name: 'Cypher', age: 22
                },
                {
                    id: 2, name: 'Maddy', age: 32
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {(this.state.isLogged) &&
                    this.state.details.map((detail) => (
                        <div key={detail.id} className="person">
                            <h1>{detail.name}</h1>
                            <h3>Age : {detail.age}</h3>
                        </div>
                    ))
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
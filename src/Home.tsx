import React, { PropsWithChildren } from "react";
import img_familia from "./images/familia.jpg";
import "./Home.css";

class Home extends React.Component<{}, {[key: string]: any}> {

    constructor(props: object) {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        this.setState({value: event.target.value});
    }

    render(): React.ReactNode {
        return (
            <div>
                <div>
                    <img 
                    src={img_familia}
                    className="img-familia"
                    >

                    </img>
                </div>
                <div className="login-container">
                    <h3>Login</h3>
                    <form name="login-form">
                        <label onChange={this.handleChange}>E-mail</label>
                        <input></input>
                        <label onChange={this.handleChange}>Senha</label>
                        <input></input>
                        <button type="submit" value={this.state.value} onClick={(value)=>{console.log({value})}}>Entrar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home;
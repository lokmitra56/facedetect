import React from "react";

const Signin = ({Routechange}) => {
    return (
        <article className="br2 ba b--white mv4 w-100 w-50-m w-25-l mw8 center">
            <main className="pa4 black-80 white">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" for="email-address">Email</label>
                        <input className="b white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="b db fw6 lh-copy f5" for="password">Password</label>
                        <input className="b white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input onClick={() => Routechange("home")} className="b ph3 white pv2 input-reset ba b--white bg-transparent grow pointer f5 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                    <a href="#0" className="f5 b link dim black db white"> Register </a>
                    </div>
                </form>
            </main>
        </article>
    );
}

export default Signin;
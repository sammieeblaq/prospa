import React from 'react'
import back from "../assets/images/back.svg"

const SignUpPage = () => {
    return (
        <div className="w-100">
            <div className="onboard__content">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="back__link">
                        <img src={back} alt="Back" />
                    </div>
                    <div className="signup__link">
                        <span>Already a member? </span>
                        <a href="/signup">Sign In</a>
                    </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-md-5 onboard__form__container">
                    <div class="form__title">Create Account</div>
                    <div class="form__description mb-3">Use your own personal information</div>
                    <div className="onboarding__form">
                        <div className="form-group mb-4">
                            <input className="form-control input__rem" placeholder="First Name" type="text" />
                        </div>
                        <div className="form-group mb-4">
                            <input className="form-control input__rem" placeholder="Last Name" type="text" />
                        </div>
                        <div className="input-group mb-3">
                            <div>
                                <span className="input-group-text input__rem1 mr-4" id="basic-addon1">Country <br /> +234</span>
                            </div>
                            <input type="number" className="form-control input__rem" placeholder="Mobile Number" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="form-group">
                            <input className="form-control input__rem" placeholder="Email Address" type="text" />
                        </div>
                        <div>
                            <button className="btn form-control p-2 btn__color">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage

import React from 'react'

export default function FormTwo() {
  return (
    <div>
      <div className="form__title">Open a new business account</div>
      <div className="form__description mb-2">A short description comes here</div>
      <div className="form-check px-5 py-4 mb-2 rnd shadow__form rnd__color">
        <div className="d-flex align-items-center">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            I have a registered business / <b />
                    charity with CAC
                </label>
        </div>
        <div>
          <div className="form-check d-flex align-items-center">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Account in your business name
                        </label>
          </div>
          <div className="form-check d-flex align-items-center">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Send to and receive transfers from all Nigerian banks
                        </label>
          </div>
          <div className="form-check d-flex align-items-center">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Tools for business management
                        </label>
          </div>
        </div>
      </div>
      <div className="form-check px-5 py-4 mb-3 rnd shadow__form d-flex align-items-center">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          My business is not yet registered, <br />
                    I would like to register.
                </label>
      </div>
      <div className="form-check px-5 py-4 rnd shadow__form d-flex align-items-center">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          I'm a freelancer I do business in , <br />
                    my personal name.
                </label>
      </div>
    </div>
  )
}

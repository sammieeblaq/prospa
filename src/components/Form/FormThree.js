import React from 'react'

export default function FormThree() {
  return (
    <div>
      <div class="form__title">Open a new business account</div>
      <div class="form__description mb-2">A short description comes here</div>
      <div className="form-check px-5 py-4 mb-3 rnd shadow__form d-flex align-items-center">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
        <label className="form-check-label" for="flexRadioDefault2">

          I have a registered business / <b />
                    charity with CAC
                </label>
      </div>
      <div className="form-check px-5 py-4 mb-2 rnd shadow__form rnd__color">
        <div className="d-flex align-items-center">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
            My business is not yet registered, <br />
                    I would like to register.
                </label>
        </div>
        <div>
          <div className="form-check d-flex align-items-center">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" for="flexRadioDefault2">
              Registered business name with CAC
                        </label>
          </div>
          <div className="form-check d-flex align-items-center">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" for="flexRadioDefault2">
              Tax Identification Number
                        </label>
          </div>
          <div className="form-check d-flex align-items-center">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" for="flexRadioDefault2">
              Your account will be automatically opened on completion
                        </label>
          </div>
        </div>
      </div>
      <div className="form-check px-5 py-4 rnd shadow__form d-flex align-items-center">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
        <label className="form-check-label" for="flexRadioDefault2">
          I'm a freelancer I do business in , <br />
                    my personal name.
                </label>
      </div>
    </div>
  )
}

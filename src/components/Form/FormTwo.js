import React from 'react'
import { Accordion, Card } from "react-bootstrap"

import check from "../../assets/images/check.png"

export default function FormTwo() {
  return (
    <div>
      <div className="form__title">Open a new business account</div>
      <div className="form__description mb-2">A short description comes here</div>
      <div>
        <Accordion defaultActiveKey="1">
          <Card className="px-4 py-3 rnd border-0 shadow__form">
            <Accordion.Toggle className="bg-white no__bottom" as={Card.Header} eventKey="0">
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" className="d-none custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadio1">
                  have a registered business / <b />
                    charity with CAC <br />
                </label>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="minus__top pl-5">
                <div className="d__color">As a registered business, you'll get: </div>
                <div><img src={check} alt="Check" className="img-fluid" /> Account in your business name</div>
                <div><img src={check} alt="Check" className="img-fluid" /> Send to and receive transfers from all <span>Nigerian banks</span></div>
                <div><img src={check} alt="Check" className="img-fluid" /> Tools for business management</div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="mt-3">
        <Accordion defaultActiveKey="1">
          <Card className="px-4 py-3 border-0 rnd shadow__form">
            <Accordion.Toggle className="bg-white no__bottom" as={Card.Header} eventKey="0">
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" className="d-none custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadio2">
                  My business is not yet registered,  <br />
                    I would like to register <br />
                </label>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="minus__top pl-5">
                <div className="d__color">Everything you need to start your business: </div>
                <div><img src={check} alt="Check" className="img-fluid" /> Register business name with CAC</div>
                <div><img src={check} alt="Check" className="img-fluid" /> Tax Identification Number</div>
                <div><img src={check} alt="Check" className="img-fluid" /> Your account will be automatically <span className="pl-4">opened on completion</span></div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="form-check mt-3 mb-3 px-5 py-4 rnd shadow__form d-flex align-items-center">
        <div className="custom-control custom-radio">
          <input type="radio" id="customRadio3" name="customRadio" className="d-none custom-control-input" />
          <label className="custom-control-label" htmlFor="customRadio3">
            I'm a freelancer I do business in , <br />
            my personal name.
          </label>
        </div>
      </div>

    </div >
  )
}

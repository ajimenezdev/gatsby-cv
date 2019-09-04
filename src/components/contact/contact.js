import React, { useState } from 'react'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import SectionTitle from '../sectionTitle'

const Contact = ({ className }) => {
  const [category, setCategory] = useState('')
  const [jobType, setJobType] = useState('')

  return (
    <div className={className}>
      <SectionTitle
        title="Contact"
        name="contact"
        icon={<FaEnvelope size={28} />}
      />
      <div className="contact__content">
        <form
          name="contact-form"
          method="post"
          className="contact__form"
          netlify
        >
          <div className="contact__form__item">
            <label for="name" className="contact__form__label">
              Name:
            </label>
            <input type="text" placeholder="name" name="name" />
          </div>
          <div className="contact__form__item">
            <label for="category" className="contact__form__label">
              Category:
            </label>
            <select
              value={category}
              onChange={event => setCategory(event.target.value)}
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="general">General inquiry</option>
              <option value="job">Job offer</option>
              <option value="training">Training offer</option>
            </select>
          </div>
          {category === 'training' && (
            <div className="contact__form__item">
              <label for="location" className="contact__form__label">
                Location:
              </label>
              <input type="text" placeholder="location" name="location" />
            </div>
          )}
          {category === 'job' && (
            <div className="contact__form__item">
              <label for="job_type" className="contact__form__label">
                Job type:
              </label>
              <div className="contact__form_radioContainer">
                <label for="perm" className="contact__form_radioLabel">
                  Permanent
                </label>
                <input
                  type="radio"
                  id="perm"
                  name="job_type"
                  value="perm"
                  onClick={() => setJobType('perm')}
                />
              </div>
              <div className="contact__form_radioContainer">
                <label for="contract" className="contact__form_radioLabel">
                  Contract
                </label>
                <input
                  type="radio"
                  id="contract"
                  name="job_type"
                  value="contract"
                  onClick={() => setJobType('contract')}
                />
              </div>
            </div>
          )}
          <div className="contact__form__item">
            <label for="message" className="contact__form__label">
              Message:
            </label>
            <textarea rows="4" cols="50" name="message" />
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default styled(Contact)`
  .contact__form {
    display: flex;
    flex-direction: column;
  }
  .contact__form__item {
    margin: 10px;
    display: flex;
    align-items: center;
  }
  .contact__form__label {
    min-width: 150px;
    display: inline-block;
  }
  .contact__form_radioContainer {
    display: inline-block;
    margin-right: 20px;
  }
  .contact__form_radioLabel {
    margin-right: 5px;
  }
`

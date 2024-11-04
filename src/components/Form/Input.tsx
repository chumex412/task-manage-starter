import React, { ComponentPropsWithoutRef } from 'react'

interface Input extends ComponentPropsWithoutRef<"input"> {
  label: string
  sr_only?: boolean
  hasError?: boolean
  error?: string
}

const Input = ({
  type = "text", 
  name,
  title, 
  placeholder,
  label,
  value,
  hasError,
  onChange,
  sr_only,
  required 
}: Input) => {
  return (
    <div className="input-field">
      <div className='relative'>
        <label 
          htmlFor={name}
          className={`absolute p-2 text-primary font-normal text-xs bg-off-white left-3 top-0 m-0 opacity-0 -translate-y-1/2 transition-transform duration-300 ${sr_only ? "sr_only" : ""}`}
        >
            <span className='mr-[1px]'>{label}</span>
            {required && (
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                <path fill="#F24E1E" d="M8.2 6 6.5 5l1.8-1a.2.2 0 0 0 0-.3l-.5-1a.2.2 0 0 0-.3 0l-1.7 1v-2a.2.2 0 0 0-.2-.2H4.3a.2.2 0 0 0-.2.2v2l-1.7-1a.2.2 0 0 0-.3 0l-.5 1V4l1.8 1-1.7 1a.2.2 0 0 0-.1.3l.5 1a.2.2 0 0 0 .3 0l1.7-1v2l.2.2h1.2a.2.2 0 0 0 .2-.2v-2l1.7 1a.2.2 0 0 0 .3 0l.5-1a.2.2 0 0 0 0-.3Z"/>
              </svg>
            )}
          </label>
        <input
          type={type}
          className="block w-full px-5 py-4 rounded-[5px] border border-primary" 
          id={name}
          name={name} 
          placeholder={placeholder}
          value={value} 
          required={required}
          onChange={ (e) => {
            if(onChange) {
              onChange(e)
            }
          }}
        />
      </div>
      {
        (required && !value && hasError) ? (
          <small className="error-msg text-[10px] leading-normal text-red">The {title} field is required</small>
        ) : null
      }
    </div>
  )
}

// const FormGroup = styled.div`
//   .form_input:focus {
//     outline: none;
//     border: 1px solid var(--secondary-light, black);
//   }

//   .form_input::-webkit-input-placeholder {
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 16px;
//     letter-spacing: 0.1px;
//     color: #BEB7B7;
//   }
// `

export default React.memo(Input);
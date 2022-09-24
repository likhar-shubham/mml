import React from 'react'
import { TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material'

function InputField(props) {
  return (
    <>
      {props.dropdownData ?
        <FormControl variant="standard" sx={{ mt: 1 }} error={props.error} fullWidth>

          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            label={props.label}
            disabled={props.disabled}
            onChange={props.onChange}
            defaultValue={props.defaultValue}
          >
            {props.dropdownData.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        :
        (props.type === "date" ?
          <TextField
            required={props.required}
            error={props.error}
            label={props.label}
            helperText={props.helperText}
            variant={"filled"}
            onChange={props.onChange}
            type={props.type}
            disabled={props.disabled}
            InputLabelProps={{ shrink: true }}
            defaultValue={props.defaultValue}
          />
          :
          <TextField
            required={props.required}
            error={props.error}
            label={props.label}
            helperText={props.helperText}
            variant={"filled"}
            onChange={props.onChange}
            type={props.type}
            disabled={props.disabled}
            defaultValue={props.defaultValue}
            InputProps={{
              autoCapitalize: "none",
            }}
          />)
      }
    </>
  )
}

InputField.propTypes = {}

export default InputField

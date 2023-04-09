import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import {useState} from 'react'

const LessonRadioGroup = () => {
    const [price, setPrice] = useState("")
     console.log(price);
  return (
    <div>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <RadioGroup
          row
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <FormControlLabel
            value="2000$"
            control={<Radio color="error" />}
            label="2000$"
          />
          <FormControlLabel
            value="3000$"
            control={<Radio color="info" />}
            label="3000$"
          />
          <FormControlLabel
            color="success"
            value="4000$"
            control={<Radio />}
            label="4000$"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default LessonRadioGroup

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useAppContext } from "@/context";

export default function Select({ label, options, disabled }) {
  const { filteringByGender, getData, getByFilter, getShirtByGender } =
    useAppContext();

  const handleChange = (e) => {
    if (e.target.value === "Todos" || e.target.value === "Todas") {
      if (filteringByGender) {
        return getShirtByGender(filteringByGender);
      }
      return getData();
    }
    getByFilter({ type: label, value: e.target.value });
  };

  return (
    <Box className="w-full">
      <FormControl fullWidth disabled={disabled}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {label}
        </InputLabel>
        <NativeSelect
          defaultValue={options[0]}
          inputProps={{
            name: label,
            id: "uncontrolled-native",
          }}
          onChange={handleChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

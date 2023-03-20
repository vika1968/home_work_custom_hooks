import React from 'react'
import { useState } from "react";

export function useCounter (startNumber: number)  {
  const [number, setNumber] = useState(startNumber);

  const plus = () => setNumber(value => value + 1);
  const minus = () => setNumber(value => value - 1);
  const reset= () => setNumber(startNumber);

  return { number, plus, minus, reset };

}

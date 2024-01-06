'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import BasicDatePicker from '@/app/ui/dashboard/date-pkr';
import BasicTable from '@/app/ui/dashboard/m-table';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Page() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'NanumGothic',
      ].join(','),
    },
  });

  return (
    <>
      <p className="text-slate-900 text-2xl font-bold">Customers Page 3 햇살에 일어나 보니</p>
      <ThemeProvider theme={theme}>
        <div className="my-10 lg:mt-10 flex flex-wrap flex-col items-center lg:flex-row">
          <Button variant="contained">너무나 눈부셔</Button>
        </div>
      </ThemeProvider>
      <BasicTable/>
    </>
  );
}



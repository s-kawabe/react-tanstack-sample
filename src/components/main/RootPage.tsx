import type { VFC } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export const RootPage: VFC = () => {
  return (
    <div>
      <h1>hello world</h1>
      <Stack direction="row" spacing={2} mb={"20px"}>
        <Button variant="contained">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="info">Info</Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="error">Error</Button>
        <Button variant="outlined" color="info">Info</Button>
      </Stack>
    </div>
  )
}

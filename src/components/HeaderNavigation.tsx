import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-location'

export const HeaderNavigation = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs aria-label="basic tabs example">
        <Tab label="Home" onClick={() => {navigate({ to: '/'})}} />
        <Tab label="Posts" onClick={() => {navigate({ to: '/posts'})}} />
      </Tabs>
    </Box>
  )
}

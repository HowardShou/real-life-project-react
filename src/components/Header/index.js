import Box from '@material-ui/core/Box'
import MainHead from './MainHead'
import SubHead from './SubHead'

const Header = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <MainHead />
      <SubHead />
    </Box>
  )
}

export default Header

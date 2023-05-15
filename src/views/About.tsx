import useResponsive from '../hooks/useResponsive'
import WIP from '../components/WIP'


function AboutView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <WIP/>
  )
}

export default AboutView
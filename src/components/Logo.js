import { LOGO_URL } from "../utils/constants"

const Logo = () => {
    return (
      <a href="/">
        <img alt="logo" className="w-20" src={LOGO_URL}></img>
      </a>
    )
  }

  export default Logo
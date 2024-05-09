import { LOGO_URL } from "../utils/constants"

const Logo = () => {
    return (
      <a href="/">
        <img alt="logo" className="logo" src={LOGO_URL}></img>
      </a>
    )
  }

  export default Logo
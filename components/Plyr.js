import Plyr from "react-plyr"

export default function Video() {
  return (
    <Plyr
      className="Video"
      type="youtube" // or "vimeo"
      videoId="SsiNQxsMxDg"
    />
  )
}

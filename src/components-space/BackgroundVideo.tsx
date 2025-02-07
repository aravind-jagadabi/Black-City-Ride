

const BackgroundVideo = () => {
  return(
    <div>
      <video loop autoPlay muted id = "bg-video">
        <source src={require('../media-space/earthnightlook.mp4')} type="video/mp4" />
      </video>
    </div>
  )
}

export default BackgroundVideo;
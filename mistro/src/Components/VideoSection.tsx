function VideoSection() {
  return (
    <section className="video-section">
      <h2>Watch MISTRO Demo</h2>

      <video controls width="800">
        <source
          src="/promo.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}

export default VideoSection;
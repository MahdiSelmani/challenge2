function About() {
    return (
        <section className="about-section">
        <div>
          <h1 className="title" id="title">
            Want to learn
            <span className="css-span">CSS</span>
            ?<br />
            Join us for more videos.
          </h1>
          <button className="watchvideo-btn">Watch video</button>
        </div>
        <iframe width={560} height={315} src="https://www.youtube.com/embed/1PnVor36_40" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </section>
    )
}
export default About;
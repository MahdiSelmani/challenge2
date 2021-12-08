function Project() {
    var arr=[{title:"Project1"},{title:"project2"},{title:"project3"},{title:"project4"},{title:"project5"},{title:"project6"}]
    return (
         <section className="projects-section">
            {arr.map(el => <div className="project">
                <img src="https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg" style={{ width: '360px', height: '208, 69px' }}alt="project" />
                <h3>{el.title}</h3>
                <p>
                    Explore how budgetary constraints affect <br />
                    creativity–for better or worse–in our Webby <br />
                    Award-winning original series.
                </p>
                <a href="/"> Explore &amp; learn more</a><br />
            </div>)}
        
            </section>
    )
    
}
export default Project;
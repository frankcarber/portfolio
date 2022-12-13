import React from "react";
import './Projects.css';


export default function Projects() {
  return (
    
    <body>
      <section>
      <section class = "section-main">
        <img class = "mountain" src="https://i.imgur.com/0VTr8VG.png">
        </img>
          <div class = "column">
            <div class = "big-text" id = "project-anchor">
              <br></br>
              DESIGN PROJECTS
            </div>
            <h1>Personas</h1>
            <div class="little-label">2022 · CS1300</div>
            <div class="tags-body">
              <div class="tags">UX</div>
              <div class="tags">User Research</div>
              <div class="tags">Conceptual Design</div>
            </div>
            <h3>
            Problem Statement: Survey real customers at MetroMart to understand 
            how users interact with a digital checkout interface.
            </h3>
          </div>
      </section>

      <section class = "third-section">
        <div class = "second-col-right">
          <h3>Background & Research Process: </h3>
            <p class="inner-col-text">
            This project started as an effort to understand how users interacted with 
            a touchscreen card reader (shown to the right) in-context. In order to study 
            this, I conducted behavioral interviews, asking the following questions to 
            5 customers at checkout. 
              <ol type="1">
                <li>What is your first impression of the device? </li>
                <li>Follow up: On first glance, did you recognize it as a card reader device?</li>
                <li>While you were checking out, at what points did you felt confused or challenged to figure out what to do? </li>
                <li>What did you enjoy about the card reader’s interface and usability? What did you dislike?</li>
              </ol>
              <br>
              </br>
          </p>

        </div>
      <div class = "second-col-left">
        <img class = "img-prototype" src = "https://i.imgur.com/ATfIpH9.png">
        </img>

      </div>    
      </section>

      <section class = "third-section">
      <div class = "second-col-left">
        <h3>Research Findings: </h3>
            <p class="inner-col-text">
            Here is what I noticed while watching people check-out using the card reader.
              <ul>
                <li>Users all completed the process (from arriving at the counter to leaving with their purchased items) 
                  in under 1 minute (~30 seconds on average). </li>
                <li>About half of users pulled out a card from their wallet, the other half used their phone to tap their digital card.</li>
                <li>The device was positioned away from the user before each transaction and then placed in front 
                  of the customer (by the cashier) after inputing the price</li>
                <li>There were only two moments of hesitation: 1) when prompted to tap or insert their card 2) after confirmation, when prompted to select a receipt option</li>
              </ul>
          </p>
      </div>
      <div class = "second-col-right">
      <h3>Interview Responses:</h3>
            <p class="inner-col-text">
            From the six questions, here are some of the key takeaways I gathered after conducting the short interview with some of the customers. 
            These insights helped develop the personas and storyboards to follow.
              <ul>
                <li>RE Question 1: In general, people surveyed found the device and its interface intuitive and immediately identified it as a card reader. </li>
                <li>RE Questions 2-4: Overall, users did not find the interface challenging and multiple users reported its “ease” of use and efficiency.</li>
                <li>The device was positioned away from the user before each transaction and then placed in front 
                  of the customer (by the cashier) after inputing the price</li>
                <li>RE Question 5-6: All users who had the ability to tap their card used the tap functionality. No one requested a receipt, with several respondents leaving the receipt-selection field blank. </li>
              </ul>
          </p>
      </div>
      </section>



      <section class = "third-section">
        <div class = "second-col-left">
          <img src = "https://i.imgur.com/dp9ZP3J.png" style = {{width: 1300, height: 700}}></img>
        </div>
      </section>

      
      <section class = "third-section">
          <div class = "second-col-right">
            <h3>Storyboards: </h3>
              <p class="inner-col-text">
              With the personas, I drew out the user journeys for personas of Jamie, thinking about where, when and why the user was running into trouble, 
              while also thinking about their motivations and actions leading up to and during the checkout process. 
              The journey maps/storyboards helped uncover the specific challenges unique to either type of customer, 
              while also helping get to the bottom of the challenges presented by the interface. 
              For user Jamie, while she is a tech savvy student, the interface doesn't make it clear whether or not the user needs to select a receipt type, 
              so she leaves the store without selecting a receipt, leaving the flow incomplete. 
            </p>

          </div>  
      </section>

      <section class = "third-section">
      <div class = "second-col-left">
          <img class = "big-img" src = "https://i.imgur.com/56bBz9Y.jpg">
          </img>
      </div>  
      </section>

      <section class = "third-section">
          <div class = "second-col-right">
          <h3>Conclusion: </h3>
              <p class="inner-col-text">
              With the storyboard and personas, I was able to consolidate the research gathered
              from real users and create a kind of 'archetype' for a type of user. While these
              design artifacts were not used for developing an interface or technology, 
              they brought into focus the importance of the research stage, and relying on real-world
              data and interviews, in the design process. A next step for this project would be to 
              take the personas as a starting off point for improving the checkout interface.
              <br>
              </br>
              <br>
              </br>
              <br>
              </br>
            </p>
          </div>
      </section>


      <section class = "second-section">
        <div class = "first-col-left">
          <h1>Andi Redesign</h1>
          <div class="little-label">2022 · CS1300</div>
            <div class="tags-body">
              <div class="tags">UX Design</div>
              <div class="tags">Prototyping</div>
              <div class="tags">UI</div>
              <div class="tags">User Testing</div>
            </div>
            <h3>
            Problem Statement:
            Redesign the mobile app experience for an emerging search engine start-up.
            </h3>
        </div>

        <div class = "first-col-right">
          <img src = "https://i.imgur.com/tvHBjXw.png" style = {{width: 280, height: 500}}></img>
        </div>
      </section>

    <section class = "second-section">
      <div class = "second-col-left">
        <img src = "https://i.imgur.com/sE5wZIb.jpeg" style = {{width: 450, height: 400}}></img>
      </div>
      <div class = "second-col-right">
        <h3>Iteration 0: </h3>
          <p class="inner-col-text">
          The first step of our redesign began with mocking up basic sketches for the mobile prototype.
          From the initial round of sketches, we identified 3 core features for the redesign:
            <ol type="1">
              <li>Search for query</li>
              <li>Load results</li>
              <li>Tap to load page</li>
            </ol>
        </p>
      </div>
    </section>

    <section class = "second-section">
      <div class = "second-col-left">
      <h3>Iteration 1: </h3>
          <p class="inner-col-text">
            With our initial round of sketches, we dove into hi-fi designs, taking inspiration from 
            existing search engines and began designing guided by the principles of: simplicity and usability.
        </p>
      </div>
      <div class = "second-col-right">
        <img src = "https://i.imgur.com/AyPbzTX.png" style = {{width: 530, height: 500}}></img>
      </div>
    </section>



    <section class = "second-section">
      <div class = "second-col-left">
      <iframe width="720" height="550" src="https://www.youtube.com/embed/PQk1jDrAmGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class = "second-col-right">
        <h3>Research & Feedback </h3>
          <p class="inner-col-text">
          With our hi-fi designs and prototype in hand, our
          designs were ready for feedback. We first walked
          through our prototype with other students, who
          helped give unbiased feedback on both the strength
          and weaknesses of our designs. Here were some of our takeaways:
          <ul>
              <li>Improve consistency with elements</li>
              <li>Reduce design redundancies</li>
              <li>Add context for user</li>
          </ul>
          After implementing these changes we went through three
          rounds of user testing to validate our results. 
        </p>
      </div>
    </section>

    <section class = "second-section">
      <div class = "second-col-left">
      <h3>Conclusion </h3>
          <p class="inner-col-text">
            From user testing, we found that users were able to use 
            the interface without confusion and overall, were 
            satisfied with its simplicity. However, with more time
            our next steps would be to make the form of our design
            align with its function more prominently. 
        </p>
      </div>
      <div class = "second-col-right">
        <img src = "https://i.giphy.com/media/vDrZFM7JM6kKMHKLPK/giphy.webp" style = {{width: 280, height: 550}}></img>
      </div>
    </section>

    <section class = "second-section">
        <img class = "mountain" src="https://i.imgur.com/0VTr8VG.png">
          </img>
    </section>

    <section class = "third-section">
        <div class = "first-col-left">
          <h1>Al-Shami Web Redesign</h1>
          <div class="little-label">2022 · CS1300</div>
            <div class="tags-body">
              <div class="tags">UX Design</div>
              <div class="tags">Responsive Design</div>
              <div class="tags">UI</div>
            </div>
            <h3>
            Problem Statement:
            Redesign a responsive website for the best shwarma shop on Thayer!
            <br></br>
            <br></br>
            </h3>
        </div>
    </section>


    <section class = "third-section">
      <div class = "second-col-left">
        <img src = "https://i.imgur.com/drMvBf5.png" style = {{width: 360, height: 660}}></img>
      </div>
      <div class = "second-col-right">
        <h3>Research & Wireframing: </h3>
          <p class="inner-col-text">
          The initial step of this redesign began first to identify problems with the existing design.
          This required first, to inspect existing accessibility issues 
          as well as design components of the existing site that might
          confuse or frustrate users. My findings below:
            <ol type="1">
              <li>Existing design may confuse users
              </li>
              <li>Navigation bar is not consistent with the rest of the site</li>
              <li>Overall structure lacks consistency and clarity</li>
            </ol>
        </p>
      </div>
    </section>

    <section class = "third-section">
      <div class = "first-col-left">
      <p class="inner-col-text">
        <br></br>
          After identifying the problems with the existing webpage
          I began wireframing an improved interface for the website,
          starting with mobile-first design. 
      </p>
      </div>
    </section>

    <section class = "third-section">
      <div class = "three-row">
        <img class = "two-image" src = "https://i.imgur.com/hfxvV2l.png" style = {{width: 630}}></img>
        <img class = "two-image" src = "https://i.imgur.com/TGG1ngP.png" style = {{width: 750}}></img>
    </div>
    </section>

    <section class = "third-section">
      <div class = "second-col-left">

      </div>
    </section>

    <section class = "third-section">
      <div class = "second-col-left">
        <iframe class = "frame-responsive" src = "https://existentialmom.github.io/alshamiwebsite/"></iframe>
      </div>
      <div class = "second-col-right">
        <h3>Final Design & Future Steps: </h3>
          <p class="inner-col-text">
          With the low fidelity sketches, I dove into designing the high 
          fidelity screens for the responsive redesign. With the limited
          time of this project, the design only included the basic 
          concept for what a redesigned site might look like. For future iterations
          of this project, I would refine the visual design elements, building 
          off of the responsive design to make a more visually compelling 
          experience for users.
          <br>
          </br>
          <br>
          </br>
          View the full responsive site: <a href="https://existentialmom.github.io/alshamiwebsite/" target="_blank">Al Shami Redesign</a>
        </p>
        <br>
              </br>
              <br>
              </br>
              <br>
              </br>
      </div>
    </section>

    <section class = "second-section">
        <div class = "first-col-left">
              <br>
              </br>
              <br>
              </br>
          <h1>Neumorphic Music App</h1>
          <div class="little-label">2022 · Speculative Project</div>
            <div class="tags-body">
              <div class="tags">UI/UX Design</div>
              <div class="tags">Competitive Analysis</div>
              <div class="tags">Conceptual Design</div>
            </div>
            <h3>
            The Task:
            Design an audiobook mobile app with neurmorphic inspired visuals for the interface design.
            <br></br>
            </h3>
        </div>
      </section>

    <section class = "second-section">
      <div class = "second-col-left">
      <h3>Step 0: Research </h3>
          <p class="inner-col-text">
          After 3 meaningful days of online research of data and articles, I came accross some interesting findings:
          <ul>
              <li>Millennials & Gen Z are among the highest usage rates for streaming services</li>
              <li>"Ease of use" was the top reason reported for listening to audiobooks</li>
              <li>Spotify (#1 streaming platform for millennials) reported that the 
                "Your Music" page was a key driver for keeping people on the app</li>
          </ul>
        </p>
      </div>
      <div class = "second-col-right">
      <h3>Step 1: Identify Patterns </h3>
          <p class="inner-col-text">
          As I continued to research, I started noticing there was a pattern 
          in the types of issues audiobook listeners had. I consolidated these findings into some basic 'pain points', 
          things that users might like to have solved by a product, such as:
          <ol type="1">
              <li>People who listen to audiobooks tend to do so while multitasking, needing a simple interface</li>
              <li>Mobile app users strongly prefer "personalized" experiences</li>
              <li>High levels of stress creates a desire for products that are easy and soothing to use</li>
          </ol>
        </p>
      </div>
    </section>

    <section class = "second-section">
      <div class = "second-col-left">
      <h3>Step 2: Exploratory Design </h3>
      <p class = "inner-col-text">
        With these insights in mind, I sought out some design inspiration by searching out modern design trends that solved these pain points
        keeping track of these sources of inspiration with a moodboard.
      </p>
      </div>
    </section>

    <section class = "second-section">
      <div class = "second-col-left">
          <img class = "big-img" src = "https://i.imgur.com/V0lQ4fd.png">
          </img>
      </div>  
      </section>

      <section class = "second-section">
      <div class = "second-col-left">
        <img class = "col-img" src = "https://i.imgur.com/6jaMip8.png"></img>
      </div>
      <div class = "second-col-right">
        <h3>Step 3: Sketches</h3>
            <p class="inner-col-text">
              With inspiration from the moodboard, I started mocking up sketches, 
              keeping in mind how the visual design and overall functionality of the 
              site could contribute to solving the user pain points and creating 
              a calming experience for listeners.
          </p>
          
      </div>
    </section>


    <section class = "second-section">
      <div class = "second-col-left">
      <h3>Step 4: Hi-fidelity Designs</h3>
          <p class="inner-col-text">
          After UI & Design Discovery, I moved on to creating high-fidelity prototypes. 
          I used brand guidelines and the visual inspiration from the design discovery 
          phase to create the cards, colors, and buttons. 
          To give the app a modern effect and distinct appearance from similar apps, 
          I designed new gradients for a modern effect. Here's the final designs.
        </p>
      </div>
      <div class = "second-col-right">
        <img class = "col-img-big" src = "https://i.imgur.com/jxETciB.png"></img>
      </div>
    </section>


    <section class = "second-section">
      <div class = "second-col-left">
      <h3>Conclusion</h3>
      <p class = "inner-col-text">
        <h4>Reflection: What I learned</h4>
        Overall, I really enjoyed getting to design this app. 
        As a music and audiobook lover, it was really enjoyable to learn about 
        the motivations and pain points behind using streaming services. 
        This was also my first time creating a style guide and 
        I found that the experience was hugely influential my design. 
        I also got to spend a lot of time looking at designs for inspiration 
        in Dribble and Behance, 
        which gave me inspiration for this project and as well as projects to come!
      </p>
      </div>
    </section>



    <section class = "second-section">
        <img class = "mountain" src="https://i.imgur.com/0VTr8VG.png">
          </img>
    </section>

    <section class = "about-section" id="about-anchor">
        <div class = "first-col-left">
          <h1>About Me</h1>
          <div class="little-label">UX Designer · Creative Technologist · Student</div>
          <h3>
              Hey again! My name is [PLAYER 1]. I'm a designer based out of Providence, RI.
              I'm inspired by 1980s and early-90s internet designs, bringing a nostalgic 
              and surreal feel to my designs.
              <br></br>
              <br></br>
              </h3>
        </div>
    </section>

    </section>
    </body>
  );
} 